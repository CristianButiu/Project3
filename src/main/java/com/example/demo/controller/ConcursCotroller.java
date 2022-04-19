package com.example.demo.controller;

import com.example.demo.constants.Categorie;
import com.example.demo.model.Concurs;
import com.example.demo.repository.ConcursRepository;
import com.example.demo.service.ConcursService;
import org.apache.coyote.Response;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/concurs")
public class ConcursCotroller {
    private final ConcursService concursService;

    public ConcursCotroller(ConcursService concursService) {
        this.concursService = concursService;
    }
    @GetMapping()
    public ResponseEntity getConcursuri() {
        return ResponseEntity.status(HttpStatus.OK).body(concursService.getConcursuri());
    }
    @PostMapping("/create")
    public ResponseEntity createConcurs(@RequestBody Concurs concurs) {
        return ResponseEntity.status(HttpStatus.CREATED).body(concursService.createConcurs(concurs));
    }
    @PutMapping("/update")
    public ResponseEntity updateConcurs(@RequestBody Concurs concurs){
        return ResponseEntity.status(HttpStatus.OK).body(concursService.updateConcurs(concurs));
    }
    @DeleteMapping("/delete/{id}")
    public void deleteConcurs(@PathVariable long id){
        concursService.deleteConcurs(id);
    }

    @GetMapping("/search/{distanta}/{locatie}/{nr_participanti}")
    public ResponseEntity findByCriteria(@PathVariable int distanta, @PathVariable String locatie, @PathVariable long nr_participanti)
    {
        System.out.println(distanta);
        System.out.println(locatie);
        System.out.println(nr_participanti);

        return ResponseEntity.status(HttpStatus.OK).body(concursService.findByCriteria(distanta, locatie, nr_participanti));
    }

}
