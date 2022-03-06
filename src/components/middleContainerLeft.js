import React from "react";
import Header from "./header";


function MiddleContainerLeft(props) {
    return (<div className="container-middle container-middle-left">
        <Header textContent={props.textContent} />
        {props.children}
    </div>)
}

export default MiddleContainerLeft;