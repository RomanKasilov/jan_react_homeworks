import axios from "axios";
import {urls} from "./urls";
import {IUserModel} from "../models/IUserModel";

export const userService = {
    getAll: async (): Promise<IUserModel[]> => {
        const resp = await axios.get(urls.users.base)
        return resp.data
    },
    getById: async (userId: number): Promise<IUserModel> => {
        const resp = await axios.get(urls.users.byId(userId))
        return resp.data
    }
}