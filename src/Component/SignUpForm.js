import React, {useRef} from 'react';
import {signUpInitialValues, getInputInitialValues, getInputScheme} from "../Helpers/DataHelper";
import CustomInput from "./CustomInput";
import {Formik} from "formik";
import {useNavigate} from "react-router-dom";
import * as yup from 'yup'
import CustomDropDown from "./CustomDropDown";
const SignUpForm = () => {
    const formikRef = useRef(null)
    const navigate = useNavigate()
    const enterFName = (event) => {
        formikRef.current.setFieldValue("first_name", event.target.value)
    }
    const onSubmitPress = ()=>{
        navigate("/Congratulation")
    }

    return (
        <div>
            <Formik
                innerRef={formikRef}
                initialValues={getInputInitialValues()}
                validationSchema={yup.object().shape(
                    getInputScheme()
                )}
                onSubmit={onSubmitPress}>
                {(formikProps) => (
                    <div>
                        {console.log("formik Props", formikProps)}
                        {signUpInitialValues.map((value, index) => {
                            if (value.type === "text" || value.type === "datetime-local" || value.type === "checkbox") {
                                // console.log("value : ", value)
                                return (
                                    <CustomInput
                                        onChange={(event) => {
                                            if (value.type === "checkbox") {
                                                formikRef.current.setFieldValue(value?.key, event.target.checked)

                                            } else {
                                                formikRef.current.setFieldValue(value?.key, event.target.value)

                                            }
                                        }
                                        }
                                        value={formikProps?.values[value?.key]}
                                        placeholder={value.placeholder}
                                        type={value.type}
                                        error={formikProps.errors[value?.key]}
                                    />
                                )
                            } else if (value.type === "dropdown") {
                                return (
                                    <CustomDropDown
                                        onChange={(event) => {
                                            console.log("event", event)
                                            formikRef.current.setFieldValue(value?.key, event)

                                        }
                                        }
                                        error={formikProps.errors[value?.key]}
                                        options={value.option}/>
                                )
                            }
                        })}
                        <button onClick={formikProps.handleSubmit}>Submit</button>
                    </div>
                )
                }
            </Formik>
        </div>
    )
        ;
}

export default SignUpForm;