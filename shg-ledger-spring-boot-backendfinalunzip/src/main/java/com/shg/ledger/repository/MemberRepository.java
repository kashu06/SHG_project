package com.shg.ledger.repository;

import com.shg.ledger.model.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface MemberRepository extends JpaRepository<Member, Long> {
    
    @Query("SELECT SUM(m.totalSavings) FROM Member m")
    Double getTotalSavings();
    
    @Query("SELECT SUM(m.loanBalance) FROM Member m")
    Double getTotalLoanBalance();
    
    @Query("SELECT COUNT(m) FROM Member m")
    Long countMembers();
}

