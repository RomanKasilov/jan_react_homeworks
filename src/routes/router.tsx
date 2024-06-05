import {createBrowserRouter, RouteObject} from "react-router-dom";

import {MainLayout} from "../layouts";
import {AllUsersPage, PostsCommentsPage, AllPostsPage, AllCommentsPage, UsersPostsPage} from "../pages";

const routes: RouteObject[] = [
    {
        path: '/', element: <MainLayout/>, children: [
            {index: true, element: <AllUsersPage/>},
            {path: 'users', element: <AllUsersPage/>},
            {path: 'posts', element: <AllPostsPage/>},
            {path: 'comments', element: <AllCommentsPage/>},
            {path: 'usersPosts', element: <UsersPostsPage/>},
            {path: 'postsComments', element: <PostsCommentsPage/>}
        ]
    }
]
export const router = createBrowserRouter(routes)