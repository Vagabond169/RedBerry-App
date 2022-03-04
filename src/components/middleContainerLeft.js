import React from "react";
import ReactDOM from "react-dom";
import "./middleContainerLeft.css";
import Header from "./header";
import FormContainer from "../form components/formContainer";
import Navigation from "./navigation";

function MiddleContainerLeft(props) {
    return (<div className="container-middle container-middle-left">
        <Header textContent={props.Htext} />
        <FormContainer />
        <Navigation />
    </div>)
}

export default MiddleContainerLeft;