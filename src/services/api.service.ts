import axios from "axios";
import {baseURL} from "../const/urls";
import tokenPairFromStorage from "../custom/tokenPairFromStorage";
import {ITokenObtainPair} from "../models/ITokenObtainPair";

const axiosInstance = axios.create({
    baseURL
})

axiosInstance.interceptors.request.use(request => {
    if (localStorage.getItem('tokenPair') && (request.url !== 'auth' && request.url !== 'auth/refresh')) {
        const accessToken = tokenPairFromStorage<ITokenObtainPair>('tokenPair')
        request.headers.set('Authorization', `Bearer ${accessToken.access}`)
    }
    return request
})
export default axiosInstance