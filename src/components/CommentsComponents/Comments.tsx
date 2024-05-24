import {Comment} from "./Comment";
import {commentsServices} from "../../services";
import {ICommentModel} from "../../models";
import useStateEffect from "../../hooks/useStateEffect";

const Comments = () => {
    const comments = useStateEffect<ICommentModel>(commentsServices.getAllComments())
    return (
        <div>
            {comments.map(comment => <Comment key = {comment.commentId} comment={comment}/>)}
        </div>
    );
};

export {Comments};