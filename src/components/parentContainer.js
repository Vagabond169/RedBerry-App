import React from "react";
import ReactDOM from "react-dom";
import ContainerLeft from "./containerLeft";
import ContainerRight from "./containerRight";
import "./parentContainer.css";
import MiddleContainerRight from "./middleContainerRight";
import MiddleContainerLeft from "./middleContainerLeft";

// Form page 1 header texts
const leftHeader1 = "Hey, Rocketeer, what are your coordinates";
const rightHeader1 = "Redberry Origins";

// Form page 1 paragraph text
const paragraph1 = `You watch “What? Where? When?” Yeah. Our founders used to play it.
 That’s where they got a question about a famous American author and screenwriter Ray Bradbury.
  Albeit, our CEO Gaga Darsalia forgot the exact name and he answered Ray Redberry. And at that moment,
   a name for a yet to be born company was inspired - Redberry 😇`


function ParentContainer() {
    return (<div className="parent-container">
        <ContainerLeft>
            <MiddleContainerLeft Htext={leftHeader1} />
        </ContainerLeft>
        <ContainerRight>
            <MiddleContainerRight Htext={rightHeader1} Ptext={paragraph1} />
        </ContainerRight>
    </div>)
}

export default ParentContainer;