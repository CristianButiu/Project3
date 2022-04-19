import REact from "react";
import {useState, useEffect} from "react";
import { viewCrescatori } from "../Services/CrescatorService";
const ViewCrescatori = () => {
   const [crescatori, setCrescatori] = useState([]);
   useEffect (() => {
       viewCrescatori().then((res) => {
           setCrescatori(res.data);
       });
   }, []);
   return (
       <div>
           {" "}
        <h1>Crescatori: </h1>
        {crescatori.map((crs) => (
            <div
            key = {crs.id}>
            {`Nume: ${crs.nume} , Username: ${crs.username}, Localitate: ${crs.localitate}, Telefon: ${crs.telefon}, Email: ${crs.email}, Rol: ${crs.rol}`}</div> 
            
        ))}
       </div>
   );
};
export default ViewCrescatori;