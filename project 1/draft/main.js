"use strict"

/*  Variable that enables you to "talk to" your SVG drawing canvas. */
let drawing = d3.select("#canvas")
    .append("svg")
    .attr("width", 500)
    .attr("height", 500);

/* Draw a border that matches the maximum drawing area for this assignment.
    Assign the border to a variable so that:
        (1) We know what the purpose of the shape is, and
        (2) We will have the ability to change it later (in a future assignment)
*/
let border = drawing.append("rect")
    .attr("width", 500)
    .attr("height", 500)
    .attr("fill", "none")
    .attr("stroke", "red");

/* Write your code for Project 1 beneath this comment */

/* Draw a rooster */

/* Draw rooster tail - one shape; r=213 g=174 b=69 -> #D5AE45 */
let roosterTail = drawing.append("polyline")
    .attr("points", closedPolygon(
        50, 100, // upper left 
        100, 100, // upper right
        125, 150, // lower right
        75, 150, // lower center
        50, 205, // bottom left
        25, 150)) // lower left 
    .attr("fill", "#D5AE45"); 

/* Same tail but multiple shapes...

let roosterTailBase = drawing.append("polyline")
    .attr("points", closedPolygon(
        100, 100, // top
        125, 150, // right
        75, 150)) // left
    .attr("fill", "#D5AE45"); 

let roosterTailMid = drawing.append("polyline")
    .attr("points", closedPolygon(
        100, 100,  // top right
        75, 150,  // bottom
        50, 100)) // top left
    .attr("fill", "#D5AE45"); 

let roosterTailRear = drawing.append("polyline")
    .attr("points", closedPolygon(
        50, 100, // top
        75, 150, // right
        25, 150)) // left
    .attr("fill", "#D5AE45"); 

let roosterTailTip = drawing.append("polyline")
    .attr("points", closedPolygon(
        75, 150, // right
        25, 150, // left
        50, 150)) // bottom
    .attr("fill", "#D5AE45"); 
*/

/* Draw rooster body r=250 g=150 b=91 -> #FA965B*/ 
let roosterBody= drawing.append("polyline")
    .attr("points", closedPolygon(
        75, 150, // upper left
        225, 150, // upper right
        175, 200, // lower right
        100, 200)) // lower left
    .attr("fill", "#FA965B"); 


/* Draw rooster wing r=117 g=252 b=253 -> #75FCFD*/
let roosterWing= drawing.append("polyline")
    .attr("points", closedPolygon(
        150, 150, // upper point
        175, 175,  // right point
        100, 200)) // lower left point 
    .attr("fill", "#75FCFD"); 


/* Draw rooster legs */
let roosterLegRear = drawing.append("line")
    .attr("x1", 125) 
    .attr("y1", 195) // top
    .attr("x2", 125) 
    .attr("y2", 250) // bottom
    .attr("stroke", "black")
    .attr("stroke-width", 1);

let roosterLegFront = drawing.append("line")
    .attr("x1", 150)
    .attr("y1", 200) // top
    .attr("x2", 150)
    .attr("y2", 250) // bottom
    .attr("stroke", "black")
    .attr("stroke-width", 1);


/* Draw rooster neck #FA965B */
let roosterNeck = drawing.append("polyline")
    .attr("points", closedPolygon(
        200, 100, // top
        225, 150, // right
        175, 150)) // left
    .attr("fill", "#FA965B"); 


/* Draw rooster head #FA965B*/
let roosterHead = drawing.append("polyline")
    .attr("points", closedPolygon(
        190, 70, // top
        250, 100, // right
        190, 120)) // left
    .attr("fill", "#FA965B"); 


/* Draw rooster...hat feather thing */
let roosterHat = drawing.append("polyline")
    .attr("points", closedPolygon(
        210, 30, // top
        225, 90, // right
        165, 55)) // left
    .attr("fill", "#D5AE45"); 


/* Draw rooster eye */
let roosteEye = drawing.append("ellipse")
    .attr("cx", 205)
    .attr("cy", 90)
    .attr("rx", 5)
    .attr("ry", 5)
    .attr("fill", "black");
