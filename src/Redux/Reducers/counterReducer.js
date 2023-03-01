import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    count: 0,
    data: null
}
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            // return state + action?.value
            return {
                ...state,
                count: state.count + action.value
            }

        case "DECREMENT":
            return {
                ...state,
                count: state.count - action.value
            }
        case 'DATA_FETCHING':
            return {...state, data: action?.payload}
        default:
            return state

    }
};
export default counterReducer;