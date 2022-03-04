import React from "react";
import ReactDOM from "react-dom";
import "./input.css";

function Input(props) {
    return (<input className="input-class"
        type={props.type}
        placeholder={props.placeholder}
        required={props.require}
    />)
}

export default Input;
