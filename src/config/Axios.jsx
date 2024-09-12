import axios from "axios";
import { DB_URL } from "./CONFIG";


export const axiosConfig = axios.create({
    baseURL: DB_URL,
})