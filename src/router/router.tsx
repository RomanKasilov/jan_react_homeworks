import {createBrowserRouter} from "react-router-dom";

import {MainLayout} from "../layouts";
import {UsersPage, PostsPage, CommentsPage, HomePage} from "../pages";

const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout/>, children: [
            {path: 'users', element: <UsersPage/>},
            {path: 'users/:userId/posts', element: <PostsPage/>},
            {path: 'posts/:postId/comments', element: <CommentsPage/>},
            {index: true, element: <HomePage/>}
        ]
    }
])
export default router