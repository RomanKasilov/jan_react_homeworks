import {IPost} from "./IPost.model";

export interface IPosts{
    posts: IPost[],
    total: number,
    skip: number,
    limit: number

}