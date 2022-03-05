import React from "react";

function Button(props) {
    return <button onClick={props.onAdd} className={props.classNameProp}>{props.textContent}</button>
}

export default Button;