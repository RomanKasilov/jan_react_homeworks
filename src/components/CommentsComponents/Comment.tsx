import {FC} from "react";

import {ICommentModel} from "../../models";

interface IProps {
    comment: ICommentModel
}

const Comment: FC<IProps> = ({comment}) => {
    return (
        <div>
            <h3>{comment.name}</h3>
            <p>{comment.body}</p>
        </div>
    );
};

export {Comment};