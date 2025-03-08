package com.shg.ledger.dto;

import com.shg.ledger.model.Loan.LoanStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LoanDTO {
    private Long id;
    private Long memberId;
    private String memberName;
    private double principal;
    private double interest;
    private int duration;
    private LocalDate startDate;
    private LocalDate endDate;
    private LoanStatus status;
    private String purpose;
    private double balance;
    private double paidAmount;
    private LocalDate nextDueDate;


}

