import {IUser} from "./IUser.model";

export interface IUsers{
    users: IUser[],
    total: number,
    skip: number,
    limit: number
}