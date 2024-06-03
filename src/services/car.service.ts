import axiosInstance from "./api.service";
import {ICarPaginatedModel} from "../models/ICarPaginatedModel";

const carService = {
    getAllCars: async (page: string): Promise<ICarPaginatedModel> => {
        const response =
            await axiosInstance.get<ICarPaginatedModel>('cars', {params: {page: page}})
        return response.data
    }
}
export default carService