import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./select.css";
import Option from "./option";

// API endpoint
const api_url = "https://bootcamp-2022.devtest.ge/api/skills";

// Callback function for map
function displaySkills(skill) {
    return <Option
        key={skill.id}
        innerText={skill.title}
    />
}

function Select() {
    const [arrayOfSkills, setArray] = useState([]);
    const [option, setOption] = useState("SKILLS")

    function handleChange(event) {
        const selectedElem = event.target;
        const selectedElemText = selectedElem.options[selectedElem.selectedIndex].text;
        setOption(selectedElemText);
    }

    // fetching data from api
    (function callAPI() {
        fetch(api_url)
            .then(response => response.json())
            .then((arrayOfData) => {
                // Setting useState hook to retrieved data after await finishes
                setArray(arrayOfData);
            });
    })();

    return (<select value={option} onChange={handleChange} name="Skills" id="select-id">
        <option disabled selected hidden>SKILLS</option>
        {arrayOfSkills.map(displaySkills)}
    </select>)
}

export default Select;