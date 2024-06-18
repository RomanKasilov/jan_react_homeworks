import axios from "axios";
import {baseURL} from "../constans/urls";

export const axiosInstance = axios.create({
    baseURL,
    headers:{}
})