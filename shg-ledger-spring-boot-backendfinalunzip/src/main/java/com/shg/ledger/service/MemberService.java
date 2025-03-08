package com.shg.ledger.service;

import com.shg.ledger.dto.MemberDTO;
import com.shg.ledger.model.Member;
import com.shg.ledger.repository.MemberRepository;
import jakarta.persistence.EntityNotFoundException;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public List<MemberDTO> getAllMembers() {
        return memberRepository.findAll().stream()
                .map(this::convertToDTO)
                .collect(Collectors.toList());
    }

    public MemberDTO getMemberById(Long id) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Member not found with id: " + id));
        return convertToDTO(member);
    }

    @Transactional
    public MemberDTO createMember(MemberDTO memberDTO) {
        Member member = new Member();
        member.setName(memberDTO.getName());
        member.setPhone(memberDTO.getPhone());
        member.setAddress(memberDTO.getAddress());
        member.setJoiningDate(memberDTO.getJoiningDate());
        
        Member savedMember = memberRepository.save(member);
        return convertToDTO(savedMember);
    }

    @Transactional
    public MemberDTO updateMember(Long id, MemberDTO memberDTO) {
        Member member = memberRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Member not found with id: " + id));
        
        member.setName(memberDTO.getName());
        member.setPhone(memberDTO.getPhone());
        member.setAddress(memberDTO.getAddress());
        
        Member updatedMember = memberRepository.save(member);
        return convertToDTO(updatedMember);
    }

    @Transactional
    public void deleteMember(Long id) {
        if (!memberRepository.existsById(id)) {
            throw new EntityNotFoundException("Member not found with id: " + id);
        }
        memberRepository.deleteById(id);
    }

    @Transactional
    public void updateMemberSavings(Long memberId, double amount) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new EntityNotFoundException("Member not found with id: " + memberId));
        
        member.setTotalSavings(member.getTotalSavings() + amount);
        memberRepository.save(member);
    }

    @Transactional
    public void updateMemberLoanBalance(Long memberId, double amount) {
        Member member = memberRepository.findById(memberId)
                .orElseThrow(() -> new EntityNotFoundException("Member not found with id: " + memberId));
        
        member.setLoanBalance(member.getLoanBalance() + amount);
        memberRepository.save(member);
    }

    private MemberDTO convertToDTO(Member member) {
        MemberDTO dto = new MemberDTO();
        dto.setId(member.getId());
        dto.setName(member.getName());
        dto.setPhone(member.getPhone());
        dto.setAddress(member.getAddress());
        dto.setJoiningDate(member.getJoiningDate());
        dto.setTotalSavings(member.getTotalSavings());
        dto.setLoanBalance(member.getLoanBalance());
        return dto;
    }
}

