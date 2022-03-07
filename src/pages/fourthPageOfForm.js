import React from "react";
import "./thirdAndFourthPageOfForm.css"

function FourthPageOfForm() {
    return (<div className="form-page fourth-page thirdAndFourth-page">

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

        <div className="text-box">
            <p>What would you speak about at Devtalk?</p>
            <textarea rows="5" name="" placeholder="I would..."></textarea>
        </div>
        <div className="text-box">
            <p>Tell us something special</p>
            <textarea rows="3" name="" placeholder="I..."></textarea>
        </div>
    </div>)
}

export default FourthPageOfForm;