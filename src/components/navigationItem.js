import React from "react";

function NavigationItem(props) {
    return (<li className={props.class}>
        <span>{props.textContent}</span>
    </li>)
}

export default NavigationItem;