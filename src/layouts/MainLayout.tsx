import {Outlet} from "react-router-dom";
import {useEffect} from "react";

import {Header} from "../components";
import {useStore} from "../context";
import {commentsService, postsService, usersService} from "../services";

const MainLayout = () => {
    const {
        userSlice: {favoriteUser, setAllUsers},
        commentSlice: {setAllComments},
        postSlice: {setAllPosts}
    } = useStore()
    useEffect(() => {
        usersService.getAllUsers().then(value => setAllUsers(value))
        postsService.getAllPosts().then(value => setAllPosts(value))
        commentsService.getAllComments().then(value => setAllComments(value))
    },[]);
    return (
        <div>
            <Header/>
            <Outlet/>

            <hr/>
            {favoriteUser && <div>{favoriteUser.username}!</div>}
        </div>
    );
};

export {MainLayout};