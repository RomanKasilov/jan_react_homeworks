import {Comment} from "./Comment";
import {useDataContext} from "../../context";

const Comments = () => {
    const {comments: {allComments}} = useDataContext()
    return (
        <div>
            {allComments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};