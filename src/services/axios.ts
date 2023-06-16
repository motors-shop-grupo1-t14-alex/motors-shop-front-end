import axios from "axios";

export const api = axios.create({
    baseURL: "http://localhost:3000/",
});

export const fipe_api = axios.create({
    baseURL: "https://kenzie-kars.herokuapp.com/",
});

