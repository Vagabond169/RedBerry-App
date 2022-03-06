import React from "react";
import MiddleContainerLeft from "../components/middleContainerLeft";
import FormContainer from "../form components/formContainer";
import Input from "../form components/input";
import { inputAttributes1 } from "../data/inputAttributes";

function FirstPageOfForm(props) {
    return (<MiddleContainerLeft textContent={props.Htext}>
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
    )
}

export default FirstPageOfForm;