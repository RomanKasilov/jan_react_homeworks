import {FC, PropsWithChildren} from "react";

import {IUserModel} from "../../models";
import {User} from "./User";
import css from './users.module.css'

interface IProps extends PropsWithChildren {
    users: IUserModel[]
}

const Users: FC<IProps> = ({users}) => {
    return (
        <div className={css.users_box}>
            {users.map((user, i) => <User key={user.id} user={user}/>)}
        </div>
    );
};

export {Users};