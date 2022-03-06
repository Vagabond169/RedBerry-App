import React from "react";



function NavigationItem(props) {
    function navItemClickHandler(event) {
        event.preventDefault();
        props.onNext(props.id);
    }

    return (<li>
        <button className={props.class} onClick={navItemClickHandler}>{props.textContent}</button>
    </li>)
}

export default NavigationItem;