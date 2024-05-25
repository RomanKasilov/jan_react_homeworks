import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models";
import {User} from "./User";

interface IProps extends PropsWithChildren {
    users: IUserModel[]
}

const Users:FC<IProps> = ({users}) => {
    return (
        <div>
            {users.map((user,i) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};