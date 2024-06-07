import {create} from "zustand";

import {IUserModel, ICommentModel, IPostModel} from "../models";

type StoreType = {
    userSlice: {
        allUsers: IUserModel[],
        setAllUsers: (users: IUserModel[]) => void

        favoriteUser: IUserModel | null,
        setFavoriteUser: (user: IUserModel) => void,
    },
    postSlice: {
        allPosts: IPostModel[],
        setAllPosts: (posts: IPostModel[]) => void
    },
    commentSlice: {
        allComments: ICommentModel[],
        setAllComments: (comments: ICommentModel[]) => void
    }
}

export const useStore = create<StoreType>()(set => {
    return {
        userSlice: {
            allUsers: [],
            setAllUsers: (users: IUserModel[]) => set(state => {
                return {...state, userSlice: {...state.userSlice, allUsers: users}}
            }),

            favoriteUser: null,
            setFavoriteUser: (user: IUserModel) => set(state => {
                return {...state, userSlice: {...state.userSlice, favoriteUser: user}}
            })
        },
        postSlice: {
            allPosts: [],
            setAllPosts: (posts: IPostModel[]) => set(state => {
                return {...state, postSlice: {...state.postSlice, allPosts: posts}}
            })
        },
        commentSlice: {
            allComments: [],
            setAllComments: (comments: ICommentModel[]) => set(state => {
                return {...state, commentSlice: {...state.commentSlice, allComments: comments}}
            })
        }
    }
})
