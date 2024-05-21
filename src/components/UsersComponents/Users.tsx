import {usersServices} from "../../services";
import {IUserModel} from "../../models";
import {User} from "./User";
import useStateEffect from "../../hooks/useStateEffect";

const Users = () => {

    const users = useStateEffect<IUserModel>(usersServices.getAllUsers())

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};