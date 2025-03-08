package com.shg.ledger.service;

import com.shg.ledger.dto.LoanDTO;
import com.shg.ledger.dto.TransactionDTO;
import com.shg.ledger.model.Loan;
import com.shg.ledger.model.Loan.LoanStatus;
import com.shg.ledger.model.Member;
import com.shg.ledger.model.Transaction;
import com.shg.ledger.repository.LoanRepository;
import com.shg.ledger.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LoanService {

    private final LoanRepository loanRepository;
    private final MemberRepository memberRepository;
    private final TransactionService transactionService;

    public List<LoanDTO> getAllLoans() {
        return loanRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<LoanDTO> getLoansByMemberId(Long memberId) {
        return loanRepository.findByMemberId(memberId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<LoanDTO> getLoansByStatus(LoanStatus status) {
        return loanRepository.findByStatus(status).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public LoanDTO getLoanById(Long id) {
        Loan loan = loanRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Loan not found with id: " + id));
        return convertToDTO(loan);
    }

    @Transactional
    public LoanDTO createLoan(LoanDTO loanDTO) {
        Member member = memberRepository.findById(loanDTO.getMemberId())
                .orElseThrow(() -> new EntityNotFoundException("Member not found with id: " + loanDTO.getMemberId()));
        
        Loan loan = new Loan();
        loan.setMember(member);
        loan.setPrincipal(loanDTO.getPrincipal());
        loan.setInterest(loanDTO.getInterest());
        loan.setDuration(loanDTO.getDuration());
        loan.setStartDate(loanDTO.getStartDate());
        loan.setEndDate(loanDTO.getEndDate());
        loan.setStatus(LoanStatus.ACTIVE);
        loan.setPurpose(loanDTO.getPurpose());
        loan.setBalance(loanDTO.getPrincipal());
        loan.setPaidAmount(0.0);
        loan.setNextDueDate(loanDTO.getStartDate().plusMonths(1));
        
        Loan savedLoan = loanRepository.save(loan);
        
        // Create a loan disbursement transaction
        Transaction.TransactionType transactionType = Transaction.TransactionType.LOAN_DISBURSEMENT;
        createLoanTransaction(savedLoan, transactionType, loanDTO.getPrincipal(), "Loan disbursement");
        
        // Update member's loan balance
        member.setLoanBalance(member.getLoanBalance() + loanDTO.getPrincipal());
        memberRepository.save(member);
        
        return convertToDTO(savedLoan);
    }

    @Transactional
    public LoanDTO makeLoanPayment(Long loanId, double amount, String description) {
        Loan loan = loanRepository.findById(loanId)
                .orElseThrow(() -> new EntityNotFoundException("Loan not found with id: " + loanId));
        
        if (loan.getStatus() != LoanStatus.ACTIVE) {
            throw new IllegalStateException("Cannot make payment on a non-active loan");
        }
        
        if (amount <= 0) {
            throw new IllegalArgumentException("Payment amount must be positive");
        }
        
        // Update loan balance
        double newBalance = loan.getBalance() - amount;
        loan.setBalance(Math.max(0, newBalance));
        loan.setPaidAmount(loan.getPaidAmount() + amount);
        
        // Update loan status if fully paid
        if (loan.getBalance() <= 0) {
            loan.setStatus(LoanStatus.COMPLETED);
            loan.setBalance(0);
        }
        
        // Calculate next due date if loan is still active
        if (loan.getStatus() == LoanStatus.ACTIVE) {
            loan.setNextDueDate(LocalDate.now().plusMonths(1));
        } else {
            loan.setNextDueDate(null);
        }
        
        Loan updatedLoan = loanRepository.save(loan);
        
        // Create a loan repayment transaction
        Transaction.TransactionType transactionType = Transaction.TransactionType.LOAN_REPAYMENT;
        createLoanTransaction(updatedLoan, transactionType, amount, description);
        
        // Update member's loan balance
        Member member = updatedLoan.getMember();
        member.setLoanBalance(member.getLoanBalance() - amount);
        memberRepository.save(member);
        
        return convertToDTO(updatedLoan);
    }
    
    private void createLoanTransaction(Loan loan, Transaction.TransactionType type, double amount, String description) {
        TransactionDTO transactionDTO = new TransactionDTO();
        transactionDTO.setMemberId(loan.getMember().getId());
        transactionDTO.setType(type);
        transactionDTO.setAmount(amount);
        transactionDTO.setDate(LocalDate.now());
        transactionDTO.setDescription(description);
        transactionDTO.setLoanId(loan.getId());
        
        transactionService.createTransaction(transactionDTO);
    }

    private LoanDTO convertToDTO(Loan loan) {
        LoanDTO dto = new LoanDTO();
        dto.setId(loan.getId());
        dto.setMemberId(loan.getMember().getId());
        dto.setMemberName(loan.getMember().getName());
        dto.setPrincipal(loan.getPrincipal());
        dto.setInterest(loan.getInterest());
        dto.setDuration(loan.getDuration());
        dto.setStartDate(loan.getStartDate());
        dto.setEndDate(loan.getEndDate());
        dto.setStatus(loan.getStatus());
        dto.setPurpose(loan.getPurpose());
        dto.setBalance(loan.getBalance());
        dto.setPaidAmount(loan.getPaidAmount());
        dto.setNextDueDate(loan.getNextDueDate());
        return dto;
    }
}

