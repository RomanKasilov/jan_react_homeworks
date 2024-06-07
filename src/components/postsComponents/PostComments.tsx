import {useEffect, useMemo, useState} from "react";

import {PostWithCommentsType} from "../../models";
import {useStore} from "../../context";

const PostComments = () => {
    const {postSlice:{allPosts},commentSlice:{allComments}} = useStore();

    const [dataState, setDataState]
        = useState<PostWithCommentsType[]>([])

    const PostCommentsData = useMemo(() => {
        return (): PostWithCommentsType[] => {
            return allPosts.map(post => {
                return {...post, comments: allComments.filter(comment => comment.postId === post.id)}
            })
        }
    }, [allComments, allPosts])

    useEffect(() => setDataState(PostCommentsData), [PostCommentsData]);

    return (
        <div>
            {dataState.map(post => <div key={post.id}>
                <h3>{post.title}</h3>
                <ul>
                    {post.comments.map(comment => <li key={comment.id}>{comment.body}</li>)}
                </ul>
            </div>)}
        </div>
    );
};

export {PostComments};