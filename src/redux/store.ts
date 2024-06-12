import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";

import {slice1} from "./slices/slice1";

const store = configureStore({
    reducer: {
        sliceA: slice1.reducer
    }
})

type RootState = ReturnType<typeof store.getState>
const useAppSelector = useSelector.withTypes<RootState>()

type useAppDispatchType = typeof store.dispatch
const useAppDispatch = useDispatch.withTypes<useAppDispatchType>()

export {store, useAppSelector, useAppDispatch}