import axios from "axios";
import { AUTH_API_URL } from "./CONFIG";


export const axiosConfig = axios.create({
    baseURL: AUTH_API_URL,
})