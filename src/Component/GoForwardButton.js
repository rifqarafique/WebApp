import {useNavigate} from "react-router-dom";

const GoForwardButton = () =>{
    const navigate = useNavigate();

    const GoNextClick = () => {
        navigate("/")
    }
    return(

        <button onClick={GoNextClick}>
            Next
        </button>
    )

}

export default GoForwardButton