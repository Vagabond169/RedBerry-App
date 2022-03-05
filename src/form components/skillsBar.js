import React from "react";

function SkillsBar(props) {
    function handleCLick(event) {
        event.preventDefault();
        props.onDelete(props.id)
    }

    return (<div className="skill-container">
        <span>{props.language}</span>
        <span>{props.experience}</span>
        <button onClick={handleCLick} type="button" className="skill-container-btn">-</button>
    </div>)
}

export default SkillsBar;