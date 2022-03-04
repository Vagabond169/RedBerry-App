import React from "react";
import ReactDOM from "react-dom";
import "./containerLeft.css";

function ContainerLeft(props) {
    return (<div className="container container-left">
        {props.children}
    </div>)
}

export default ContainerLeft;