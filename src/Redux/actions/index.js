import {getDummyData} from "../../Network/NetworkRequest";

export const increment = (value,dispatch) => {
        getDummyData() .then(()=>{
            dispatch({
                type: "INCREMENT",
                value
            })
        }).catch((error)=>{console.log("error", error)})
};

export const decrement = async (value,dispatch) => {
    // const response = getDummyData()
        getDummyData() .then(()=>{
            dispatch({
                type: "DECREMENT",
                value
            })
        }).catch((error)=>{console.log("error", error)})

};

export const dataFetch = () => async(dispatch) => {
    const response = await getDummyData()
    dispatch({
        type: "DATA_FETCHING",
        payload: response?.data
    })
    // getDummyData() .then((data)=>{
    //     // debugger
    //     dispatch({
    //         type: "DATA_FETCHING",
    //         payload: data?.data
    //     })
    // }).catch((error)=>{console.log("error", error)})

};
