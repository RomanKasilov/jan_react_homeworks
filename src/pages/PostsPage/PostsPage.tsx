import {useLocation, useNavigate, useParams} from "react-router-dom";

import useStateEffect from "../../hooks/useStateEffect";
import postService from "../../services/postService";
import {Posts} from "../../components";
import css from './postPage.module.css'

const PostsPage = () => {

    const {userId} = useParams()
    const {state} = useLocation()

    const id: string = userId ? userId : state.user.id.toString()
    const posts = useStateEffect(postService.getPostsByUserID(id))

    const navigateBack = useNavigate()

    return (
        <div className={css.wrapper}>
            <div className={css.subHeader}>
                <h2>All posts of current User</h2>
                <button onClick={() => navigateBack(-1)}>
                    Back to Users
                </button>
            </div>
            <Posts posts={posts}/>
        </div>
    );
};

export {PostsPage};