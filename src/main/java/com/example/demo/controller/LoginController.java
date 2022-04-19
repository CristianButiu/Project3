package com.example.demo.controller;

import com.example.demo.dto.AuthDTO;
import com.example.demo.service.CrescatorService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/login")
public class LoginController {
    private final CrescatorService crescatorService;

    public LoginController(CrescatorService crescatorService) {
        this.crescatorService = crescatorService;
    }

    @PostMapping()
    public ResponseEntity login(@RequestBody AuthDTO auth){
        return ResponseEntity.status(HttpStatus.OK).body(crescatorService.findByUsernameAndPassowrd(auth));
    }
}
