import {FC} from "react";

import {IUserModel} from "../../models";

interface IProps {
    user: IUserModel
}

const User: FC<IProps> = ({user}) => {
    return (
        <div>
            {user.id}: {user.name} {user.username}
        </div>
    );
};

export {User};