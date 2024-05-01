import {IUser} from "../../models";
import React, {FC} from "react";

interface IProps {
    user: IUser
}

type IPropsType = IProps & { children?: React.ReactNode }&{getUserId?:(userId:number)=>void}
const SingleUserComponent: FC<IPropsType> = ({user,getUserId}) => {
    const onClickHandler=()=>{
        if(getUserId){
           getUserId(user.id)
        }
    };
    return (
        <div>
            <div>
                <button onClick={onClickHandler}>Show all posts</button>
                <h2>{user.username}</h2>
                <div>{user.firstName} {user.maidenName} {user.lastName}</div>
                <div>age: {user.age} {user.gender}</div>
                <a href={user.email}>{user.email}</a>
            </div>
            <img src={user.image} alt={user.username}/>
        </div>
    );
};

export {SingleUserComponent};