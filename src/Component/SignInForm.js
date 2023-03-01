import React, {useState} from 'react';
import {LOGO_ICON} from "../Images";
import CustomInput from "./CustomInput";
import Select from "react-select";

const SignInForm = () => {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")


    const CountryOptions = [
        {value: "dubai", label: "dubai"},
        {value: "Pakistan", label: "Pakistan"},
        {value: "Canada", label: "Canada"},
        {value: "USA", label: "USA"},
        {value: "Oman", label: "Oman"},
        {value: "Qatar", label: "Qatar"}
    ]
    const CityOptions = [
        {value: "dubai", label: "DIP"},
        {value: "Pakistan", label: "Lahore"},
        {value: "Canada", label: "Toronto"},
        {value: "USA", label: "New York"},
        {value: "Oman", label: "Muscat"},
        {value: "Qatar", label: "Doha"}
    ]
    const handleFirstName = (event) => {
        const value = event.target.value;
        setFirstName(value);
    };
console.log("FirstName", firstName)
    const handleLastName = (event) => {
        const value = event.target.value;
        setLastName(value);
    };
    const handleEmail = (event) => {
        const value = event.target.value;
        setEmail(value);
    };
    const handleAddress = (event) => {
        const value = event.target.value;
        setAddress(value)
    }
    return (
        <form>
            <div style={{justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column"}}>
                <h1>Sign In Form</h1>
                <img src={LOGO_ICON}/>
                <CustomInput
                    onChange={handleFirstName}
                    value={firstName}
                    placeholder="First Name"
                    type={"text"}/>
                <CustomInput
                    onChange={handleLastName}
                    value={lastName}
                    placeholder="Last Name"
                    type={"text"}/>
                <CustomInput
                    onChange={handleEmail}
                    value={email}
                    placeholder="Email"
                    type={"text"}/>
                <CustomInput
                    onChange={handleAddress}
                    value={address}
                    placeholder="Address"
                    type={"text"}/>
                <CustomInput type={"datetime-local"}/>
                <Select options={CountryOptions}/>
                <Select options={CityOptions}/>
                <p>user activate</p>
                <CustomInput type={"checkbox"}/>
            </div>
        </form>
    );
}

export default SignInForm;