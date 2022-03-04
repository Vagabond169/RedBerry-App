import React from "react";
import ReactDOM from "react-dom";
import "./paragraph.css";

function Paragraph(props) {
    return <p className="paragraph">{props.textContent}</p>
}

export default Paragraph;