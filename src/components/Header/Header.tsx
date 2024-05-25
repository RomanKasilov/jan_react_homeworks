import {Link} from "react-router-dom";

import css from './header.module.css'

const Header = () => {
    return (
        <div className={css.header}>
            <div>Header</div>
            <Link to={'/'}>
                Home Page
            </Link>
        </div>
    );
};

export {Header};