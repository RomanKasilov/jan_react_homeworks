import React, {FC} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {useAppDispatch, useAppSelector} from "./redux/store";
import {decrement, increment, multiply, reset} from "./redux/slices/slice1";
import {ISubmitFormType} from "./models/ISubmitFormType";


const App: FC = () => {
    const currentState = useAppSelector(state => state.sliceA.value);
    const dispatch = useAppDispatch()
    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<ISubmitFormType>({mode: "onChange"});

    const rateSubmit: SubmitHandler<ISubmitFormType> = (data) => {
        dispatch(multiply(data.rate))
    }
    return (
        <>
            <div>{currentState}</div>
            <button onClick={() => dispatch(increment())}>state+1</button>
            <button onClick={() => dispatch(decrement())}>state-10</button>
            <button onClick={() => dispatch(reset())}>reset</button>
            <form onSubmit={handleSubmit(rateSubmit)}>
                <button> multiply x</button>
                <input type="text" {...register('rate',
                    {
                        pattern: {
                            value: /^[-.\d]+$/,
                            message: 'digital characters only or "-","."'
                        },
                    })}/>
                {errors.rate && <div>{errors.rate.message}</div>}
            </form>
        </>
    );
};

export {App};


