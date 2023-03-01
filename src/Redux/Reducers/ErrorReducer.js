import {getErrorData} from "../../Network/NetworkRequest";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

export const getPost = createAsyncThunk(
    "getPostURL", getErrorData
)

const errorSlice = createSlice({

    name: "error",
    initialState: {data: null, loading: false, errorMessage: ""},
    reducers: {
        Error: (state, action) => {
            state.data = "Bad Request"
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getPost.rejected, (state, action) => {
            state.loading = false
            state.errorMessage = "Server Crash"
        })

    }
})

export const {Error} = errorSlice.actions
export default errorSlice.reducer
