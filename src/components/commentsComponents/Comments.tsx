import {Comment} from "./Comment";
import {useStore} from "../../context";


const Comments = () => {
    const {commentSlice:{allComments}} = useStore()
    return (
        <div>
            {allComments.map(comment => <Comment key={comment.id} comment={comment}/>)}
        </div>
    );
};

export {Comments};