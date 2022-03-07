import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import StartingPage from "../src/pages/Starting Page/startingPage"

function handler() {
    ReactDOM.render(<App />, document.getElementById("root"));
}

ReactDOM.render(<StartingPage onClick={handler} />, document.getElementById("root"));

