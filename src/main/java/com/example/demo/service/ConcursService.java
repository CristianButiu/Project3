package com.example.demo.service;

import com.example.demo.model.Concurs;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface ConcursService {
    Concurs createConcurs(Concurs concurs);
    List<Concurs> getConcursuri();
    Concurs updateConcurs(Concurs concurs);
    void deleteConcurs(long id);
    List<Concurs> findByCriteria(int distanta, String locatie, long nr_participanti);

}
