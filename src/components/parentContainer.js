import React, { useState } from "react";
import ContainerLeft from "./containerLeft";
import ContainerRight from "./containerRight";
import "./parentContainer.css";
import Navigation from "./navigation";
import FirstPageOfForm from "../pages/firstPageOfForm";
import SecondPageOfForm from "../pages/secondPageOfForm";
import AboutSide from "../pages/aboutSide";
import { textData } from "../data/textData"
import Header from "../components/header";
import Paragraph from "../components/paragraph";


const forms = [<FirstPageOfForm Htext={textData[0].hTextL} />,
<SecondPageOfForm Htext={textData[1].hTextL} />]

function ParentContainer() {
    const [page, setPage] = useState(0);

    function handlerFunction(id) {
        setPage(id);
    }

    return (<div className="parent-container">
        <ContainerLeft>
            {forms.filter((_, index) => {
                return index + 1 === page
            })}
            <Navigation onClick={handlerFunction} />
        </ContainerLeft>
        <ContainerRight>
            {textData.map(textObj => {
                return <AboutSide>
                    <Header textContent={textObj.hTextR} />
                    <Paragraph textContent={textObj.pText} />
                </AboutSide>
            }).filter((_, index) => {
                return index + 1 === page
            })}
        </ContainerRight>
    </div>)
}

export default ParentContainer;