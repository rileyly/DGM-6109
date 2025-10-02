"use strict"

document.getElementById("action").addEventListener("click", processForm);

let xInput, yInput, choice;

function processForm() {
    /* Get data from the form */
    xInput = Number(document.getElementById("xInput").value);
    yInput = Number(document.getElementById("yInput").value);

    choice = document.getElementById("wing").value;
    drawing.selectAll('svg>*').remove(); // This line selects everything that has been drawn in the SVG and deletes it all
    drawImage();
}

/* set up the drawing canvas */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");


function drawImage() {

    /* I chose the points where the tail meets the body; originally 
    was going to pick roughly the center of the rooster body 
    but since the xy coordinates were identical (at 150, 150) 
    I figured that would be boring. Now 125, 150. */

    let bodyX = xInput;
    let bodyY = yInput;


    /* DRAW A ROOSTER */

    /* Draw rooster tail - one shape; r=213 g=174 b=69 -> #D5AE45 */
    let roosterTail = drawing.append("polyline")
        .attr("points", closedPolygon(
            bodyX - 75, bodyY - 50, // upper left 
            bodyX - 25, bodyY - 50, // upper right
            bodyX, bodyY, // lower right
            bodyX - 50, bodyY, // lower center
            bodyX - 75, bodyY + 55, // bottom left
            bodyX - 100, bodyY)) // lower left 
        .attr("fill", "#D5AE45");

    /* Draw rooster body r=250 g=150 b=91 -> #FA965B*/
    let roosterBody = drawing.append("polyline")
        .attr("points", closedPolygon(
            bodyX - 50, bodyY, // upper left
            bodyX + 100, bodyY, // upper right
            bodyX + 50, bodyY + 50, // lower right
            bodyX - 25, bodyY + 50)) // lower left
        .attr("fill", "#FA965B");


    /* Reference to self re: wing and legs code from before I turned them into flappables.

    Draw rooster wing r=117 g=252 b=253 -> #75FCFD
    let roosterWing = drawing.append("polyline")
        .attr("points", closedPolygon(
            bodyX + 25, bodyY, // upper point
            bodyX + 50, bodyY + 25,  // right point
            bodyX - 25, bodyY + 50)) // lower left point 
        .attr("fill", "#75FCFD");

    Draw rooster legs
    let roosterLegRear = drawing.append("line")
        .attr("x1", bodyX)
        .attr("y1", bodyY + 45) // top
        .attr("x2", bodyX)
        .attr("y2", bodyY + 100) // bottom
        .attr("stroke", "black")
        .attr("stroke-width", 1);

    let roosterLegFront = drawing.append("line")
        .attr("x1", bodyX + 25)
        .attr("y1", bodyY + 50) // top
        .attr("x2", bodyX + 25)
        .attr("y2", bodyY + 100) // bottom
        .attr("stroke", "black")
        .attr("stroke-width", 1); 
    */


    /* Draw rooster neck #FA965B */
    let roosterNeck = drawing.append("polyline")
        .attr("points", closedPolygon(
            bodyX + 75, bodyY - 50, // top
            bodyX + 100, bodyY, // right
            bodyX + 50, bodyY)) // left
        .attr("fill", "#FA965B");


    /* Draw rooster head #FA965B*/
    let roosterHead = drawing.append("polyline")
        .attr("points", closedPolygon(
            bodyX + 65, bodyY - 80, // top
            bodyX + 125, bodyY - 50, // right
            bodyX + 65, bodyY - 30)) // left
        .attr("fill", "#FA965B");


    /* Draw rooster...hat feather thing */
    let roosterHat = drawing.append("polyline")
        .attr("points", closedPolygon(
            bodyX + 85, bodyY - 120, // top
            bodyX + 100, bodyY - 60, // right
            bodyX + 40, bodyY - 95)) // left
        .attr("fill", "#D5AE45");


    /* Draw rooster eye */
    let roosteEye = drawing.append("ellipse")
        .attr("cx", bodyX + 80)
        .attr("cy", bodyY - 60)
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", "black");

    /* Make interactive, flappable rooster */
    if (choice == "flap") {
        // flap wing
        drawing.append("polyline")
            .attr("points", closedPolygon(
                bodyX + 25, bodyY, // upper point
                bodyX, bodyY - 30,  // right point
                bodyX - 25, bodyY + 50)) // lower left point 
            .attr("fill", "#03C9C9");

        // jump back leg
        drawing.append("line")
            .attr("x1", bodyX)
            .attr("y1", bodyY + 45) // top
            .attr("x2", bodyX - 15)
            .attr("y2", bodyY + 90) // bottom
            .attr("stroke", "black")
            .attr("stroke-width", 1);

        // jump front leg
        drawing.append("line")
            .attr("x1", bodyX + 25)
            .attr("y1", bodyY + 50) // top
            .attr("x2", bodyX + 40)
            .attr("y2", bodyY + 90) // bottom
            .attr("stroke", "black")
            .attr("stroke-width", 1);

    } else {
        //wing normal
        drawing.append("polyline")
            .attr("points", closedPolygon(
                bodyX + 25, bodyY, // upper point
                bodyX + 50, bodyY + 25,  // right point
                bodyX - 25, bodyY + 50)) // lower left point 
            .attr("fill", "#75FCFD");

        //back leg normal
        drawing.append("line")
            .attr("x1", bodyX)
            .attr("y1", bodyY + 45) // top
            .attr("x2", bodyX)
            .attr("y2", bodyY + 100) // bottom
            .attr("stroke", "black")
            .attr("stroke-width", 1);

        //front leg normal
        drawing.append("line")
            .attr("x1", bodyX + 25)
            .attr("y1", bodyY + 50) // top
            .attr("x2", bodyX + 25)
            .attr("y2", bodyY + 100) // bottom
            .attr("stroke", "black")
            .attr("stroke-width", 1);

    }

}
