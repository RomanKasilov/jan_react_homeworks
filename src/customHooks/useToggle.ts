// 1. useToggle - custom React hook that allows a component to toggle a value between true and false
// import { useState } from "react"
import {useEffect, useState} from "react";

export const useToggle = (initialState: boolean) => {
    const [state, setState] = useState<boolean>(initialState)
    useEffect(() => {
        setState(prevState => !prevState)
    }, []);
    return [state]
}



