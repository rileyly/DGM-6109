"use strict"

document.getElementById("action").addEventListener("click", processForm);

let xInput, yInput, choice, originChoice;

/* set up the drawing canvas */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

function processForm() {
    /* Get data from the form */
    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);

    choice = document.getElementById("wing").value;
    originChoice = document.getElementById("origin").checked;

    drawing.selectAll('svg>*').remove(); // This line selects everything that has been drawn in the SVG and deletes it all
    rooster(drawing, xInput, yInput, originChoice, choice);
}


