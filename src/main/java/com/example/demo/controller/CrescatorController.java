package com.example.demo.controller;

import com.example.demo.model.Crescator;
import com.example.demo.service.CrescatorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/crescator")
public class CrescatorController {
    private final CrescatorService crescatorService;

    public CrescatorController(CrescatorService crescatorService) {
        this.crescatorService = crescatorService;
    }
    @GetMapping()
    public ResponseEntity getUsers(){
        return ResponseEntity.status(HttpStatus.OK).body(crescatorService.getCrescatori());
    }

    @PostMapping("/create")
    public ResponseEntity createUser(@RequestBody Crescator crescator){
        return ResponseEntity.status(HttpStatus.CREATED).body(crescatorService.createCrescator(crescator));
    }

    @PutMapping("/update")
    public ResponseEntity updateUser(@RequestBody Crescator crescator){
        return ResponseEntity.status(HttpStatus.OK).body(crescatorService.updateCrescator(crescator));
    }

    @DeleteMapping("/delete/{id}")
    public void deleteUser(@PathVariable long id){
        crescatorService.deleteCrescator(id);
    }
}
