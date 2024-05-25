import axios from "axios";
import {baseURL} from "../constants";

const axiosJsonInstance = axios.create({
    baseURL,
    headers:{
        'Content-type': 'application/json; charset=UTF-8'
    }
})

export default axiosJsonInstance