package com.shg.ledger.service;

import com.shg.ledger.dto.DashboardDTO;
import com.shg.ledger.dto.TransactionDTO;
import com.shg.ledger.repository.LoanRepository;
import com.shg.ledger.repository.MemberRepository;
import com.shg.ledger.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class DashboardService {

    private final MemberRepository memberRepository;
    private final LoanRepository loanRepository;
    private final TransactionRepository transactionRepository;
    private final TransactionService transactionService;

    public DashboardDTO getDashboardData() {
        DashboardDTO dashboardDTO = new DashboardDTO();
        
        // Get total members
        Long totalMembers = memberRepository.countMembers();
        dashboardDTO.setTotalMembers(totalMembers != null ? totalMembers.intValue() : 0);
        
        // Get total savings
        Double totalSavings = memberRepository.getTotalSavings();
        dashboardDTO.setTotalSavings(totalSavings != null ? totalSavings : 0.0);
        
        // Get total loans
        Double totalLoans = loanRepository.getTotalActiveLoanBalance();
        dashboardDTO.setTotalLoans(totalLoans != null ? totalLoans : 0.0);
        
        // Get pending dues for next 30 days
        LocalDate today = LocalDate.now();
        LocalDate thirtyDaysLater = today.plusDays(30);
        Double pendingDues = loanRepository.getTotalDuesBetweenDates(today, thirtyDaysLater);
        dashboardDTO.setPendingDues(pendingDues != null ? pendingDues : 0.0);
        
        // Get recent transactions
        List<TransactionDTO> recentTransactions = transactionService.getRecentTransactions();
        dashboardDTO.setRecentTransactions(recentTransactions);
        
        // Get monthly collections for the last 6 months
        List<DashboardDTO.MonthlyCollection> monthlyCollections = new ArrayList<>();
        LocalDate sixMonthsAgo = today.minusMonths(6);
        
        for (int i = 0; i < 6; i++) {
            LocalDate startOfMonth = sixMonthsAgo.plusMonths(i).withDayOfMonth(1);
            LocalDate endOfMonth = startOfMonth.plusMonths(1).minusDays(1);
            
            Double monthlyDeposit = transactionRepository.getTotalDepositsBetweenDates(startOfMonth, endOfMonth);
            if (monthlyDeposit == null) {
                monthlyDeposit = 0.0;
            }
            
            String monthName = startOfMonth.getMonth().getDisplayName(java.time.format.TextStyle.SHORT, java.util.Locale.ENGLISH);
            monthlyCollections.add(new DashboardDTO.MonthlyCollection(monthName, monthlyDeposit));
        }
        
        dashboardDTO.setMonthlyCollections(monthlyCollections);
        
        return dashboardDTO;
    }
}

