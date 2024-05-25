import {ICommentModel} from "../../models";
import {FC, PropsWithChildren} from "react";
import {Comment} from "./Comment";

interface IProps extends PropsWithChildren {
comments: ICommentModel[]
}
const Comments:FC<IProps> = ({comments}) => {

    return (
        <div>
            {comments.map(comment=><Comment comment={comment} key={comment.id}/>)}
        </div>
    );
};

export {Comments};