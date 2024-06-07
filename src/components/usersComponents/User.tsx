import {FC} from "react";

import {IUserModel} from "../../models";
import {useStore} from "../../context";

interface IProps {
    user: IUserModel
}

const User: FC<IProps> = ({user}) => {
    const{userSlice:{setFavoriteUser}}=useStore()
    return (
        <div>
            {user.id}: {user.name} {user.username}
            <button onClick={()=>{
                setFavoriteUser(user)
            }}>set favorite User</button>
        </div>
    );
};

export {User};