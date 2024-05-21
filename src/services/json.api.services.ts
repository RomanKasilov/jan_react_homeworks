import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {IAxiosResponseModel} from "../models/IAxiosResponseModel";

const axiosJsonInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers :{
        'Content-type': 'application/json; charset=UTF-8'
    }
})
const usersServices = {
 getAllUsers:  ():IAxiosResponseModel<IUserModel[]> => {
   return  axiosJsonInstance.get('/users');
 }
}
const postsServices = {
    getAllPosts: axiosJsonInstance.get('/posts'),
}
const commentsServices = {
    getAllComments: axiosJsonInstance.get('/comments'),
}
export {
    commentsServices,
    postsServices,
    usersServices
}