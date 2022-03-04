import React from "react";
import ReactDOM from "react-dom";
import "./middleContainerRight.css";
import Header from "./header";
import Paragraph from "./paragraph";

function MiddleContainerRight(props) {
    return (<div className="container-middle">
        <Header textContent={props.Htext} />
        <Paragraph textContent={props.Ptext} />
    </div>)
}

export default MiddleContainerRight;