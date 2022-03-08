import React from "react";

function Button(props) {
    return <button
        onClick={props.onAction}
        className={props.classNameProp}
        type={props.typeProp}
        form={props.formProp}
    >{props.textContent}</button>
}

export default Button;