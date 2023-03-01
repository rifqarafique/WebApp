import {increment} from "../Redux/actions";
import React from 'react';
import {useDispatch} from "react-redux";

function Increment() {
    const dispatch = useDispatch()
    return (
        <div>
            <button onClick={() => (increment(2,dispatch))}>Increase</button>
        </div>
    );
}

export default Increment;



