import React, { useState } from "react";
import MiddleContainerLeft from "../components/middleContainerLeft";
import FormContainer from "../form components/formContainer";
import Input from "../form components/input";
import Select from "../form components/select";
import Button from "../form components/button";
import SkillsBar from "../form components/skillsBar";

function SecondPageOfForm(porps) {
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


    return (<MiddleContainerLeft textContent={porps.Htext}>
        <FormContainer>
            <Select />
            <Input
                type="text"
                placeholder="Experience Duration in Years"
                require=""
                id="exp-id"
                name="experience"
            />
            <Button
                onAdd={addSkillHandler}
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
        </FormContainer>
    </MiddleContainerLeft>)
}

export default SecondPageOfForm;