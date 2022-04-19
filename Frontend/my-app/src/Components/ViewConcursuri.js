import React from "react";
import { useState, useEffect } from "react";
import { viewConcursuri } from "../Services/ConcursService";

const ViewConcursuri = () => {
    const [conc, setConc] =  useState([]);
    useEffect(() => {
        viewConcursuri().then((res) => {
            setConc(res.data);
        });
    }, []);


    return (
        <div>
            <h1>Concursuri:</h1>
            {conc.map((con) => (
                <div
                key = {con.id}>
                    {`Distanta: ${con.distanta}, Locatia: ${con.locatie}, Nr_participanti: ${con.nr_participanti}, Categorie: ${con.categorie}`}</div>
            ))}
        </div>
    );
};

export default ViewConcursuri;
