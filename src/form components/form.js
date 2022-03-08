import React from "react";

function Form(props) {
    return (<form id="my-form" action="https://www.youtube.com/" method="GET">
        {props.children}
    </form>)
}

export default Form;