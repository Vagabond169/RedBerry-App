import React from "react";

function Form(props) {
    return (<div className="form-div">
        <form id="my-form" action="" method="POST">
            {props.children}
        </form>
    </div>)
}

export default Form;