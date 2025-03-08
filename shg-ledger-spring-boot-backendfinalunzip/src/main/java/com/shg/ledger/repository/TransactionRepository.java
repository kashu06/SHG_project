package com.shg.ledger.repository;

import com.shg.ledger.model.Transaction;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    
    List<Transaction> findByMemberId(Long memberId);
    
    @Query("SELECT t FROM Transaction t WHERE t.member.id = :memberId ORDER BY t.date DESC")
    List<Transaction> findByMemberIdOrderByDateDesc(@Param("memberId") Long memberId);
    
    @Query("SELECT t FROM Transaction t ORDER BY t.date DESC LIMIT 5")
    List<Transaction> findTop5ByOrderByDateDesc();
    
    @Query("SELECT SUM(t.amount) FROM Transaction t WHERE t.type = 'DEPOSIT' AND t.date BETWEEN :startDate AND :endDate")
    Double getTotalDepositsBetweenDates(@Param("startDate") LocalDate startDate, @Param("endDate") LocalDate endDate);
}

