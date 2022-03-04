import React from "react";
import ReactDOM from "react-dom";
import "./header.css";


function Header(props) {
    return <h1 className="header">{props.textContent}</h1>
}

export default Header;
