import {useEffect, useState} from "react";
import {usersServices} from "../../services";
import {IUserModel} from "../../models";
import {User} from "./User";

const Users = () => {
    const [users, setUsers] = useState<IUserModel[]>([])
    useEffect(() => {
        usersServices.getAllUsers()
            .then(({data}) => setUsers(data))

    }, []);

    return (
        <div>
            {users.map(user=><User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};