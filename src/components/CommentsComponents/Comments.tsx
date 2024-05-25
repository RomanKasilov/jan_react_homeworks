import {FC, PropsWithChildren} from "react";

import {ICommentModel} from "../../models";
import {Comment} from "./Comment";
import css from './comments.module.css'

interface IProps extends PropsWithChildren {
comments: ICommentModel[]
}
const Comments:FC<IProps> = ({comments}) => {

    return (
        <div className={css.comments_box}>
            {comments.map(comment=><Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};