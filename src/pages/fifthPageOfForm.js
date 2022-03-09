import React from "react";
import ReactDOM from "react-dom";
import Button from "../form components/button";
import "./fifthPageOfForm.css";
import ThankYouPage from "./thankYouPage";

function FifthPageOfForm(props) {
    // function submitHandler() {
    //     ReactDOM.render(<ThankYouPage />, document.getElementById("root"));
    // }

    //Calling function from this component instead of from button component
    function GobackBtnHandler() {
        props.onGoBack(4);
    }

    return (<div className="main-container first-last-pages">
        <div className="box">
            <Button classNameProp="orange-btn" /*onSubmit={submitHandler}*/ typeProp={"submit"} formProp={"my-form"} textContent="Submit" />
            <Button classNameProp="white-underline-btn" onAction={GobackBtnHandler} textContent="go back" />
        </div>
    </div>)
}

export default FifthPageOfForm;