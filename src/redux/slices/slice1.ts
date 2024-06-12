import {createSlice, PayloadAction} from "@reduxjs/toolkit";

type Slice1Type = {
    value: number
}
const initialState: Slice1Type = {
    value: 0
};
export const slice1 = createSlice({
    name: "calculatorSlice",
    initialState: initialState,
    reducers: {
        increment: (state) => {
            state.value++
        },
        decrement: (state) => {
            state.value = state.value - 10
        },
        multiply: (state, action: PayloadAction<number>) => {
            state.value = state.value * action.payload
        },
        reset: (state) => {
            state.value = 0
        }
    }
})

export const {
    increment,
    decrement,
    multiply,
    reset
} = slice1.actions;


