import React, { useState } from "react";
import "./firstPageOfForm.css"

const AtLeast2Letters = /^\D*[a-z]{2,}\D*$/gi
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const telGeoRegex = /^\+995\s?5\d{2}(\s|-)?\d{2,3}(\s|-)?\d{2,3}(\s|-)?\d{2,3}/;


function FirstPageOfForm(props) {
    const [inputValue, setValue] = useState({
        fName: "",
        lName: "",
        eMail: "",
        tel: ""
    });
    const [enteredValueIsValid, setEnteredValueIsValid] = useState({
        fName: true,
        lName: true,
        eMail: true,
        tel: true
    });

    function onBlurHandler(event) {
        const { value, name } = event.target;
        switch (name) {
            case "fName":
                if (AtLeast2Letters.test(value)) {
                    setEnteredValueIsValid(prev => {
                        return {
                            ...prev,
                            [name]: true
                        }
                    })
                } else {
                    setEnteredValueIsValid(prev => {
                        return {
                            ...prev,
                            [name]: false
                        }
                    })
                }
                break;
            case "lName":
                if (AtLeast2Letters.test(value)) {
                    setEnteredValueIsValid(prev => {
                        return {
                            ...prev,
                            [name]: true
                        }
                    })
                } else {
                    setEnteredValueIsValid(prev => {
                        return {
                            ...prev,
                            [name]: false
                        }
                    })
                }
                break;
            case "eMail":
                if (emailRegex.test(value)) {
                    setEnteredValueIsValid(prev => {
                        return {
                            ...prev,
                            [name]: true
                        }
                    })
                } else {
                    setEnteredValueIsValid(prev => {
                        return {
                            ...prev,
                            [name]: false
                        }
                    })
                }
                break;
            case "tel":
                if (telGeoRegex.test(value)) {
                    setEnteredValueIsValid(prev => {
                        return {
                            ...prev,
                            [name]: true
                        }
                    })
                } else {
                    setEnteredValueIsValid(prev => {
                        return {
                            ...prev,
                            [name]: false
                        }
                    })
                }
                break;
            default:
                break;
        }
    }

    function handlerFunction(event) {
        const { value, name } = event.target;
        setValue(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    }


    return (<div className="form-page first-page active">


        <div className="input-div">
            <input onChange={handlerFunction} value={inputValue.fName} onBlur={onBlurHandler} type="text" name="fName" placeholder="First Name" className="input-class" />
            <p style={!enteredValueIsValid.fName ? { visibility: "visible" } : { visibility: "hidden" }}
            >Enter at least two letters</p>
        </div>
        <div className="input-div">
            <input onChange={handlerFunction} value={inputValue.lName} onBlur={onBlurHandler} type="text" name="lName" placeholder="Last Name" className="input-class" />
            <p style={!enteredValueIsValid.lName ? { visibility: "visible" } : { visibility: "hidden" }}
            >Enter at least two letters</p>
        </div>
        <div className="input-div">
            <input onChange={handlerFunction} value={inputValue.eMail} onBlur={onBlurHandler} type="email" name="eMail" placeholder="E Mail" className="input-class" />
            <p style={!enteredValueIsValid.eMail ? { visibility: "visible" } : { visibility: "hidden" }}
            >Enter valid email</p>
        </div>
        <div className="input-div">
            <input onChange={handlerFunction} value={inputValue.tel} onBlur={onBlurHandler} type="tel" name="tel" placeholder="+ 995 5__ __ __ __" className="input-class" />
            <p style={!enteredValueIsValid.tel ? { visibility: "visible" } : { visibility: "hidden" }}
            >Enter valid telephone number</p>
        </div>
    </div >
    )
}

export default FirstPageOfForm;