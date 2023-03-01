import * as yup from 'yup'

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
export const signUpInitialValues = [
    {
        key: 'first_name',
        placeholder: "First Name",
        label: "FName",
        value: "",
        type: "text",
        required: true
    },
    {
        key: 'last_name',
        placeholder: "Last Name",
        label: "LName",
        value: "",
        type: "text",
        required: true
    },
    {
        key: 'email',
        placeholder: "Email",
        label: "Email",
        // value:"",
        type: "text",
        required: false
    },
    {
        key: 'address',
        placeholder: "Address",
        label: "Address",
        value: "",
        type: "text",
        required: true
    },
    {
        key: 'date',
        placeholder: "Date",
        label: "DOB",
        value: "",
        type: "datetime-local",
        required: true
    },
    {
        key: 'userActivate',
        label: "User Activate",
        value: false,
        type: "checkbox",
        required: true
    },
    {
        key: 'country',
        placeholder: "Select Country",
        label: "Country",
        value: {},
        type: "dropdown",
        required: true,
        option: CountryOptions
    },
    {
        key: 'city',
        placeholder: "Select City",
        label: "City",
        value: {},
        type: "dropdown",
        required: true,
        option: CityOptions
    },
]

const getInputValidationSchema = (type) => {
    switch (type) {
        case "text":
            return yup.string().required("Required")

        case  "checkbox":
            return yup.bool().oneOf([true], 'Field must be checked')

        case "dropdown":
            return yup.object().required("Required")

    }
}
    export const getInputScheme = () => {
        let schema = {}
        signUpInitialValues.map((field, index) => {
                getInputValidationSchema(field.type)
                schema[field.key] = getInputValidationSchema(field.type)
            }
        )
        return schema
    }
    const setInitialValues = (type) => {
        switch (type) {
            case "text":
                return ""
            case "datetime-local":
                return null
            case "checkbox":
                return false
            case "dropdown":
                return null
        }
    }
    export const getInputInitialValues = () => {
        const initialValues = {}
        signUpInitialValues.map((field, index) => {
            setInitialValues(field.type)
            // debugger
            initialValues[field.key] = setInitialValues(field.type)
        })
        return initialValues


    }


