import React, {FC} from "react";

import {IPost} from "../../models";

import styles from './SinglePost.module.css'


interface IProps {
    post: IPost
}
type IPropsType = IProps & { children?: React.ReactNode }


const SinglePostComponent:FC<IPropsType> = ({post}) => {
    console.log(post);
    return (
        <div className={styles.wrapper}>
            {post.body}
        </div>
    );
};

export {SinglePostComponent};