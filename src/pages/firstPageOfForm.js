import React from "react";
import Input from "../form components/input";
import { inputAttributes1 } from "../data/inputAttributes";

function FirstPageOfForm(props) {
    return (<div className="form-page">

        {inputAttributes1.map((item) => {
            return <Input
                key={item.id}
                type={item.type}
                placeholder={item.placeholder}
                require={item.require}
                name={item.name}
            />
        })}
    </div >
    )
}

export default FirstPageOfForm;