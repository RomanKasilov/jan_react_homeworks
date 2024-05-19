import axios, {AxiosResponse} from "axios";
import {ISavePostModel} from "../models/savePostModel";
import {IResponsePostModel} from "../models/responsePostModel";

let axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})

const postService = {
    savePost: (data: ISavePostModel):Promise<AxiosResponse<IResponsePostModel>> => {
        return axiosInstance.post('/posts', data)
    }
}

export {postService}