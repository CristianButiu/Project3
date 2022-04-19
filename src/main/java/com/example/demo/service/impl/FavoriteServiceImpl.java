package com.example.demo.service.impl;

import com.example.demo.dto.FavoriteDTO;
import com.example.demo.model.Favorite;
import com.example.demo.repository.FavoriteRepository;
import com.example.demo.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    public final FavoriteRepository favoriteRepository;

    public FavoriteServiceImpl(FavoriteRepository favoriteRepository) {
        this.favoriteRepository = favoriteRepository;
    }

    @Override
    public List<Favorite> getFavorite() {
        return (List<Favorite>) favoriteRepository.findAll();
    }

    @Override
    public Favorite createFavorite(Favorite favorite) {
        return favoriteRepository.save(favorite);
    }

    @Override
    public void deleteFavorite(long cresc_id, long por_id) {
        favoriteRepository.deleteByDoubleId(cresc_id, por_id);
    }


}
