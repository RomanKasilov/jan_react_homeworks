import {IPostModel} from "../../models";
import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";
import {urls} from "../../constants";

interface IProps extends PropsWithChildren {
post:IPostModel
}
const Post:FC<IProps> = ({post}) => {
const navigate = useNavigate()

    return (
        <div>
            <div>
                <h3>{post.title}</h3>
                <div>{post.body}</div>
            </div>

            <button
                onClick={()=>
                    navigate(
                        `/${urls.commentsByPost(post.id.toString())}`,
                        {state:{post}}
                    )
            }>
                Show all comments
            </button>
        </div>
    );
};

export {Post};