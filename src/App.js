import React from "react";
import ParentContainer from "./components/parentContainer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <ParentContainer />
    </Router>
  );
}

export default App;