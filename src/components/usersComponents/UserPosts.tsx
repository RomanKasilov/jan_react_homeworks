import {useEffect, useMemo, useState} from "react";


import {UserWithPostsType} from "../../models";
import {useStore} from "../../context";

const UserPosts = () => {
    const {userSlice:{allUsers },postSlice:{allPosts}} = useStore()

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
            {state.map(user => <div key={user.id}>
                <h3>{user.name} {user.username}</h3>
                <ul>
                    {user.posts.map(post => <li key={post.id}>{post.title}</li>)}
                </ul>
            </div>)}
        </div>
    );
};

export {UserPosts};