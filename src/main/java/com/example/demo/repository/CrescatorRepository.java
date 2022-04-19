package com.example.demo.repository;

import com.example.demo.model.Crescator;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrescatorRepository extends CrudRepository<Crescator, Long> {
    Crescator findByUsernameAndPassword(String username, String password);
}
