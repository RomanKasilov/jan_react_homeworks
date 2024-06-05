import {useEffect, useState} from "react";
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {DataContext} from "../context";
import {commentsService, postsService, usersService} from "../services";
import {IUserModel, ICommentModel, IPostModel} from "../models";

const MainLayout = () => {
    const [allUsers, setAllUsers] = useState<IUserModel[]>([])
    const [allPosts, setAllPosts] = useState<IPostModel[]>([])
    const [allComments, setAllComments] = useState<ICommentModel[]>([])
    useEffect(() => {
        usersService.getAllUsers().then(allUsers => setAllUsers(allUsers))
        postsService.getAllPosts().then(allPosts => setAllPosts(allPosts))
        commentsService.getAllComments().then(allComments => setAllComments(allComments))
    }, []);
    return (
        <div>
            <Header/>
            <DataContext.Provider value={{
                users: {allUsers: allUsers},
                posts: {allPosts: allPosts},
                comments: {allComments: allComments}
            }}>
                <Outlet/>
            </DataContext.Provider>

        </div>
    );
};

export {MainLayout};