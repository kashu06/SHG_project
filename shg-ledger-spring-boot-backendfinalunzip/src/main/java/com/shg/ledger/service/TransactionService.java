package com.shg.ledger.service;

import com.shg.ledger.dto.TransactionDTO;
import com.shg.ledger.model.Loan;
import com.shg.ledger.model.Member;
import com.shg.ledger.model.Transaction;
import com.shg.ledger.repository.LoanRepository;
import com.shg.ledger.repository.MemberRepository;
import com.shg.ledger.repository.TransactionRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final MemberRepository memberRepository;
    private final LoanRepository loanRepository;
    private final MemberService memberService;

    public List<TransactionDTO> getAllTransactions() {
        return transactionRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public List<TransactionDTO> getTransactionsByMemberId(Long memberId) {
        return transactionRepository.findByMemberIdOrderByDateDesc(memberId).stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public TransactionDTO getTransactionById(Long id) {
        Transaction transaction = transactionRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Transaction not found with id: " + id));
        return convertToDTO(transaction);
    }

    public List<TransactionDTO> getRecentTransactions() {
        return transactionRepository.findTop5ByOrderByDateDesc().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    @Transactional
    public TransactionDTO createTransaction(TransactionDTO transactionDTO) {
        Member member = memberRepository.findById(transactionDTO.getMemberId())
                .orElseThrow(() -> new EntityNotFoundException("Member not found with id: " + transactionDTO.getMemberId()));
        
        Transaction transaction = new Transaction();
        transaction.setMember(member);
        transaction.setType(transactionDTO.getType());
        transaction.setAmount(transactionDTO.getAmount());
        transaction.setDate(transactionDTO.getDate());
        transaction.setDescription(transactionDTO.getDescription());
        
        // If transaction is related to a loan
        if (transactionDTO.getLoanId() != null) {
            Loan loan = loanRepository.findById(transactionDTO.getLoanId())
                    .orElseThrow(() -> new EntityNotFoundException("Loan not found with id: " + transactionDTO.getLoanId()));
            transaction.setLoan(loan);
        }
        
        // Update member balance based on transaction type
        switch (transaction.getType()) {
            case DEPOSIT:
                memberService.updateMemberSavings(member.getId(), transaction.getAmount());
                break;
            case WITHDRAWAL:
                memberService.updateMemberSavings(member.getId(), -transaction.getAmount());
                break;
            case LOAN_DISBURSEMENT:
                memberService.updateMemberLoanBalance(member.getId(), transaction.getAmount());
                break;
            case LOAN_REPAYMENT:
                memberService.updateMemberLoanBalance(member.getId(), -transaction.getAmount());
                break;
            default:
                break;
        }
        
        Transaction savedTransaction = transactionRepository.save(transaction);
        return convertToDTO(savedTransaction);
    }

    private TransactionDTO convertToDTO(Transaction transaction) {
        TransactionDTO dto = new TransactionDTO();
        dto.setId(transaction.getId());
        dto.setMemberId(transaction.getMember().getId());
        dto.setMemberName(transaction.getMember().getName());
        dto.setType(transaction.getType());
        dto.setAmount(transaction.getAmount());
        dto.setDate(transaction.getDate());
        dto.setDescription(transaction.getDescription());
        
        if (transaction.getLoan() != null) {
            dto.setLoanId(transaction.getLoan().getId());
        }
        
        return dto;
    }
}

