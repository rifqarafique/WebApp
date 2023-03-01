import {Navigate, Outlet} from "react-router-dom";
import {useNavigate} from "react-router-dom";

const ProtectedRouteLayer = (props) => {
    // debugger
    const navigate = useNavigate()
    return (
        <>
            {props?.user ? <Outlet/> : <Navigate to = "/login"/>}
        </>

    )
}

export default ProtectedRouteLayer