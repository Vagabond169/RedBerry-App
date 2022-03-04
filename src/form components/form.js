import React from "react";
import ReactDOM from "react-dom";

function Form(props) {
    return (<form>
        {props.children}
    </form>)
}

export default Form;