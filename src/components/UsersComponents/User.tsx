import {FC, PropsWithChildren} from "react";
import {IUserModel} from "../../models";
import {useNavigate} from "react-router-dom";

interface IProps extends PropsWithChildren {
    user: IUserModel
}

const User: FC<IProps> = ({user}) => {
    const navigate = useNavigate()
    return (
        <div>
            <div>
                <h3>{user.nickName}</h3>
                <div>{user.name}</div>
            </div>
            <button onClick = {()=>{
                navigate(`/users/${user.id}/posts`, {state: {user}})
            }}>
                Show users posts
            </button>
        </div>
    );
};

export {User};