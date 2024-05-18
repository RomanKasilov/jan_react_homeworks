// 2. usePrevious - hook that allows a component to keep track of the previous value of a variable

import {useRef} from "react";

interface returnModel<T> {
    currentVal: T
    prevVal: T | undefined
}

export const usePrevious = <T, >(currentValue: T): returnModel<T> => {
    const current = useRef<T>(currentValue);
    const prev = useRef<T | undefined>()
    if (current.current !== currentValue) {
        prev.current = current.current
    }
    return {
        currentVal: current.current,
        prevVal: prev.current
    }
}