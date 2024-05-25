import {useEffect, useState} from "react";
import {IRespModel} from "../models/IRespModel";


const useStateEffect = <T>(service:IRespModel<T[]> )=>{
    const [items, setItems] = useState<T[]>([])
    useEffect(() => {
        service.then(({data}) => setItems(data))
    }, []);
    return items
}
export default useStateEffect