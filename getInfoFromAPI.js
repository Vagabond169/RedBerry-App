'use strict';

const arr = [];

const api_url = "https://bootcamp-2022.devtest.ge/api/skills";

async function getSkills() {
    const response = await fetch(api_url);
    const data = await response.json();

    dsiplaySkills(data);
}

// display skills as options in select
const select = document.querySelector("#skills");
const skillBtn = document.querySelector(".skills-btn");
const exp = document.querySelector(".exp");
const skillContainer = document.querySelector(".skill-container");

function dsiplaySkills(data) {
    data.forEach(({ title, id }) => {
        const option = `
        <option value="">${title}</option> 
        `;

        select.insertAdjacentHTML('beforeend', option);
    });
}

getSkills();

// Adding skill bars on click
const displaySkillBar = function () {
    const option = select.options[select.selectedIndex].textContent
    const skillBar = `
    <div class="skill-bar">
        <span>${option}</span>
        <span>${exp.value}</span>
        <button class="skill-bar-btn"><span>_</span></button>
    </div>
    `
    arr.push({
        lang: option,
        years: exp.value
    });

    console.log(arr);

    skillContainer.insertAdjacentHTML('beforeend', skillBar);
}

skillBtn.addEventListener('click', displaySkillBar);


// Removing skill bars on click





