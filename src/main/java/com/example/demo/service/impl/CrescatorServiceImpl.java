package com.example.demo.service.impl;

import com.example.demo.dto.AuthDTO;
import com.example.demo.model.Crescator;
import com.example.demo.repository.CrescatorRepository;
import com.example.demo.service.CrescatorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class CrescatorServiceImpl implements CrescatorService {


    @Autowired
    public final CrescatorRepository crescatorRepository;

    public CrescatorServiceImpl(CrescatorRepository crescatorRepository) {
        this.crescatorRepository = crescatorRepository;
    }

    @Override
    public Crescator createCrescator(Crescator crescator) {
        return crescatorRepository.save(crescator);
    }

    @Override
    public Crescator updateCrescator(Crescator crescator) {
        Crescator crescator1 = crescatorRepository.findById(crescator.getId()).get();
        if(!Objects.equals(crescator.getPassword(), null))
            crescator1.setPassword(crescator.getPassword());
        if(!Objects.equals(crescator.getNume(), null))
            crescator1.setNume(crescator.getNume());
        if(!Objects.equals(crescator.getLocalitate(), null))
            crescator1.setLocalitate(crescator.getLocalitate());
        if(!Objects.equals(crescator.getEmail(), null))
            crescator1.setEmail(crescator.getEmail());
        if(!Objects.equals(crescator.getTelefon(), null))
            crescator1.setTelefon(crescator.getTelefon());
        crescatorRepository.save(crescator1);
        return crescator1;
    }

    @Override
    public List<Crescator> getCrescatori() {
        return (List<Crescator>) crescatorRepository.findAll();
    }

    @Override
    public void deleteCrescator(long id) {
         crescatorRepository.deleteById(id);
    }

    @Override
    public Crescator findByUsernameAndPassowrd(AuthDTO dto) {
        return crescatorRepository.findByUsernameAndPassword(dto.getUsername(), dto.getPassword());
    }
}
