import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts";
import {CommentsPage, MainPage, PostsPage, UsersPage} from "../pages";

const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'posts', element: <PostsPage/>},
            {path: 'comments', element: <CommentsPage/>},
            {index: true, element:<MainPage/>}
        ]
    }
])

export default router