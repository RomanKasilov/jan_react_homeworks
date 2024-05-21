import {IPostModel} from "../../models";
import {Post} from "./Post";
import {postsServices} from "../../services";
import useStateEffect from "../../hooks/useStateEffect";

const Posts = () => {
    const posts = useStateEffect<IPostModel>(postsServices.getAllPosts())
    return (
        <div>
            {posts.map(post => <Post post={post}/>)}
        </div>
    );
};

export {Posts};