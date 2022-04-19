package com.example.demo.repository;

import com.example.demo.model.Favorite;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

public interface FavoriteRepository extends CrudRepository<Favorite, Long> {
    @Transactional
    @Modifying
    @Query("delete from Favorite f where f.crescator.id = :cresc_id and f.porumbel.id = :por_id")
    void deleteByDoubleId(@Param("cresc_id") long cresc_id, @Param("por_id") long por_id);
}
