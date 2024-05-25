import axiosJsonInstance from "./json.api.service";

import {urls} from "../constants";
import {IRespModel, IUserModel} from "../models";

const userService = {
    getAllUsers: (): IRespModel<IUserModel[]> => {
        return axiosJsonInstance.get(urls.users)
    }
}
export default userService