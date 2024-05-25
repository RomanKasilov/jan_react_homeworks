import {Link} from "react-router-dom";

const HomePage = () => {
    return (
        <div>
            <h1>Home page</h1>
            <div>Welcome</div>
            <Link to={'users'}>
                Choose your User NOW!
            </Link>
        </div>
    );
};

export {HomePage};