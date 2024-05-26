import useStateEffect from "../../hooks/useStateEffect";
import {Users} from "../../components";
import userService from "../../services/userService";

import css from './usersPage.module.css'

const UsersPage = () => {

    const users = useStateEffect(userService.getAllUsers())

    return (
        <div className={css.wrap}>
            <div className={css.subheader}>
                <h2>There are all users what we have...Click to see User's posts</h2>
            </div>
            <Users users={users}/>
        </div>
    );
};

export {UsersPage};