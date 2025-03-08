package com.shg.ledger.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberDTO {
    private Long id;
    private String name;
    private String phone;
    private String address;
    private LocalDate joiningDate;
    private double totalSavings;
    private double loanBalance;
}

