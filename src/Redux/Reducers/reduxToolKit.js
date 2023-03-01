import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {getDummyData} from "../../Network/NetworkRequest";

// debugger
export const fetchPosts = createAsyncThunk(
    "fetchPost", getDummyData,

)
const slice = createSlice({
    name: "count",
    initialState: {data: null, loading: false, error: ""},
    reducers: {
        Increment: (state, action) => {
            const {value} = action.payload
            console.log("Payload", value)
            state.data = state.data + value
        },
        Decrement: (state) => {
            state.data = state.data - 1
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.loading = false
            state.error = "Server Crash"
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.loading = false
            state.data = action?.payload?.data
        })

    }
})


export const {Increment, Decrement} = slice.actions

export default slice.reducer
