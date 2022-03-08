import React from "react";

function Input(props) {

    return (<input className="input-class"
        onChange={() => props.onChange}
        // value={props.value}
        type={props.type}
        placeholder={props.placeholder}
        required={props.require}
        id={props.id}
        name={props.name}
    />)
}

export default Input;
