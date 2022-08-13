import axios from "axios";

export const requester = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    timeout: 60 * 1000,
});