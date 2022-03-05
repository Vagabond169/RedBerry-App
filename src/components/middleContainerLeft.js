import React from "react";
import ReactDOM from "react-dom";
import "./middleContainerLeft.css";
import Header from "./header";
import Navigation from "./navigation";

function handlerFunction() {

}

function MiddleContainerLeft(props) {
    return (<div className="container-middle container-middle-left">
        <Header textContent={props.Htext} />
        {props.children}
        <Navigation onClick={handlerFunction} />
    </div>)
}

export default MiddleContainerLeft;