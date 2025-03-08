package com.shg.ledger.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class DashboardDTO {
    private int totalMembers;
    private double totalSavings;
    private double totalLoans;
    private double pendingDues;
    private List<TransactionDTO> recentTransactions;
    private List<MonthlyCollection> monthlyCollections;

    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class MonthlyCollection {
        private String month;
        private double amount;
    }
}

