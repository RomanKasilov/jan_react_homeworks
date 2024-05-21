import {createBrowserRouter, Link} from "react-router-dom";
import {MainLayout} from "../layouts";
import {UsersPage} from "../pages";
import {PostsPage} from "../pages";
import {CommentsPage} from "../pages";
import {Users} from "../components/UsersComponents";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {index: true, element:<UsersPage/>}
        ]
    }
])

export default router