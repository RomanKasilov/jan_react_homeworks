import {AxiosResponse} from "axios";

export type IAxiosResponseModel<T> = Promise<AxiosResponse<T>>