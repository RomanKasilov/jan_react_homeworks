import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const loadAllUsers = createAsyncThunk(
    'userSlice/loadAllUsers',
    (arg, thunkAPI) => {
        
    }
)

const userSlice = createSlice({
    name:'userSlice',
    initialState:{},
    reducers:{},
    extraReducers:builder =>
        builder

});