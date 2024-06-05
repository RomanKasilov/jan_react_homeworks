import axios from "axios";
import {IUserModel, IPostModel, ICommentModel} from "../models";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-type': 'application/json; charset=UTF-8'
    }
})

const usersService = {
    getAllUsers: async (): Promise<IUserModel[]> => {
        const response = await axiosInstance.get('users');
        return response.data
    }
};
const postsService = {
    getAllPosts: async (): Promise<IPostModel[]> => {
        const allPosts = await axiosInstance.get('posts');
        return allPosts.data
    }
};
const commentsService = {
    getAllComments: async (): Promise<ICommentModel[]> => {
        const allComments = await axiosInstance.get('comments');
        return allComments.data
    }
};

export {commentsService, postsService, usersService}
