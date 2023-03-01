import {decrement} from "../Redux/actions";
import React from 'react';
import {useDispatch} from "react-redux";

function Decrement() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={()=>decrement(2,dispatch)}>Decrease</button>
        </div>
    );
}

export default Decrement



