import {Link} from "react-router-dom";

import css from './homePage.module.css'

const HomePage = () => {
    return (
        <div className={css.wrap}>
            <div className={css.subheader}>
                <h1>Home page</h1>
                <div>Welcome!</div>
            </div>
            <div className={css.linkWrapper}>
                <Link to={'users'} className={css.link}>
                    Choose your User <span>&nbsp;NOW!</span>
                </Link>
            </div>
        </div>
    );
};

export {HomePage};