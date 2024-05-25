import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div>Header</div>
            <Link to={'/'}>
                Home
            </Link>
        </div>
    );
};

export {Header};