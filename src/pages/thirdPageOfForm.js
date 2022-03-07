import React from "react";
import "./thirdAndFourthPageOfForm.css"

function ThirdPageOfForm() {
    return (<div className="form-page thirdAndFourth-page">

        <div className="radio-questions">
            <p>how would you prefer to work?</p>
            <div className="radio-inputs">
                <div>
                    <input type="radio" name="work" id="office" value="From Sairme Office" />
                    <label for="office">From Sairme Office</label>
                </div>
                <div>
                    <input type="radio" name="work" id="home" value="From Home" />
                    <label for="home">From Home</label>
                </div>
                <div>
                    <input type="radio" name="work" id="hyprid" value="Hybrid" />
                    <label for="hyprid">Hybrid</label>
                </div>
            </div>
        </div>

        <div className="radio-questions">
            <p>Did you contact covid 19? :(</p>
            <div className="radio-inputs">
                <div>
                    <input type="radio" name="contact" id="yes" value="Yes" />
                    <label for="yes">Yes</label>
                </div>
                <div>
                    <input type="radio" name="contact" id="no" value="No" />
                    <label for="no">No</label>
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
                    <label for="vac-yes">Yes</label>
                </div>
                <div>
                    <input type="radio" name="vaccinate" id="vac-no" value="No" />
                    <label for="vac-no">No</label>
                </div>
            </div>
        </div>

        <p>When did you get your last covid vaccine?</p>
        <input className="date-input" type="date"></input>
    </div>)
}

export default ThirdPageOfForm;