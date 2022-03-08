"use strict"

import React from "react";
import "./startingPage.css";
import Header from "../../components/header";
import Button from "../../form components/button";

function StartingPage(props) {
    function startBtnHandler() {
        props.onClick();
    }

    return (<div className="first-last-pages starting-page-container">
        <Header
            textContent={"Welcome Rocketeer !"}
        />
        <div className="box starting-page-box">
            <Button classNameProp="orange-btn" onAction={startBtnHandler} textContent="Start Questionnaire" />
            <Button classNameProp="white-underline-btn" textContent="Submitted Applications" />
            <img src={require("./rocketman.png")} alt="Rocketman" />
        </div>

    </div>)
}

export default StartingPage;