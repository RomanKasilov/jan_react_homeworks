import {Link} from "react-router-dom";

const Header = () => {

    return (
        <div>
            <ul>
                <li><Link to={''}>Home</Link></li>
                <li><Link to={'users'}>Users</Link></li>
                <li><Link to={'posts'}>Posts</Link></li>
            </ul>
        </div>
    );
};

export {Header};