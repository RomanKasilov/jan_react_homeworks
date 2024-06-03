import axiosInstance from "./api.service";
import apiService from "./api.service";
import {IFormData} from "../models/IFormData";
import {ITokenObtainPair} from "../models/ITokenObtainPair";
import tokenPairFromStorage from "../custom/tokenPairFromStorage";

const authService = {
    login: async (formData: IFormData) => {
        let response =
            await axiosInstance.post<ITokenObtainPair>('auth', formData);
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    },
    refresh: async () => {
        const token = tokenPairFromStorage<ITokenObtainPair>('tokenPair')
        const response =
            await apiService.post<ITokenObtainPair>('auth/refresh', {refresh: token.refresh})
        localStorage.setItem('tokenPair', JSON.stringify(response.data))
    }
}

export default authService