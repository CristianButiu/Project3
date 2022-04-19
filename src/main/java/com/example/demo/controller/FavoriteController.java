package com.example.demo.controller;


import com.example.demo.model.Concurs;
import com.example.demo.model.Favorite;
import com.example.demo.service.FavoriteService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/favorite")
public class FavoriteController {

    private final FavoriteService favoriteService;

    public FavoriteController(FavoriteService favoriteService) {
        this.favoriteService = favoriteService;
    }
    @GetMapping()
    public ResponseEntity getFavorite() {
        return ResponseEntity.status(HttpStatus.OK).body(favoriteService.getFavorite());
    }
    @PostMapping("/create")
    public ResponseEntity createFavorite(@RequestBody Favorite favorite) {
        return ResponseEntity.status(HttpStatus.CREATED).body(favoriteService.createFavorite(favorite));
    }
    @DeleteMapping("/delete/{cresc_id}/{por_id}")
    public void deleteFavorite(@PathVariable long cresc_id, @PathVariable long por_id){
       favoriteService.deleteFavorite(cresc_id, por_id);
    }
}
