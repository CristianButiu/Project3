import axios from "axios";

const API_VIEW_PORUMBEI = "http://localhost:8080/porumbel";
const API_CREATE_PORUMBEL = "http://localhost:8080/porumbel/create";
const API_EDIT_PORUMBEL = "http://localhost:8080/porumbel/update";

const viewPorumbei = () => {
    return axios.get(API_VIEW_PORUMBEI);
};

const updatePorumbel = (porumb) => {
    return axios.put(API_EDIT_PORUMBEL, porumb);
};

const createPorumbel = (porumb) => {
    return axios.post(API_CREATE_PORUMBEL, porumb);
};

const deletePorumbel = (id) => {
    return axios.delete(`http://localhost:8080/porumbel/delete/${id}`);
};

export {viewPorumbei, updatePorumbel, createPorumbel, deletePorumbel};