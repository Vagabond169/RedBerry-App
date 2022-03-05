import React, { useState } from "react";
import ContainerLeft from "./containerLeft";
import ContainerRight from "./containerRight";
import "./parentContainer.css";
import MiddleContainerRight from "./middleContainerRight";
import MiddleContainerLeft from "./middleContainerLeft";
import FormContainer from "../form components/formContainer";
import Input from "../form components/input";
import Select from "../form components/select";
import Button from "../form components/button";
import SkillsBar from "../form components/skillsBar";
import { inputAttributes1 } from "../data/inputAttributes";

// Form page 1 header texts
const leftHeader1 = "Hey, Rocketeer, what are your coordinates";
const rightHeader1 = "Redberry Origins";

// Form page 2 header texts
const leftHeader2 = "Tell us about your skills";
const rightHeader2 = "A bit about our battles";


// Form page 1 paragraph text
const paragraph1 = `You watch “What? Where? When?” Yeah. Our founders used to play it.
 That’s where they got a question about a famous American author and screenwriter Ray Bradbury.
  Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment,
   a name for a yet to be born company was inspired - Redberry 😇`

// Form page 2 paragraph text
const paragraph2 = `As we said, Redberry has been on the field for quite some time now,
and we have touched and embraced a variety of programming languages, technologies, philosophies,
 and frameworks. We are battle-tested in PHP Laravel Stack with Vue.js, refined in React,
  and allies with Serverside technologies like Docker and Kubernetes, and now we have set foot in the web3
   industry.`

function ParentContainer() {

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

    return (<div className="parent-container">
        {/* First page of form */}
        <ContainerLeft>
            <MiddleContainerLeft Htext={leftHeader1}>
                <FormContainer>
                    {inputAttributes1.map((item) => {
                        return <Input
                            key={item.id}
                            type={item.type}
                            placeholder={item.placeholder}
                            require={item.require}
                            name={item.name}
                        />
                    })}
                </FormContainer>
            </MiddleContainerLeft>
        </ContainerLeft>
        <ContainerRight>
            <MiddleContainerRight Htext={rightHeader1} Ptext={paragraph1} />
        </ContainerRight>

        {/* Second page of form */}
        {/* <ContainerLeft>
            <MiddleContainerLeft Htext={leftHeader2}>
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
            </MiddleContainerLeft>
        </ContainerLeft>
        <ContainerRight>
            <MiddleContainerRight Htext={rightHeader2} Ptext={paragraph2} />
        </ContainerRight> */}

    </div>)
}

export default ParentContainer;