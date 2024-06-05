import {useEffect, useMemo, useState} from "react";

import {useDataContext} from "../../context";
import {PostWithCommentsType} from "../../models";

const PostComments = () => {
    const {comments: {allComments}, posts: {allPosts}} = useDataContext();

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
            {dataState.map(post => <div>
                <h3>{post.title}</h3>
                <ul>
                    {post.comments.map(comment => <li>{comment.body}</li>)}
                </ul>
            </div>)}
        </div>
    );
};

export {PostComments};