import {useEffect, useState} from "react";
import {IAxiosResponseModel} from "../models";

const useStateEffect = <T>(service:IAxiosResponseModel<T[]> )=>{
    const [items, setItems] = useState<T[]>([])
    useEffect(() => {
        service.then(({data}) => setItems(data))
    }, []);
    return items
}
export default useStateEffect