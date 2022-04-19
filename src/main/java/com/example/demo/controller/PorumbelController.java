package com.example.demo.controller;

import com.example.demo.model.Porumbel;
import com.example.demo.service.PorumbelService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/porumbel")
public class PorumbelController {
    private final PorumbelService porumbelService;

    public PorumbelController(PorumbelService porumbelService) {
        this.porumbelService = porumbelService;
    }
    @GetMapping
    public ResponseEntity getPorumbei(){
        return ResponseEntity.status(HttpStatus.OK).body(porumbelService.getPorumbei());
    }
    @PostMapping("/create")
    public ResponseEntity createPorumbel(Porumbel porumbel){
        return ResponseEntity.status(HttpStatus.CREATED).body(porumbelService.createPorumbel(porumbel));
    }
    @PutMapping("/update")
    public ResponseEntity updatePorumbel(Porumbel porumbel){
        return ResponseEntity.status(HttpStatus.OK).body(porumbelService.updatePorumbel(porumbel));
    }
    @DeleteMapping("/delete/{id}")
    public void deletePorumbel(@PathVariable long id) {
        porumbelService.deletePorumbel(id);
    }
}
