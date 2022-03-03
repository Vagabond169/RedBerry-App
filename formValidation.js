"use strict";

// inputs
const fName = document.querySelector(".f-Name");
const lName = document.querySelector(".l-Name");
const email = document.querySelector(".e-Mail");
const tel = document.querySelector(".Tel");


// displaying error message
const errorMesaage = function (elem) {
    const newP = document.createElement("P");
    let newContent;

    if (elem === fName || elem === lName) {
        newContent = "Enter at least two letters"
    } else if (elem === email) {
        newContent = "Enter valid email"
    } else if (elem === tel) {
        newContent = "Enter valid telephone number"
    }

    newP.textContent = newContent;
    newP.classList.add('hidden');
    const currentDiv = document.querySelector(`.input-div-${elem.className}`);
    currentDiv.appendChild(newP);
}


// regex
const AtLeast2Letters = /^\D*[a-z]{2,}\D*$/gi
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const telGeoRegex = /^\+995\s?5\d{2}(\s|-)?\d{2,3}(\s|-)?\d{2,3}(\s|-)?\d{2,3}/;


// Validation function
const validation = function () {
    // fName
    if (!AtLeast2Letters.test(fName.value)) {
        errorMesaage(fName);
    }
    // lName
    if (!AtLeast2Letters.test(fName.value)) {
        errorMesaage(lName);
    }
    // eMail
    if (!emailRegex.test(email.value)) {
        errorMesaage(email);
    }
    // Tel
    if (tel.value.trim() !== "" && !telGeoRegex.test(tel.value)) {
        errorMesaage(tel);
    }
}


// called this function explicitly to see errors
validation();




