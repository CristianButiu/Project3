package com.example.demo.service.impl;

import com.example.demo.model.Concurs;
import com.example.demo.repository.ConcursRepository;
import com.example.demo.service.ConcursService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Objects;

@Service
public class ConcursServiceImpl implements ConcursService {

    @Autowired
    public final ConcursRepository concursRepository;

    public ConcursServiceImpl(ConcursRepository concursRepository) {
        this.concursRepository = concursRepository;
    }

    @Override
    public Concurs createConcurs(Concurs concurs) {
        return concursRepository.save(concurs);
    }

    @Override
    public List<Concurs> getConcursuri() {
        return (List<Concurs>) concursRepository.findAll();
    }

    @Override
    public Concurs updateConcurs(Concurs concurs) {
        Concurs concurs1 = concursRepository.findById(concurs.getId()).get();
        if(concurs.getCategorie() != null)
            concurs1.setCategorie(concurs.getCategorie());
        if(concurs.getDistanta() != 0)
            concurs1.setDistanta(concurs.getDistanta());
        if(!Objects.equals(concurs.getLocatie(), null))
            concurs1.setLocatie(concurs.getLocatie());
        if(concurs.getNr_participanti() != 0)
            concurs1.setNr_participanti(concurs.getNr_participanti());
        concursRepository.save(concurs1);
        return concurs1;

    }

    @Override
    public void deleteConcurs(long id) {
        concursRepository.deleteById(id);
    }

    @Override
    public List<Concurs> findByCriteria(int distanta, String locatie, long nr_participanti)
    {

        return concursRepository.findByCriteria(distanta, locatie, nr_participanti);
    }
}
