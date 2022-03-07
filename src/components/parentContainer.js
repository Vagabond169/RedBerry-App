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
import { inputAttributes1 } from "../data/inputAttributes";
import MiddleContainerLeft from "../components/middleContainerLeft";
import FormContainer from "../form components/formContainer";
import Form from "../form components/form";
import ThirdPageOfForm from "../pages/thirdPageOfForm";
import FourthPageOfForm from "../pages/fourthPageOfForm";

// Rendering with map and filter
// const forms = [<FirstPageOfForm key={0} />,
// <SecondPageOfForm key={1} />]

function ParentContainer() {
    const [page, setPage] = useState(0);

    function handlerFunction(id) {
        const formPages = document.querySelectorAll(".form-page");
        setPage(prev => {
            if (prev > 0) { // If same page is clicked here toggle removes class and below adds again
                formPages[prev - 1].classList.toggle("active");
            }
            return id
        });
        // console.log(formPages.forEach(page => console.log(page.classList.toggle("active"))));
        const activePage = formPages[id - 1];
        activePage.classList.toggle("active");
    }

    // Rendering with switch case
    // let formPage;

    // switch (page) {
    //     case 1: {
    //         formPage = <FirstPageOfForm />;
    //         break;
    //     }
    //     case 2: {
    //         formPage = <SecondPageOfForm />
    //         break;
    //     }
    //     default: {
    //         break;
    //     }
    // }

    return (<div className="parent-container">
        <ContainerLeft>
            <MiddleContainerLeft >
                {textData.map((textObj, index) => {
                    return <Header
                        key={index}
                        textContent={textObj.hTextL}
                    />
                }).filter((_, index) => {
                    return index + 1 === page
                })}
                <FormContainer>
                    <Form>
                        {/* {forms.filter((_, index) => {
                            return index + 1 === page
                        })} */}
                        <FirstPageOfForm />
                        <SecondPageOfForm />
                        <ThirdPageOfForm />
                        <FourthPageOfForm />
                    </Form>
                </FormContainer>
            </MiddleContainerLeft>
            <Navigation onClick={handlerFunction} />
        </ContainerLeft>
        <ContainerRight>
            {textData.map((textObj, index) => {
                return <AboutSide key={index}>
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