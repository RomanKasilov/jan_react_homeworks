import {IUserModel} from "../../models/IUserModel";
import React, {FC} from "react";
interface IProps {
    user: IUserModel,
    children?:React.ReactNode
}
const User:FC<IProps> = (user) => {
    return (
        <div>
            User
        </div>
    );
};

export {User};