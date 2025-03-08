package com.shg.ledger.repository;

import com.shg.ledger.model.Loan;
import com.shg.ledger.model.Loan.LoanStatus;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface LoanRepository extends JpaRepository<Loan, Long> {
    
    List<Loan> findByMemberId(Long memberId);
    
    List<Loan> findByStatus(LoanStatus status);
    
    @Query("SELECT SUM(l.balance) FROM Loan l WHERE l.status = 'ACTIVE'")
    Double getTotalActiveLoanBalance();
    
    @Query("SELECT COUNT(l) FROM Loan l WHERE l.status = 'ACTIVE'")
    Long countActiveLoans();
    
    @Query("SELECT SUM(l.balance) FROM Loan l WHERE l.nextDueDate BETWEEN :startDate AND :endDate")
    Double getTotalDuesBetweenDates(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
}

