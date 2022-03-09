import React from "react";
import "./thirdAndFourthPageOfForm.css"

function ThirdPageOfForm() {
    return (<div className="form-page thirdAndFourth-page">

        <div className="radio-questions first-radio-question-div">
            <p>how would you prefer to work?</p>
            <div className="radio-inputs">
                <div>
                    <input type="radio" name="work" id="office" value="From Sairme Office" />
                    <label htmlFor="office">From Sairme Office</label>
                </div>
                <div>
                    <input type="radio" name="work" id="home" value="From Home" />
                    <label htmlFor="home">From Home</label>
                </div>
                <div>
                    <input type="radio" name="work" id="hyprid" value="Hybrid" />
                    <label htmlFor="hyprid">Hybrid</label>
                </div>
            </div>
        </div>

        <div className="radio-questions">
            <p>Did you contact covid 19? :(</p>
            <div className="radio-inputs">
                <div>
                    <input type="radio" name="contact" id="yes" value="Yes" />
                    <label htmlFor="yes">Yes</label>
                </div>
                <div>
                    <input type="radio" name="contact" id="no" value="No" />
                    <label htmlFor="no">No</label>
                </div>
            </div>
        </div>

        <p>When?</p>
        <input className="date-input" type="date"></input>

        <div className="radio-questions">
            <p>Have you been vaccinated?</p>
            <div className="radio-inputs">
                <div>
                    <input type="radio" name="vaccinate" id="vac-yes" value="Yes" />
                    <label htmlFor="vac-yes">Yes</label>
                </div>
                <div>
                    <input type="radio" name="vaccinate" id="vac-no" value="No" />
                    <label htmlFor="vac-no">No</label>
                </div>
            </div>
        </div>

        <p>When did you get your last covid vaccine?</p>
        <input className="date-input" type="date"></input>
    </div>)
}

export default ThirdPageOfForm;