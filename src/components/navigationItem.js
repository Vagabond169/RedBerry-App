import { click } from "@testing-library/user-event/dist/click";
import React from "react";

let page = 1;

function NavigationItem(props) {
    function navItemClickHandler(event) {
        event.preventDefault();

        // syncing arrow btn locations to page btn locations
        if (event.target.classList.contains("btns") && props.id !== page) {
            page = props.id;
        }

        // page navigation conditions
        if (event.target.id === "btn-6") {
            page += 1;
            document.querySelector(`#btn-${page}`).style.opacity = 1;
            props.onNext(page);
        } else if (event.target.id === "btn-0") {
            if (page === 1) {
                props.onNext(1);
            } else {
                if (page === 5) {
                    page = 4;
                }
                page -= 1;
                document.querySelector(`#btn-${page}`).style.opacity = 1;
                props.onNext(page);
            }
        } else {
            document.querySelector(`#btn-${props.id}`).style.opacity = 1;
            props.onNext(props.id);
        }
    }

    return (<li>
        <button id={`btn-${props.id}`} className={props.class} onClick={navItemClickHandler}>{props.textContent}</button>
    </li>)
}

export default NavigationItem;