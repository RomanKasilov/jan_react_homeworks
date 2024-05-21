import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Link to={'users'}> Users</Link>
            <Link to={'posts'}> Posts</Link>
            <Link to={'comments'}> Comments</Link>
            <hr/>
        </div>
    );
};

export {Header};