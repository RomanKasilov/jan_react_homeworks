import useStateEffect from "../../hooks/useStateEffect";
import {Users} from "../../components/UsersComponents";
import userService from "../../services/userService";

const UsersPage = () => {

    const users = useStateEffect(userService.getAllUsers())

    return (
        <div>
            <h2>There are all users what we have...</h2>
            <Users users={users}/>
        </div>
    );
};

export {UsersPage};