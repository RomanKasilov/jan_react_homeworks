import {Outlet} from "react-router-dom";
import {Header} from "../components/Header/Header";
import {DataContext} from "../context/DataContext";
import {useEffect, useState} from "react";
import {commentsService, postsService, usersService} from "../services/json.api.service";
import {IUserModel} from "../models/IUserModel";
import {IPostModel} from "../models/IPostModel";
import {ICommentModel} from "../models/ICommentModel";

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
                users: {
                    allUsers: allUsers
                },
                posts: {
                    allPosts: allPosts
                },
                comments: {
                    allComments: allComments
                }
            }}>
                <Outlet/>
            </DataContext.Provider>

        </div>
    );
};

export {MainLayout};