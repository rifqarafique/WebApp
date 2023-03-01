// import React from "react";
// import "./App.css"
// import TestRouter from "./Component/TestRouter";
// // import {useState} from "react";
// //
// const App = () => {
//
//     // const [userLoggedIn, setUserLoggedIn] = useState(false)
//     // console.log("user logged in", userLoggedIn)
//
//     return (
//         <div>
//             Hello, World
//             {/*// <TestRouter user={userLoggedIn}*/}
//             {/*//             setUser={setUserLoggedIn}*/}
//             {/*// />*/}
//         <TestRouter/>
//         </div>
//
//
//     )
// }
//
// export default App
// import "./App.css";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import Decrement from "./Component/Decrement";
// import Increment from "./Component/Increment";
import {useState} from "react";
import {getDummyData} from "./Network/NetworkRequest";
import {dataFetch} from "./Redux/actions";
import {Increment, Decrement, fetchPosts} from "./Redux/Reducers/reduxToolKit"
import state from "./Component/State";
import {getPost} from "./Redux/Reducers/ErrorReducer";
// import TestRouter from "./Component/TestRouter";

// function App() {
    // const dispatch = useDispatch()
    // // const counter = useSelector((state) => state?.count?.data);
    // const [data, setData] = useState("")
    // // debugger
    // const title = useSelector((state) => state?.count?.data?.title)
    // const loader = useSelector((state) => state?.count?.loading)
    //
    // const errorMessage = useSelector((state)=>state?.error?.errorMessage)
    // // console.log("state", state)
    // useEffect(() => {
    //     debugger
    //     dispatch(fetchPosts())
    // }, [])
    //
    //
    // useEffect(() => {
    //     dispatch(getPost())
    // }, [])
    //

    // const receiveData = async () => {
    //
    //     try {
    //         const Data = await getDummyData()
    //         setData(Data)
    //         if (Data.status === 200) {
    //             alert("Successfully Fetched")
    //         }
    //         console.log("Data", data)
    //
    //     } catch (error) {
    //         if (error.response.status === 404) {
    //             alert("URL is Not Correct")
    //         } else if (error.response.status === 500) {
    //             alert("Server Error")
    //         }
    //         console.log("error", error)
    //     }
    // }

//     return (
//         <div>
//             {/*<button></button>*/}
//             {/* <button></button>*/}
//
//             {/*<button></button>*/}
//             {/*<Increment onClick={receiveData}/>*/}
//             {/*<Decrement onClick={receiveData}/>*/}
//             {/*{loader ? (*/}
//             {/*    alert("Loading")*/}
//             {/*    ):*/}
//             {/*    (*/}
//             {/*        <p>{title}</p>*/}
//
//             {/*    )*/}
//             {/*}*/}
//
//             {/*<p>{errorMessage}</p>*/}
//         </div>
//     );
// }

import React from "react";
import "./App.css"
import TestRouter from "./Component/TestRouter";
// // import {useState} from "react";
// //
const App = () => {

    // const [userLoggedIn, setUserLoggedIn] = useState(false)
    // console.log("user logged in", userLoggedIn)

    return (
        <div>
            {/*// <TestRouter user={userLoggedIn}*/}
            {/*//             setUser={setUserLoggedIn}*/}
            {/*// />*/}
        <TestRouter/>
        </div>


    )
}
export default App;
