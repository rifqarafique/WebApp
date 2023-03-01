import {React, memo, useState, useCallback} from 'react';


const UseCallbackUsage = (props)=>{
    const [count, setCount] = useState(0)
    const [name, setName] = useState("Rifqa")
    const myInlineFunction = () => {

    }

    const myInlineFunctionCallBack = useCallback(myInlineFunction, [])
    console.log("I AM BEING RENDERED")

    return(
        <div>
            <p> hello i am simple component</p>
            <p>Name is: {props?.name}</p>
        </div>
    )
}


export default UseCallbackUsage