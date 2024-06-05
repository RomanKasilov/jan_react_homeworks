import {Post} from "./Post";
import {useDataContext} from "../../context";

const Posts = () => {
    const {posts: {allPosts}} = useDataContext()

    return (
        <div>
            {allPosts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};