package com.shg.ledger.controller;

import com.shg.ledger.dto.LoanDTO;
import com.shg.ledger.model.Loan.LoanStatus;
import com.shg.ledger.service.LoanService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/loans")
@RequiredArgsConstructor
public class LoanController {

    private final LoanService loanService = new LoanService(null, null, null);



    @GetMapping
    public ResponseEntity<List<LoanDTO>> getAllLoans(
            @RequestParam(required = false) Long memberId,
            @RequestParam(required = false) LoanStatus status) {
        if (memberId != null) {
            return ResponseEntity.ok(loanService.getLoansByMemberId(memberId));
        } else if (status != null) {
            return ResponseEntity.ok(loanService.getLoansByStatus(status));
        }
        return ResponseEntity.ok(loanService.getAllLoans());
    }

    @GetMapping("/{id}")
    public ResponseEntity<LoanDTO> getLoanById(@PathVariable Long id) {
        return ResponseEntity.ok(loanService.getLoanById(id));
    }

    @PostMapping
    public ResponseEntity<LoanDTO> createLoan(@Valid @RequestBody LoanDTO loanDTO) {
        return new ResponseEntity<>(loanService.createLoan(loanDTO), HttpStatus.CREATED);
    }

    @PostMapping("/{id}/payment")
    public ResponseEntity<LoanDTO> makeLoanPayment(
            @PathVariable Long id,
            @RequestBody Map<String, Object> paymentDetails) {
        double amount = Double.parseDouble(paymentDetails.get("amount").toString());
        String description = paymentDetails.get("description").toString();
        
        return ResponseEntity.ok(loanService.makeLoanPayment(id, amount, description));
    }
}

