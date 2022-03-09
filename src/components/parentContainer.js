import React, { useState } from "react";
import ReactDOM from "react-dom";
import ContainerLeft from "./containerLeft";
import ContainerRight from "./containerRight";
import "./parentContainer.css";
import Navigation from "./navigation";
import FirstPageOfForm from "../pages/firstPageOfForm";
import SecondPageOfForm from "../pages/secondPageOfForm";
import AboutSide from "./aboutSide";
import { textData } from "../data/textData"
import Header from "../components/header";
import Paragraph from "../components/paragraph";
import MiddleContainerLeft from "../components/middleContainerLeft";
import FormContainer from "../form components/formContainer";
import Form from "../form components/form";
import ThirdPageOfForm from "../pages/thirdPageOfForm";
import FourthPageOfForm from "../pages/fourthPageOfForm";
import FifthPageOfForm from "../pages/fifthPageOfForm";
import ThankYouPage from "../pages/thankYouPage";
import StartingPage from "../pages/Starting Page/startingPage";

function ParentContainer() {
    const [page, setPage] = useState(1);

    function handlerFunction(id) {
        const mainPage = document.querySelectorAll(".main-container")
        const formPages = document.querySelectorAll(".form-page");

        if (id === 0) {
            ReactDOM.render(<StartingPage />, document.getElementById("root"));
        }

        if (id === 4) {
            document.querySelector(`#btn-${id}`).style.opacity = 1;
        }

        //Checking if user is on form page or submit page
        if (id < 5) {
            //If user returns from submit page to form page submit page will not be displayed and from will
            if (mainPage[1].classList.contains("active-main-container")) {
                mainPage[0].classList.toggle("active-main-container");
                mainPage[1].classList.toggle("active-main-container");
            }
            setPage(prev => {
                if (prev > 0) { // If same page is clicked here toggle removes class and below adds again
                    formPages[prev - 1].classList.toggle("active");
                }
                return id;
            });
            const activePage = formPages[id - 1];
            activePage.classList.toggle("active");
            //If user goes to submit page form page won't be displayed and submit will
        } else {
            mainPage[0].classList.toggle("active-main-container");
            mainPage[1].classList.toggle("active-main-container");
        }
    }

    return (<div className="parent-container acactive-main-container">
        <div className="main-container active-main-container">
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
        </div>
        <FifthPageOfForm onGoBack={handlerFunction} />
        {/* <ThankYouPage /> */}
    </div>)
}

export default ParentContainer;