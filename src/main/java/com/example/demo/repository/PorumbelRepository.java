package com.example.demo.repository;

import com.example.demo.model.Porumbel;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PorumbelRepository extends CrudRepository<Porumbel, Long> {
}
