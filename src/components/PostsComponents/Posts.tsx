import {FC, PropsWithChildren} from "react";

import {IPostModel} from "../../models";
import {Post} from "./Post";
import css from './posts.module.css'

interface IProps extends PropsWithChildren {
    posts: IPostModel[]
}

const Posts: FC<IProps> = ({posts}) => {
    return (
        <div className={css.posts_wrapper}>
            {posts.map(post => <Post  key={post.id} post={post}/>)}
        </div>
    );
};

export {Posts};