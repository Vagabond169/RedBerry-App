import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./input.css";

function Input(props) {
    const [value, setValue] = useState("");

    function handleChange(event) {
        setValue(event.target.value)
    }

    return (<input className="input-class"
        onChange={handleChange}
        value={value}
        type={props.type}
        placeholder={props.placeholder}
        required={props.require}
        id={props.id}
        name={props.name}
    />)
}

export default Input;
