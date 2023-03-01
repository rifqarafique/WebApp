import {useEffect, useRef, useState} from "react";
import {useNavigate} from "react-router-dom";
import GoBackButton from "./GoBackButton";

const State = () => {
    const [color, setColor] = useState("")
    const ref = useRef(0)
    const navigate = useNavigate();

    const onChangeColorPress = () => {
        ref.current = ref.current + 1
        if (color === "red") {
            setColor("yellow")
        } else {
            setColor("red")
        }

    }

    useEffect(() => {
        setColor("yellow")
    }, [])

    useEffect(() => {
        if (color?.length) {
            console.log("Color is ", color)
        }
    }, [color])

    return (
        <div style={{marginLeft: 10}} className="App">
            <button style={{backgroundColor: color, marginLeft: 5}} onClick={onChangeColorPress}>Change Color
            </button>
            <p>No of times button Pressed : {ref.current}</p>
            <GoBackButton/>
        </div>
    )
}


export default State