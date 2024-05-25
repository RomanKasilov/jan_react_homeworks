import {FC, PropsWithChildren} from "react";
import {useNavigate} from "react-router-dom";

import {IUserModel} from "../../models";
import css from './user.module.css'

interface IProps extends PropsWithChildren {
    user: IUserModel
}

const User: FC<IProps> = ({user}) => {
    const navigate = useNavigate()
    return (
        <div className={css.singleUser_box}
             onClick={() => {
                 navigate(`/users/${user.id}/posts`, {state: {user}})
             }}
        >
            <p>{user.username}</p>
            <p>{user.name}</p>
        </div>
    );
};

export {User};