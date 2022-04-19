import React from "react";
import "../CSS/LoginCSS.css";
import { useState } from "react";
import { authorize } from "../Services/LoginService";
import { useNavigate } from "react-router-dom";

const Login = ({ usrLogg }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    authorize(username, password).then((res) => {
 
      if (res.data.rol === "ADMIN") {
        navigate("/admin");
        usrLogg(res.data.id);
      } else if (res.data.rol === "CRESCATOR") {
        navigate("/crescator");
        usrLogg(res.data.id);
      } else {
        alert("Mai incearca!");
        setUsername("");
        setPassword("");
      }
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            className="fill"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input
            className="fill"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <input className="submito" type="submit" value="Submit" />
    </form>
  );
};

export default Login;