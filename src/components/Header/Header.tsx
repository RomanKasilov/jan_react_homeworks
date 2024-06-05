import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
         <ul>
             <li><Link to={'users'}>users</Link></li>
             <li><Link to={'posts'}>posts</Link></li>
             <li><Link to={'comments'}>comments</Link></li>
             <li><Link to={'usersPosts'}>usersPosts</Link></li>
             <li><Link to={'postsComments'}>postsComments</Link></li>
         </ul>
        </div>
    );
};

export {Header};