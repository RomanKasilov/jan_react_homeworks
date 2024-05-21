import axios from "axios";

import {IAxiosResponseModel} from "../models";
import {ICommentModel} from "../models";
import {IPostModel} from "../models";
import {IUserModel} from "../models";

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
    getAllPosts: (): IAxiosResponseModel<IPostModel[]> => {
        return axiosJsonInstance.get('/posts')
    }
}
const commentsServices = {
    getAllComments: (): IAxiosResponseModel<ICommentModel[]> => {
        return axiosJsonInstance.get('/comments')
    },
}
export {
    commentsServices,
    postsServices,
    usersServices
}