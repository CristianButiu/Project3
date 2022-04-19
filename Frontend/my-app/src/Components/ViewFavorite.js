import React from "react";
import { useEffect, useState } from "react";
import { viewFavorite } from "../Services/FavoriteService";
const ViewFavorite = ({theId}) => {
    const [favorite, setFavorite] = useState([]);

   
    useEffect (() => {
        viewFavorite().then((res) => {
            setFavorite(res.data);
         
        });
    }, []);
    
   
    return (
        <div>
            <h1>Favorite:</h1>  
            {favorite.map((fin) => fin.crescator.id === theId ? (
                <div>
                id_crescator = {fin.crescator.id}
                {`  Serie: ${fin.porumbel.serie}  , An: ${fin.porumbel.an}  , Culoare: ${fin.porumbel.culoare}, Crescator_id:${fin.porumbel.crescator.id}`}
                </div>
            ):(
                <tr></tr>
              ))}
        </div>
    );
};

export default ViewFavorite;