package com.example.demo.service;

import com.example.demo.dto.FavoriteDTO;
import com.example.demo.model.Favorite;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface FavoriteService {
    List<Favorite> getFavorite();
    Favorite createFavorite(Favorite favorite);
    void deleteFavorite(long cresc_id, long por_id);

}
