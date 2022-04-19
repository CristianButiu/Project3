import axios from "axios";

const API_EDIT_CRESCATOR = "http://localhost:8080/crescator/update";
const API_CREATE_CRESCATOR = "http://localhost:8080/crescator/create";
const API_GET_CRESCATORI = "http://localhost:8080/crescator";

const createCrescator = (crescator) => {
    return axios.post(API_CREATE_CRESCATOR, crescator);
};

const updateCrescator = (crescator) => {
    return axios.put(API_EDIT_CRESCATOR, crescator);
};

const viewCrescatori = () => {
    return axios.get(API_GET_CRESCATORI);
};

const deleteCrescator = (id) => {
    return axios.delete(`http://localhost:8080/crescator/delete/${id}`);
};

export {createCrescator, updateCrescator, viewCrescatori, deleteCrescator};

