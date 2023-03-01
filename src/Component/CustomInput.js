const CustomInput = (props) => {
    return (
        <div style={{marginBottom: 5}}>
            <input
                onChange={props.onChange}
                type={props.type}
                placeholder={props.placeholder}
                value={props.value}
                label = {props.label}
            />
            {!!props.error && (
            <p style={{color: "red", fontSize: 10}}>{props.error}</p>
            )}
        </div>
    )
}

export default CustomInput