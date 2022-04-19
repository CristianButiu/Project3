import React from "react";
import { useState, useEffect } from "react";
import { viewPorumbei } from "../Services/PorumbelService";
import { createFavorite } from "../Services/FavoriteService";
const ViewPorumbei = ({theId}) => {
    
    const [porumbe, setPorumbe] = useState([]);
    useEffect(() => {
        viewPorumbei().then((res) => {
            setPorumbe(res.data);
        });
    }, []);
const handleFavorite = (e) => {
    e.preventDefault();
    createFavorite({
        crescator_id : theId,
        porumbel_id : e.por_id,

    });
    
}
    return (
        <div>
            <h1>Porumbei:</h1>
            {porumbe.map((por) => (
                <div
                key = {por.id}
                >{`Serie: ${por.serie}, An: ${por.an}, Culoare: ${por.culoare}, Crescator_id:${por.crescator.id}`}
                <button onClick={handleFavorite}>Adauga la favorite</button>
                </div>
            ))}
        </div>
    );
};

export default ViewPorumbei;