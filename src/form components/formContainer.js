import React from "react";
import ReactDOM from "react-dom";
import "./formContainer.css";
import Form from "./form";
import Input from "./input";
import { inputAttributes1 } from "../data/inputAttributes";

function FormContainer() {

    return (<div className="form-container">
        <Form>
            {inputAttributes1.map((item) => {
                return <Input
                    key={item.id}
                    type={item.type}
                    placeholder={item.placeholder}
                    require={item.require}
                />
            })}
            <button type="submit">click</button>
        </Form>
    </div>)
}

export default FormContainer;