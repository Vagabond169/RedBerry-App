import React from "react";
import "./navigation.css";
import NavigationItem from "./navigationItem";
import { navigationItemAttributes } from "../data/navigationItemAttributes";

function Navigation(props) {
    function clickHandler(id) {
        props.onClick(id);
    }

    return (<div className="navigation">
        <ul>
            {navigationItemAttributes.map(({ classname, textContent }, index) => {
                return <NavigationItem
                    key={index}
                    id={index}
                    class={classname}
                    textContent={textContent}
                    onNext={clickHandler}
                />
            })}
        </ul>
    </div>)
}

export default Navigation;


{/* <li>
                <span onClick={clickHandler} className="arrows">{String.fromCharCode(60)}</span>
            </li>
            <li>
                <span onClick={clickHandler} className="btns"></span>
            </li>
            <li>
                <span onClick={clickHandler} className="btns"></span>
            </li>
            <li>
                <span onClick={clickHandler} className="btns"></span>
            </li>
            <li>
                <span onClick={clickHandler} className="btns"></span>
            </li>
            <li>
                <span onClick={clickHandler} className="btns"></span>
            </li>
            <li>
                <span onClick={clickHandler} className="arrows">{String.fromCharCode(62)}</span>
            </li> */}