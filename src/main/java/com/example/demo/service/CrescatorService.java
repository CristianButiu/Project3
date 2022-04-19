package com.example.demo.service;

import com.example.demo.dto.AuthDTO;
import com.example.demo.model.Crescator;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface CrescatorService {
    Crescator createCrescator(Crescator crescator);
    Crescator updateCrescator(Crescator crescator);
    List<Crescator> getCrescatori();
    void deleteCrescator(long  id);
    Crescator findByUsernameAndPassowrd(AuthDTO dto);
}
