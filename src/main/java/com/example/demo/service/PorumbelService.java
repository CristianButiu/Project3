package com.example.demo.service;

import com.example.demo.model.Concurs;
import com.example.demo.model.Porumbel;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface PorumbelService {
    Porumbel createPorumbel(Porumbel porumbel);
    List<Porumbel> getPorumbei();
    Porumbel updatePorumbel(Porumbel porumbel);
    void deletePorumbel(long id);



}
