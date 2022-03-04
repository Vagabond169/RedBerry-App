import React from "react";
import ReactDOM from "react-dom";
import "./navigation.css";

function Navigation() {
    return (<div className="navigation">
        <ul>
            <li>
                <button className="arrows">{String.fromCharCode(60)}</button>
            </li>
            <li>
                <button className="btns"></button>
            </li>
            <li>
                <button className="btns"></button>
            </li>
            <li>
                <button className="btns"></button>
            </li>
            <li>
                <button className="btns"></button>
            </li>
            <li>
                <button className="btns"></button>
            </li>
            <li>
                <button className="arrows">{String.fromCharCode(62)}</button>
            </li>
        </ul>
    </div>)
}

export default Navigation;