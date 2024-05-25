import {createBrowserRouter} from "react-router-dom";
import {MainLayout} from "../layouts";
import {UsersPage} from "../pages/UsersPage";
import {PostsPage} from "../pages/PostsPage";
import {CommentsPage} from "../pages/CommentsPage";
import {HomePage} from "../pages/HomePage/HomePage";

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