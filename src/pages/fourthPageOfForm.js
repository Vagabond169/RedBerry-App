import React from "react";
import "./thirdAndFourthPageOfForm.css"

function FourthPageOfForm() {
    return (<div className="form-page fourth-page thirdAndFourth-page">

        <div className="radio-questions">
            <p>Would you attend Devtalks and maybe also organize your own?</p>
            <div className="radio-inputs">
                <div>
                    <input type="radio" name="devtalk" id="dev-yes" value="Yes" />
                    <label htmlFor="dev-yes">Yes</label>
                </div>
                <div>
                    <input type="radio" name="devtalk" id="dev-no" value="No" />
                    <label htmlFor="dev-no">No</label>
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