import axiosJsonInstance from "./json.api.service";
import {urls} from "../constants";
import {IRespModel} from "../models";
import {IPostModel} from "../models";

const PostService = {
    getPostsByUserID: (id: string):IRespModel<IPostModel[]>=>{
        return axiosJsonInstance.get(urls.postsByUser(id))
    }
}
export default PostService