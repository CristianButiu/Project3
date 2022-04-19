import axios from "axios";

const API = "http://localhost:8080/login";

const authorize = (username, password) => {
    return axios.post(API, {username : username, password : password});
};

export {authorize};