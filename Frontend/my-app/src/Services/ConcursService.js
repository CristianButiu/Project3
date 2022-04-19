import axios from "axios";

const API_VIEW_CONCURSURI = "http://localhost:8080/concurs";
const API_EDIT_CONCURSURI = "http://localhost:8080/concurs/update";
const API_CREATE_CONCURSURI = "http://localhost:8080/concurs/create";


const viewConcursuri = () => {
    return axios.get(API_VIEW_CONCURSURI);
};

const createConcurs = (conc) => {
    return axios.post(API_CREATE_CONCURSURI, conc);
};

const updateConcurs = (conc) => {
    return axios.put(API_EDIT_CONCURSURI, conc);
};

const deleteConcurs = (id) => {
    return axios.delete(`http://localhost:8080/concurs/delete/${id}`);
};

const searchConcursuri = (distanta, locatie, nr_participanti) => {
    return axios.get(`http://localhost:8080/concurs/search/${distanta}/${locatie}/${nr_participanti}`);
};

export {viewConcursuri, createConcurs, updateConcurs, deleteConcurs, searchConcursuri};