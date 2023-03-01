import {useReducer} from "react";
import {useNavigate} from "react-router-dom";
import GoBackButton from "./GoBackButton";

const Reducer = () => {

    const navigate = useNavigate();

    const initialState = 0
    const reducer = (state, action) => {
        switch (action) {
            case "add":
                return state + 1;
            case "reset":
                return 0;
        }
    }
    const GoBackClick = () => {
        navigate("/")
    }
    const [count, dispatch] = useReducer(reducer, initialState)

    return (
        <div>
            <h2>{count}</h2>
            <button style={styles.addButtonStyle} onClick={() => dispatch("add")}>
                add
            </button>
            <button style={styles.resetButtonStyle} onClick={() => dispatch("reset")}>
                reset
            </button>
            <GoBackButton/>
        </div>
    )

}

const styles = {
    addButtonStyle: {
        color: "white",
        backgroundColor: "DodgerBlue",
        fontFamily: "Arial",
    },
    resetButtonStyle: {
        color: "white",
        backgroundColor: "red",
        fontFamily: "Arial",
        marginLeft: 5
    }
}
export default Reducer