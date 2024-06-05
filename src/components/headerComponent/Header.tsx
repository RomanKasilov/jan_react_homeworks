import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <ul>
                <li><Link to={'users'}>All users</Link></li>
                <li><Link to={'posts'}>All posts</Link></li>
                <li><Link to={'comments'}>All comments</Link></li>
                <li><Link to={'usersPosts'}>usersPosts</Link></li>
                <li><Link to={'postsComments'}>postsComments</Link></li>
            </ul>
        </div>
    );
};

export {Header};