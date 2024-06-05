import {useEffect, useMemo, useState} from "react";

import {useDataContext} from "../../context";
import {UserWithPostsType} from "../../models";

const UserPosts = () => {
    const {posts: {allPosts}, users: {allUsers}} = useDataContext()

    const [state, setState]
        = useState<UserWithPostsType[]>([])

    const usersPostsData = useMemo<() => UserWithPostsType[]>(() => {
        return () => {
            return allUsers.map(user => {
                return {...user, posts: allPosts.filter(post => user.id === post.userId)}
            })
        }
    }, [allPosts, allUsers])

    useEffect(() => setState(usersPostsData), [usersPostsData]);

    return (
        <div>
            {state.map(user => <div>
                <h3>{user.name} {user.username}</h3>
                <ul>
                    {user.posts.map(post => <li>{post.title}</li>)}
                </ul>
            </div>)}
        </div>
    );
};

export {UserPosts};