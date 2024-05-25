import axiosJsonInstance from "./json.api.service";
import {urls} from "../constants";
import {ICommentModel, IRespModel} from "../models";

const commentService = {
    getCommentsByPostID: (id:string):IRespModel<ICommentModel[]>=>{
        return axiosJsonInstance.get(urls.commentsByPost(id))
    }
}
export default commentService