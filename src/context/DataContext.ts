import {createContext} from "react";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

type DataContextType = {
    users: {
        allUsers: IUserModel[]
    },
    posts: {
        allPosts: IPostModel[]
    },
    comments: {
        allComments: ICommentModel[]
    }
}
const defaultValue: DataContextType = {
    users: {
        allUsers: []
    },
    posts: {
        allPosts: []
    },
    comments: {
        allComments: []
    }
}
export const DataContext = createContext(defaultValue)