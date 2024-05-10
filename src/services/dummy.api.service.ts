import axios, {AxiosResponse} from "axios";
import {urls} from "../const";
import {IPostsResponseModel, IUsersResponseModel} from "../models/response_models";

const AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
})

const getAllUsers = ():Promise<AxiosResponse<IUsersResponseModel>> =>{
   return AxiosInstance.get(urls.users)
}
const getPostsByUserId =(UserId:number): Promise<AxiosResponse<IPostsResponseModel>> =>{
    return AxiosInstance.get(urls.postsByUserId+UserId)
}

export {getAllUsers, getPostsByUserId}
