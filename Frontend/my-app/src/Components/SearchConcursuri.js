import React from "react";
import {useState, useEffect} from "react";
import { searchConcursuri} from "../Services/ConcursService";

const SearchConcursuri = () => {
    const [distanta, setDistanta] = useState(0);
    const [locatie, setLocatie] = useState(0);
    const [nr_participanti, setNrParticipanti] = useState(0);
    const [categorie, setCategorie] = useState(-1);
    const [concurs, setConcurs] = useState([]);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(distanta, locatie);
        searchConcursuri(distanta, locatie, nr_participanti , categorie).then((res) =>
        {
            setConcurs(res.data);
        });
        console.log(concurs);
        
    };
    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label>
          Distanta maxima:
          <input
            type="text"
            name="distanta"
            placeholder="Introduceti distanta maxima:"
            value={distanta}
            onChange={(e) => setDistanta(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Locatie:
          <input
            type="text"
            name="locatie"
            placeholder="Introduceti locatia:"
            value={locatie}
            onChange={(e) => setLocatie(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
            Nr_max_participanti:
          <input
            type="text"
            name="nr_participanti"
            placeholder="Introduceti nr max de participanti:"
            value={nr_participanti}
            onChange={(e) => setNrParticipanti(e.target.value)}
          />
        </label>    
      </div>
      <input type="submit" value="Search" />
      <div>
    <h1>Concursuri searchuite:</h1>
    {concurs.map((conce) => (
        <div
        key = {conce.id}
        >{`Distanta: ${conce.distanta}, Locatie: ${conce.locatie}, Nr_participanti: ${conce.nr_participanti}, Categorie: ${conce.categorie}`}</div>
    ))}</div>
    </form>
    
    );
};
export default SearchConcursuri;