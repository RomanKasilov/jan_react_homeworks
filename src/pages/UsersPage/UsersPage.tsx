import useStateEffect from "../../hooks/useStateEffect";
import {Users} from "../../components";
import userService from "../../services/userService";

import css from './usersPage.module.css'

const UsersPage = () => {

    const users = useStateEffect(userService.getAllUsers())

    return (
        <div className={css.wrap}>
            <h2>There are all users what we have...</h2>
            <Users users={users}/>
        </div>
    );
};

export {UsersPage};