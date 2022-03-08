"use strict"

import React from "react";
import "./containerRight.css";

function ContainerRight(props) {
    return (<div className="container container-right">
        {props.children}
    </div>)
}

export default ContainerRight;