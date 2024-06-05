import {FC} from "react";

import {IPostModel} from "../../models";

interface IProps {
    post: IPostModel
}

const Post: FC<IProps> = ({post}) => {
    return (
        <div>
            <h3>{post.title}</h3>
            <div>{post.body}</div>
        </div>
    );
};

export {Post};