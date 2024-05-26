import {useLocation, useNavigate, useParams} from "react-router-dom";

import useStateEffect from "../../hooks/useStateEffect";
import {Comments} from "../../components";
import commentService from "../../services/commentService";
import css from './commentsPage.module.css'

const CommentsPage = () => {
    const {postId} = useParams();
    const {state} = useLocation();
    const statePostId = state.post.id.toString()

    const id = postId ? postId : statePostId
    const comments = useStateEffect(commentService.getCommentsByPostID(id))

    const navigateBack = useNavigate()
    const navigateToUsers = useNavigate()
    return (
        <div className={css.wrapper}>
            <div className={css.subHeader}>
                <h2>Some comments by some Users....</h2>
                <button onClick={() => navigateBack(-1)}>Back to User's Posts</button>
            </div>
            <Comments comments={comments}/>
            <button className={css.backToUsersButton} onClick={() => navigateToUsers('/users')}>
                Back to User Page
            </button>
        </div>
    );
};

export {CommentsPage};