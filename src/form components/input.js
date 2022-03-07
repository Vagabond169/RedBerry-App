import React, { useState } from "react";
import { inputAttributes1 } from "../data/inputAttributes";

function Input(props) {
    const [inputValue, setValue] = useState({
        fName: "",
        lName: "",
        eMail: "",
        tel: ""
    });

    function handleChange(event) {
        const { value, name, id } = event.target;
        setValue(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }

    return (<input className="input-class"
        onChange={handleChange}
        value={inputValue[props.name]}
        type={props.type}
        placeholder={props.placeholder}
        required={props.require}
        id={props.id}
        name={props.name}
    />)
}

export default Input;
