import React from "react";
import {useState, useEffect} from "react";
import {updatePorumbel} from "../Services/PorumbelService";
import { viewPorumbei } from "../Services/PorumbelService";

const UpdatePorumbel = ({theId}) => {
    const [serie, setSerie] = useState("");
    const [an, setAn] = useState("");
    const [culoare, setCuloare] = useState(0);
    const [porumbei, setPorumbei] = useState([]);

    useEffect (() => {
        viewPorumbei().then((res) => {
            setPorumbei(res.data);
        })
    }, []);
    const handleSubmit = (e) => {
        e.preventDefault();
        let porId = 0;
        for(let i = 0; i < porumbei.length; i++)
            if(theId === porumbei[i].crescator.id)
                {
                    porId = porumbei[i].id;
                    console.log(theId, porId)
                }
        updatePorumbel({
            id: porId,
            serie : serie,
            an : an,
            culoare: culoare,
            crescator_id : theId,
            id_crescator : theId,
        });
    setSerie(0);
    setAn(0);
    setCuloare(0);
    };
    return (
        <form onSubmit = {handleSubmit}>
            <div>
                <label>
                Serie
                <input
                    type = "text"
                    name = "serie"
                    placeholder="Editeaza seria"
                    value = {serie}
                    onChange = {(e) => setSerie(e.target.value)}
                />
                </label>
                <label>
                An
                <input
                    type = "text"
                    name = "an"
                    placeholder="Editeaza an"
                    value = {an}
                    onChange = {(e) => setAn(e.target.value)}
                />
                </label>
                <label>
                Culoare
                <input
                    type = "text"
                    name = "culoare"
                    placeholder="0-albastru 1-negru 2-alb"
                    value = {culoare}
                    onChange = {(e) => setCuloare(e.target.value)}
                />    
                </  label>
            </div>
        <input type = "submit" value = "Update"/>      
        </form>
    );
};

export default UpdatePorumbel;