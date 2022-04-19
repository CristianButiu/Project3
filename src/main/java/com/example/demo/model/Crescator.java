package com.example.demo.model;

import com.example.demo.constants.Rol;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
public class Crescator {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String username;
    private String password;
    private String nume;
    private String localitate;
    private String telefon;
    private String email;
    private Rol rol;

    @JsonIgnore
    @OneToMany(cascade = CascadeType.ALL , fetch = FetchType.EAGER)
    private List<Porumbel> listaPorumbei;

    /*@OneToMany
    private List<Porumbel> listaFavorite;
    //@ManyToMany
    // private List<Concurs> listaConcursuri;
*/
}
