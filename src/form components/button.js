import React from "react";

function Button(props) {
    return <button onClick={props.onAction} className={props.classNameProp}>{props.textContent}</button>
}

export default Button;