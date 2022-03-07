import React, { useState } from "react";
import Input from "../form components/input";
import Select from "../form components/select";
import Button from "../form components/button";
import SkillsBar from "../form components/skillsBar";
import "./secondPageOfForm.css";

function SecondPageOfForm(props) {
    const [arrayOfSkills, updateSkills] = useState([]);

    // Adding new skill in arrayOfSkills on click
    function addSkillHandler(event) {
        // Getting elements with dom
        const select = document.getElementById("select-id");
        const expInput = document.getElementById("exp-id");

        event.preventDefault();

        updateSkills(prev => [...prev, {
            language: select.value,
            experience: expInput.value
        }]);
    }

    // Delleting specific skill bar
    function deleteHandler(id) {
        updateSkills(prev => {
            return prev.filter((skill, index) => {
                return index !== id;
            })
        })
    }

    return (<div className="form-page second-page">
        <Select />
        <Input
            type="text"
            placeholder="Experience Duration in Years"
            require=""
            id="exp-id"
            name="experience"
        />
        <Button
            onAction={addSkillHandler}
            classNameProp="add-skill-btn"
            textContent="Add Programming Language"
        />
        {arrayOfSkills.map((skill, index) => {
            return <SkillsBar
                key={index}
                id={index}
                onDelete={deleteHandler}
                language={skill.language}
                experience={skill.experience}
            />
        })}
    </div>)
}

export default SecondPageOfForm;