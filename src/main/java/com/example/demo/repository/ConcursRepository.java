package com.example.demo.repository;

import com.example.demo.constants.Categorie;
import com.example.demo.model.Concurs;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import java.util.List;

@Repository
public interface ConcursRepository extends CrudRepository<Concurs, Long> {
    @Query("select new Concurs(c.id, c.distanta, c.locatie, c.nr_participanti, c.categorie) from Concurs c where (c.distanta <= :distanta or :distanta = 0) and (c.locatie = :locatie or :locatie = '0') and (c.nr_participanti <= :nr_participanti or :nr_participanti = 0)")
    List<Concurs> findByCriteria(@Param("distanta") int distanta, @Param("locatie") String locatie,  @Param("nr_participanti") long nr_participanti);
}
