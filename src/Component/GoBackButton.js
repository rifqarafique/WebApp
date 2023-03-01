import {useNavigate} from "react-router-dom";

const GoBackButton = () =>{
    const navigate = useNavigate();

    const GoBackClick = () => {
        navigate("/")
    }
    return(

        <button onClick={GoBackClick}>
            Go Back
        </button>
    )

}

export default GoBackButton