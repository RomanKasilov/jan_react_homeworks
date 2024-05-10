import React, {FC} from "react";

import {SinglePostComponent} from "./SinglePostComponent";

import {IPost} from "../../models";
import styles from './AllPostsComponent.module.css'


interface IProps {
    posts: IPost[]
}
type IPropsType = IProps & { children?: React.ReactNode }


const AllPostsComponent: FC<IPropsType> = ({posts}) => {
    return (
        <div className={styles.wrapper}>
           <div> {
               posts.map(post => <SinglePostComponent key={post.id} post={post}/>)
           }</div>
        </div>
    );
};

export {AllPostsComponent};