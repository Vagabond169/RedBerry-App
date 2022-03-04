import React from "react";
import ReactDOM from "react-dom";
import "./containerRight.css";

function ContainerRight(props) {
    return (<div className="container container-right">
        {props.children}
    </div>)
}

export default ContainerRight;