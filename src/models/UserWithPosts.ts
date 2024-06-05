import {IPostModel} from "./IPostModel";
import {IUserModel} from "./IUserModel";

export type UserWithPostsType = IUserModel & { posts: IPostModel[] }