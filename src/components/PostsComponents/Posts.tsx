import {FC, PropsWithChildren} from "react";

import {IPostModel} from "../../models/IPostModel";
import {Post} from "./Post";

interface IProps extends PropsWithChildren {
    posts: IPostModel[]
}

const Posts: FC<IProps> = ({posts}) => {
    return (
        <div>
            {posts.map(post => <Post  key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};