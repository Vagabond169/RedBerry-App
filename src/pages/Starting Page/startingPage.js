"use strict"

import React from "react";
import ReactDOM from "react-dom";
import App from "../../App";
import "./startingPage.css";
import Header from "../../components/header";
import Button from "../../form components/button";

function StartingPage(props) {
    function startBtnHandler() {
        ReactDOM.render(<App />, document.getElementById("root"));
    }

    return (<div className="first-last-pages starting-page-container">
        <div className="starting-page-div">
            <Header
                textContent={"Welcome Rocketeer !"}
            />
            <div className="box starting-page-box">
                <Button classNameProp="orange-btn" onAction={startBtnHandler} textContent="Start Questionnaire" />
                <Button classNameProp="white-underline-btn" textContent="Submitted Applications" />
                <img src={require("./rocketman.png")} alt="Rocketman" />
            </div>
        </div>
    </div>)
}

export default StartingPage;