import {createContext, useContext} from "react";

import {IUserModel, ICommentModel, IPostModel} from "../models";

type DataContextType = {
    users: { allUsers: IUserModel[] },
    posts: { allPosts: IPostModel[] },
    comments: { allComments: ICommentModel[] }
}
const defaultValue: DataContextType = {
    users: {allUsers: []},
    posts: {allPosts: []},
    comments: {allComments: []}
}
const DataContext = createContext(defaultValue)

const useDataContext = (): DataContextType => useContext(DataContext)

export {DataContext, useDataContext}
