import React from "react";

function Paragraph(props) {
    return (<div className="paragraph-div">
        <p className="paragraph">{props.textContent}</p>
    </div>)
}

export default Paragraph;