import {AxiosResponse} from "axios";

export type IRespModel<T> = Promise<AxiosResponse<T>>