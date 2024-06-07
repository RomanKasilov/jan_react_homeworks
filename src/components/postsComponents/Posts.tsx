import {Post} from "./Post";
import {useStore} from "../../context";


const Posts = () => {
    const {postSlice:{allPosts}} = useStore()

    return (
        <div>
            {allPosts.map(post => <Post key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};