import {combineReducers} from "redux";
import count from "./Reducers/reduxToolKit"
import {configureStore} from "@reduxjs/toolkit";
import error from "./Reducers/ErrorReducer"
const reducers = combineReducers({
    count,
    error
})

const store = configureStore({
    reducer: reducers
})
export {store}