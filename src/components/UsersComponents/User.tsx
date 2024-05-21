import {IUserModel} from "../../models";

import React, {FC} from "react";

interface IProps {
    user: IUserModel
}

const User: FC<IProps> = ({user}) => {
    return (
        <div>
            {user.name} {user.username}
        </div>
    );
};

export {User};