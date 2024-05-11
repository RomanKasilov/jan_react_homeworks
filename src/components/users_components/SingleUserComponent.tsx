import React, {FC} from "react";

import {IUser} from "../../models";
import styles from './SingleUser.module.css'


interface IProps {
    user: IUser
}

type IPropsType = IProps & { children?: React.ReactNode } & { getUserId?: (userId: number) => void }


const SingleUserComponent: FC<IPropsType> = ({user, getUserId}) => {
    const onClickHandler = () => {
        if (getUserId) {
            getUserId(user.id)
        }
    };
    return (
        <div className={styles.wrapper}>
            <div className={styles.userInfo}>
                <h2 className={styles.username}>{user.username}</h2>
                <div>{user.firstName} {user.maidenName} {user.lastName}</div>
                <div>age: {user.age} {user.gender}</div>
                <a href='#'>{user.email}</a>
            </div>
            <div className={styles.box}>
                <img className={styles.img} src={user.image} alt={user.username}/>
                <button onClick={onClickHandler}>Show all posts</button>
            </div>
        </div>
    );
};

export {SingleUserComponent};