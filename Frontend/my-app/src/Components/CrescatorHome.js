import React from "react";
import "../CSS/HeaderCSS.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { viewPorumbei, deletePorumbel } from "../Services/PorumbelService";
import { deleteCrescator } from "../Services/CrescatorService";

const CrescatorHome = ({ theId }) => {
  let navigate = useNavigate();
  const [porumbs, setPorumbs] = useState([]);
  console.log(theId);

  useEffect(() => {
    viewPorumbei().then((res) => {
      setPorumbs(res.data);
    });
  }, []);

  const handleDelete = (e) => {
    e.preventDefault();
    for (let i = 0; i < porumbs.length; i++)
      if (theId === porumbs[i].crescator.id) 
        deletePorumbel(porumbs[i].id);
    alert("Delete successfull");
  };

  return (
    <div>
      <header>
        <nav>
          <button onClick={() => navigate("/crescator/editProfile")}>
            Edit Profile
          </button>
          <button
            onClick={() => {
              deleteCrescator(theId);
              navigate("/");
            }}
          >
            Delete Profile
          </button>
          <button onClick={() => navigate("/crescator/concursuri")}>View Concursuri</button>
          <button onClick={() => navigate("/crescator/porumbei")}>
            View Porumbei
          </button>
          <button onClick={() => navigate("/crescator/createPorumbel")}>Create Porumbel</button>
          <button onClick={() => navigate("/crescator/updatePorumbel")}>Update Porumbel</button>
          <button onClick={handleDelete}>Delete Porumbel</button>
          <button onClick={() => navigate("/crescator/concurs/search")}>Search Concursuri</button>
          <button onClick={() => navigate("/crescator/favorite")}>View Favorite</button>
        </nav>
      </header>
      <div></div>
    </div>
  );
};

export default CrescatorHome;