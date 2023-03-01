import GoBackButton from "./GoBackButton";
import {LOGO_ICON} from "../Images";
import CustomInput from "./CustomInput";
import {Navigate, useNavigate} from "react-router-dom";
import GoForwardButton from "./GoForwardButton";


const LoginScreen = (props) => {
    const navigate = useNavigate()
    const onLoginClick=()=>{
        props.setUser(true)
            navigate("/")

    }

    return (
        <div style={{justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column"}}>
            <h1>Login</h1>
            <img src={LOGO_ICON}/>
            <CustomInput placeholder="Enter Your Email"/>
            <CustomInput placeholder="Enter Your Password"/>
            <div style = {{flexDirection:"row"}}>

                <button style={{marginRight:5}} onClick={onLoginClick}>Login
                </button>
                {/*<GoForwardButton/>*/}
                </div>
        </div>
    )
}

export default LoginScreen