import React from "react";
import "./formContainer.css";
import Form from "./form";

function FormContainer(props) {

    return (<div className="form-container">
        <Form>
            {props.children}
            {/* <button type="submit">click</button> */}
        </Form>
    </div>)
}

export default FormContainer;