import {BrowserRouter, Route, Routes} from "react-router-dom";
import State from "./State";
import Reducer from "./Reducer";
import Memo from "./Memo";
import Home from "./Home";
import LoginScreen from "./LoginScreen";
import ProtectedRouteLayer from "./ProtectedRoutes";
import SignInForm from "./SignInForm";
import SignUpForm from "./SignUpForm";
import Congratulations from "./Congratulations";


const TestRouter = (props) => {
    console.log("props", props)
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/SignUp" element = {<SignUpForm/>}/>
                <Route path="/Congratulation" element = {<Congratulations/>}/>
                       {/*element={<LoginScreen user={props.user}*/}
                       {/*                      setUser={props.setUser}/>}/>*/}
                {/*<Route element={<ProtectedRouteLayer user={props.user}/>}>*/}
                {/*    <Route path="/" element={<Home user={props.user}*/}
                {/*                                   setUser={props.setUser}/>}/>*/}
                {/*    <Route path="/state" element={<State/>}/>*/}
                {/*    <Route path="/memo" element={<Memo/>}/>*/}
                {/*    <Route path="/reducer" element={<Reducer/>}/>*/}
                {/*</Route>*/}

            </Routes>

        </BrowserRouter>
    )
}
export default TestRouter