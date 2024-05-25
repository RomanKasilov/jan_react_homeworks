import {useLocation, useNavigate, useParams} from "react-router-dom";

import useStateEffect from "../../hooks/useStateEffect";
import {Comments} from "../../components/CommentsComponents";
import commentService from "../../services/commentService";

const CommentsPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();
    const statePostId = state.post.id.toString()

    const id = postId ? postId : statePostId
    const comments = useStateEffect(commentService.getCommentsByPostID(id))

    const navigateBack    = useNavigate()
const navigateToUsers = useNavigate()
    return (
        <div>
            <div>
                <h2>Some comments by some Users....</h2>
                <button onClick={() => navigateBack(-1)}>Back to User's posts</button>
            </div>
            <Comments comments={comments}/>
            <button onClick={()=>navigateToUsers('/users')}>
                Back to User Page
            </button>
        </div>
    );
};

export {CommentsPage};