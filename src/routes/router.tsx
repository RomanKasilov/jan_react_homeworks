import {createBrowserRouter, RouteObject} from "react-router-dom";
import {MainLayout} from "../layouts/MainLayout";
import {AllUsersPage} from "../pages/AllUsersPage";
import {AllPostsPage} from "../pages/AllPostsPage";
import {AllCommentsPage} from "../pages/AllCommentsPage";
import {UsersPostsPage} from "../pages/UsersPostsPage";
import {PostsCommentsPage} from "../pages/PostsCommentsPage";




const routes: RouteObject[] = [
    {
        path: '/', element: <MainLayout/>, children: [
            {index:true, element:<AllUsersPage/>},
            {path: 'users', element: <AllUsersPage/>},
            {path: 'posts', element: <AllPostsPage/>},
            {path: 'comments', element: <AllCommentsPage/>},
            {path: 'usersPosts', element: <UsersPostsPage/>},
            {path: 'postsComments', element: <PostsCommentsPage/>}
        ]
    }
]
export const router = createBrowserRouter(routes)