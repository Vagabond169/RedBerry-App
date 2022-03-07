import React from "react";
import Button from "../form components/button";
import "./fifthPageOfForm.css";

function FifthPageOfForm(props) {
    //Calling function from this component instead of from button component
    function GobackBtnHandler() {
        props.onGoBack(4);
    }

    return (<div className="main-container first-last-pages">
        <div className="box">
            <Button classNameProp="orange-btn" textContent="Submit" />
            <Button classNameProp="white-underline-btn" onAction={GobackBtnHandler} textContent="go back" />
        </div>
    </div>)
}

export default FifthPageOfForm;