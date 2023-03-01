import {useEffect, useState} from "react";
import GoBackButton from "./GoBackButton";

const Memo = () => {
    const [value1, setValue1] = useState(5)

    useEffect(() => {
        console.log("Current Value is: ", value1)
    }, [value1])
    const calculateValue = (value) => {

        console.log("Calculating... value for: ", value);
        for (let i = 0; i < 100; i++) {
            value = parseInt(value) + 1;
        }
        return value;

    }
    const sum = calculateValue(value1)
    // const sum = useMemo(() => calculateValue(value1), [value1])
    return (
        <div>

            <p>
                Current value: {value1}
            </p>

            <button onClick={() => {
                setValue1(3)
            }}>
                Change value for value1
            </button>


            <button onClick={() => {
                setValue1(5)
            }}>
                Change value for value1 again
            </button>
            <p>Sum of value : {sum}</p>
            <GoBackButton/>
        </div>
    )
}
export default Memo