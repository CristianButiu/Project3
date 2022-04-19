package com.example.demo.model;

import com.example.demo.constants.Culoare;
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
public class Porumbel {
    @Id
    @GeneratedValue
    private long id;

    private int serie;
    private int an;
    private Culoare culoare;
    @OneToMany()
    private List<Concurs> listaConcursuri;
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    private Crescator crescator;

}
