import axios from "axios";
import {IUserModel} from "../models/IUserModel";
import {IAxiosResponseModel} from "../models/IAxiosResponseModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

const axiosJsonInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})
const usersServices = {
    getAllUsers: (): IAxiosResponseModel<IUserModel[]> => {
        return axiosJsonInstance.get('/users');
    }
}
const postsServices = {
    getAllPosts: (): IAxiosResponseModel<IPostModel> => {
        return axiosJsonInstance.get('/posts')
    }
}
const commentsServices = {
    getAllComments: (): IAxiosResponseModel<ICommentModel> => {
        return axiosJsonInstance.get('/comments')
    },
}
export {
    commentsServices,
    postsServices,
    usersServices
}