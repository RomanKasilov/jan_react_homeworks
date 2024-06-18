import axios from "axios";
import {urls} from "./urls";
import {IPostsModel} from "../models/IPostsModel";

export const postService = {
    getAll: async (): Promise<IPostsModel[]> => {
        const resp = await axios.get(urls.posts.base)
        return resp.data
    },
    getById: async (postId: number): Promise<IPostsModel> => {
        const resp = await axios.get(urls.posts.byId(postId))
        return resp.data
    }
}