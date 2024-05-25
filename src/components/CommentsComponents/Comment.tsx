import {FC, PropsWithChildren} from "react";

import {ICommentModel} from "../../models";
interface IProps extends PropsWithChildren {
    comment:ICommentModel
}
const Comment:FC<IProps> = ({comment}) => {
    return (
        <div>
            <h3>{comment.name}</h3>
            <div>{comment.body}</div>
            <hr/>
        </div>
    );
};

export {Comment};