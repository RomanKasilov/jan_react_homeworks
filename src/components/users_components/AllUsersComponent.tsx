import React, {FC, useEffect, useState} from "react";

import {getAllUsers} from "../../services";
import {SingleUserComponent} from "./SingleUserComponent";

import {IUser} from "../../models";
import styles from './AllUsers.module.css'

type IPropsType = {getUserId?:(userId:number)=>void}&{ children?: React.ReactNode }


const AllUsersComponent: FC<IPropsType> = ({getUserId}) => {

    const [users, setUsers] =
        useState<IUser[]>([])

    useEffect(() => {

        getAllUsers().then(({data:{users}}) => setUsers(users))
    }, []);

    return (
        <div className={styles.wrapper}>
            {
                users.map(user => <SingleUserComponent key={user.id} user={user} getUserId={getUserId}/>)
            }
        </div>
    );
};

export {AllUsersComponent};