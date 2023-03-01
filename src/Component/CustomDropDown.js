import React from 'react';
import Select from "react-select";

const CustomDropDown = (props)=> {
    return (
        <div>
            <Select
            onChange={props.onChange}
            options={props.options}
            />
            {!!props.error && (
                <p style={{color: "red", fontSize: 10}}>{props.error}</p>
            )}
        </div>
    );
}

export default CustomDropDown;