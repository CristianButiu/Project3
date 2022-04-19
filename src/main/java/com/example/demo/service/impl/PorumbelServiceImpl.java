package com.example.demo.service.impl;


import com.example.demo.model.Porumbel;
import com.example.demo.repository.PorumbelRepository;
import com.example.demo.service.PorumbelService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PorumbelServiceImpl implements PorumbelService {

    @Autowired
    private final PorumbelRepository porumbelRepository;

    public PorumbelServiceImpl(PorumbelRepository porumbelRepository) {
        this.porumbelRepository = porumbelRepository;
    }

    @Override
    public Porumbel createPorumbel(Porumbel porumbel) {

        return porumbelRepository.save(porumbel);
    }

    @Override
    public List<Porumbel> getPorumbei() {
        return (List<Porumbel>) porumbelRepository.findAll();
    }

    @Override
    public Porumbel updatePorumbel(Porumbel porumbel) {
        Porumbel porumbel1 = porumbelRepository.findById(porumbel.getId()).get();
        if(porumbel.getSerie() != 0)
            porumbel1.setSerie(porumbel.getSerie());
        if(porumbel.getAn() != 0)
            porumbel1.setAn(porumbel.getAn());
        if(porumbel.getCuloare() != null)
            porumbel1.setCuloare(porumbel.getCuloare());
        porumbelRepository.save(porumbel1);
        return porumbel1;
    }

    @Override
    public void deletePorumbel(long id) {
        porumbelRepository.deleteById(id);
    }
}
