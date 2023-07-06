import axios from "axios";

export const api = axios.create({
    baseURL: "https://motors-shop-api-58os.onrender.com/",
});

export const fipe_api = axios.create({
    baseURL: "https://kenzie-kars.herokuapp.com/",
});

