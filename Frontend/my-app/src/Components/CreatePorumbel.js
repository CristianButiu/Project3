import React from "react";
import {useState} from "react";
import { createPorumbel} from "../Services/PorumbelService";

const CreatePorumbel = ({theId}) => {
    const[serie, setSerie] = useState(0);
    const[an, setAn] = useState(0);
    const[culoare, setCuloare] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(serie, an, culoare, theId);
        createPorumbel({
            serie : serie,
            an : an,
            culoare : culoare,  
            crescator: {id : theId},
        });
        alert("Porumbelul a fost creat");
        
    };
    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>
              Serie:
              <input
                type="text"
                name="serie"
                placeholder="Serie"
                value={serie}
                onChange={(e) => setSerie(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              An:
              <input
                type="text"
                name="an"
                value={an}
                onChange={(e) => setAn(e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Culoare:
              <input
                type="text"
                name="Culoare"
                value={culoare}
                placeholder="0-Albastru, 1-Negru, 2-Alb"
                onChange={(e) => setCuloare(e.target.value)}
              />
            </label>
          </div>
          <div>
          </div>
          <input type="submit" value="Create" />
        </form>
      );
};

export default CreatePorumbel;