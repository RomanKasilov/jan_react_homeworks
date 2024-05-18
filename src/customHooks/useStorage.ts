// useStorage - hook that allows a component to store a value in the browser's LocalStorage

import {useState} from "react";

export const useStorage =<T> (key:string, storageObject:T)=>{

    const [value] = useState(()=>{
        let jsonValue = localStorage.getItem(key);
        if (jsonValue !== null) {
            return JSON.parse(jsonValue)
        }else localStorage.setItem(key, JSON.stringify(storageObject))
    })

return value
};