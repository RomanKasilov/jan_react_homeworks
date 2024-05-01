import axios, {AxiosResponse} from "axios";
import {urls} from "../const";
import {IUsers} from "../models";
import {IPosts} from "../models/IPosts.model";

const AxiosInstance = axios.create({
    baseURL: 'https://dummyjson.com',
    headers: {'content-type': 'application/json; charset=UTF-8'}
})

const getAllUsers = ():Promise<AxiosResponse<IUsers>> =>{
   return AxiosInstance.get(urls.users)
}
const getPostsByUserId =(UserId:number): Promise<AxiosResponse<IPosts>> =>{
    return AxiosInstance.get(urls.postsByUserId+UserId)
}

export {getAllUsers, getPostsByUserId}
