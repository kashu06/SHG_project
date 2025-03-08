package com.shg.ledger.dto;

import com.shg.ledger.model.Transaction.TransactionType;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TransactionDTO {
    private Long id;
    private Long memberId;
    private String memberName;
    private TransactionType type;
    private double amount;
    private LocalDate date;
    private String description;
    private Long loanId;
}

