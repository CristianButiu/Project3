import axios from "axios";

const API_GET_FAVORITE = "http://localhost:8080/favorite";
const API_CREATE_FAVORITE = "http://localhost:8080/favorite/create";

const viewFavorite = () => {
    return axios.get(API_GET_FAVORITE);
};

const createFavorite = (favorite) => {
    return axios.create(API_CREATE_FAVORITE, favorite);
};
const deleteFavorite = (cresc_id, por_id) => {
    return axios.delete(`http://localhost:8080/crescator/delete/${cresc_id}/${por_id}`);
};

export {viewFavorite, createFavorite, deleteFavorite};