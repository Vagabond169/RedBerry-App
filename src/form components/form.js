import React from "react";

function Form(props) {
    return (<form id="my-form" action="" method="POST">
        {props.children}
    </form>)
}

export default Form;