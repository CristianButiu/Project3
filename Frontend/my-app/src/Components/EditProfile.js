import  React from "react";
import {useState} from "react";
import { updateCrescator } from "../Services/CrescatorService";

const EditProfile = ({theId}) => {
    const[nume, setNume] = useState("");
    const[password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCrescator({id: theId, nume:nume, password: password});
        alert("The filds are now updated");
        setNume("");
        setPassword("");
    };
    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input
            type="text"
            name="nume"
            placeholder="Edit the name if you want"
            value={nume}
            onChange={(e) => setNume(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            placeholder="Edit the password if you want"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <input type="submit" value="Edit" />
    </form>
    );
};
export default EditProfile;