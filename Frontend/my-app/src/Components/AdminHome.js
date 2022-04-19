import React from "react";
import "../CSS/HeaderCSS.css";
import { useNavigate } from "react-router-dom";

const AdminHome = () => {
    let navigate = useNavigate();

return (
    <div>
        <nav>
        <button onClick={() => navigate("/admin/crescatori")}>
        View Crescatori
        </button>
        <button onClick={() => navigate("/admin/createConcurs")}>
        Create Concurs
        </button>
        <button onClick={() => navigate("/admin/editConcurs")}>
        Edit Concurs
        </button>
        <button onClick={() => navigate("/admin/deleteConcurs")}>Delete Concurs</button>
        </nav>
    </div>
);
};

export default AdminHome;