package com.example.demo.model;

import com.example.demo.constants.Categorie;
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
public class Concurs {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private int distanta;
    private String locatie;
    private long nr_participanti;
    private Categorie categorie;
    public Concurs(int distanta, String locatie, long nr_participanti)
    {
        super();
        this.distanta = distanta;
        this.locatie = locatie;
        this.nr_participanti = nr_participanti;
    }
    /*@ManyToMany(cascade = CascadeType.ALL)
    private List<Porumbel> listaPorumbei;
*/


}
