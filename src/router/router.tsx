import {createBrowserRouter, RouteObject} from "react-router-dom";
import {App} from "../App";
import {AllUsersPage} from "../pages/AllUsersPage";
import {SingleUserPage} from "../pages/SingleUserPage";
import {AllPostsPage} from "../pages/AllPostsPage";
import {SinglePostPage} from "../pages/SinglePostPage";

const routes: RouteObject[] = [
    {
        path: '', element: <App/>, children: [
            {
                path: 'users', element: <AllUsersPage/>, children: [
                    {path: ':userId', element: <SingleUserPage/>}
                ]
            },
            {
                path: 'posts', element: <AllPostsPage/>, children: [
                    {path: ':postId', element: <SinglePostPage/>}
                ]
            }
        ]
    }
]
export const router = createBrowserRouter(routes);