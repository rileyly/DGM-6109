"use strict"

/*** CANVAS SETUP***/
/* Set canvas size */
let svgWidth = 1000
let svgHeight = 700

/* Set margin dimensions */
let margin = {
    top: 160,
    right: 50,
    bottom: 70,
    left: 60
}

/* Create canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight)

svg.append("rect")
    .attr("width", svgWidth)
    .attr("height", svgHeight)
    .attr("fill", "none")
    .attr("stroke", "#582630")
    .attr("opacity", .9)
    .attr("stroke-width", 6)

/** Draw L-shaped margin to slighly extend beyond tick axis **/
/* Draw Y axis */
svg.append("line")
.attr("x1", margin.left)                //vertical Y axis
.attr("y1", margin.top-15)              // offset from top of svg, but shrink top margin height so y axis line extend a bit beyond max value
.attr("x2", margin.left)                //vertical Y axis
.attr("y2", svgHeight-margin.bottom)    //offset from bottom of SVG
.attr("stroke-width", 1.5)
.attr("stroke", "#663D29")

/* Draw X axis */
svg.append("line")
.attr("x1", margin.left) 
.attr("y1", svgHeight-margin.bottom)    // horizontal x axis
.attr("x2", svgWidth-margin.right+15) 
.attr("y2", svgHeight-margin.bottom)    //horizontal x axis
.attr("stroke-width", 1.5)
.attr("stroke", "#663D29")


/*** CREATE GLOBAL VARIABLES ***/

let data,       // my data
    xAxis,      // x axis SVG group 
    yAxis,      // y axis SVG group
    xScale,     // x data scale
    yScale,     // y data scale
    rScale,     // circle size scale
    maxFam,     // highest familiarity level
    maxPhotos,  // highest photo count
    maxSteps,   // highest step count
    avgAvgFam,  // average mean daily familiarity level
    legend,     // group of legend elements
    legendX,    // horizontal position of legend
    legendY     // vertical position of legend

/* Passes JSON through buildVisualization function into global variable data */
(async function () {
    data = await d3.json("data.json").then(buildVisualization)
    console.log("here")
})(); 

/**** function buildVisualization(data, viz) *****
 * 
 *  DESCRIPTION
 *  Takes JSON data and passes through organize (sort) and scale, to draw visualization. 
 * 
 *  PARAMETERS
 *  data: JSON data
 * 
 *  RETURNS
 *  Imported JSON data into global variable:data. 
 * 
*****/
function buildVisualization(data) {
    let renderData = organizeData(data);
    buildScales(renderData);
    drawVisualization(renderData, svg);
    console.log(renderData);
    return data;
} 

/**** function buildScales(data) *****
 * 
 *  DESCRIPTION
 *  Uses x, y, radius global variables to initialize respective scales* needed for 
 *  to fit/layout data within margins and create x and y axes. 
 * 
 *  *Scales:
 *  xScale - steps walked 
 *  yScale - photos taken
 *  rScale - average daily familiarity 
 * 
 *  PARAMETERS
 *  Data: Takes organized (sorted) data 
 * 
 *  RETURNS
 *  None
 * 
*****/
function buildScales(data) {

/* https://observablehq.com/@shanfan/d3-scale-cheatsheet */

    xScale = d3.scalePow().exponent(.7)                     // move a bit right to declutter cluster around 0s
        .domain([0, 20000])                                 // 0 to expected max value of steps
        .range([margin.left, svgWidth - margin.right])      // constrain data to chart width

    yScale = d3.scaleSqrt()
        .domain([-.015, 100])                               // -.015 to slightly lift 0 values off the bottom axis for visibility, 0 to expected max value of photos
        .range([svgHeight - margin.bottom, margin.top])     // constrain data to chart height

    rScale = d3.scaleLog()                                  // better visually differentiate between familiarity levels
        .domain([4, 1])                                     // higher familiarity should be a smaller circle, just so there's not a zillion giant bubbles along the bottom of the chart
        .range([5,30])                                      // arbitrary except to create reasonable sized/visible circles
        
}
/**** organizeData(data) *****
 * 
 *  DESCRIPTION
 *  Sorts location familiarity ascending (from 1 [low] to 4 [high]) 
 *  to ensure smallest circles appear on top.
 * 
 *  PARAMETERS
 *  Takes imported JSON data
 * 
 *  RETURNS
 *  Data sorted from low to high location familiarty. 
 * 
*****/
function organizeData(data) {
    return data.sort(function (a, b) {
            if (a.avgFam>= b.avgFam) {
                return 1 // if a larger than/equal to b -> ba
            } return -1  // if a smaller than b -> ab 
    });
 }

/**** function drawVisualization(data, viz) *****
 * 
 *  DESCRIPTION
 *  Creates a scatterplot of photos vs step count with point size
 *  scaled according to location familiarity. 
 * 
 *  Draws axes (photo count [y], steps walked [y]) with labels and intervals. 
 * 
 *  Draws radius-scaled circles on x and y axes. 
 * 
 *  Draws chart legend explaining circle colour (boolean precipitation) 
 *  and size (average daily location familiarity).
 * 
 *  PARAMETERS
 *  Takes previously processed data and svg
 * 
 *  RETURNS
 *  None
 * 
*****/
function drawVisualization(data, drawing) {

    maxFam = d3.max(data, function (value) { return value.avgFam }); 
    maxPhotos = d3.max(data, function (value) { return value.photos });
    maxSteps = d3.max(data, function (value) { return value.steps });
    avgAvgFam = d3.mean(data, function (value) {return value.avgFam});

    let circles = drawing.selectAll("circle")
        .data(data)
        .join("circle");

    circles.attr("r", function (value) {
        return rScale(value.avgFam);
    })
        .attr("opacity", .75)
        .attr("cx", function (value) {
            return xScale(value.steps);
        })
        .attr("cy", function (value) {
            return yScale(value.photos);
        })
        .attr("stroke", "#272932")
        .attr("fill", "gray")
        .attr("fill", function (value) {
            if (value.precipMM) {
                return "#8ECAE6";
            }
            return "#548C2F"
    });

    /** DRAW AXIS LABELS **/
    /*https://using-d3js.com/04_03_axis.html 
    https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Element/
    https://d3js.org/d3-axisg*/

    /* Create X Axis */
    xAxis = d3.axisBottom(xScale)               // horizontal axis with ticks on bottom of line

    drawing.append("g")                         // group svg shapes together 
    .attr("transform", "translate(0, 630)")     // move to correct location on canvas; x=0, y=svgheight - margin.bottom 
    .call(xAxis)                                // send to xScale

    /* Create Y Axis */
    yAxis=  d3.axisRight(yScale)                // Y axis for photos

    drawing.append("g")
        .attr("transform","translate(60, 0)")   // use transform to position axis on canvas; x=margin.left, y=o
        .call(yAxis)

    let xAxisLabel = svg.append("text")
        .attr("x", svgWidth / 2)
        .attr("y", svgHeight - (margin.bottom / 3))
        .attr("text-anchor", "middle")          // center relative to x coord (as opposed to start)
        .attr("fill", "#582630")
        .attr("opacity", .9)
        .text("Steps Walked");

    let yAxisLabel = svg.append("text")
        .attr("x", -svgHeight / 2)
        .attr("y", margin.left / 1.8)
        .attr("text-anchor", "middle")
        .attr("fill", "#582630")
        .attr("opacity", .9)
        .text("Photos Taken")
        .attr("transform", "rotate(-90)");
    

    /* DRAW LEGEND */
    legend = drawing.append ("g");
    legendX = margin.left
    legendY = 26

    /*** Draw legend separator ***/
    legend.append("rect")
        .attr("fill", "none")
        .attr("stroke", "#582630")
        .attr("opacity", .9)
        .attr("stroke-width", 2)
        .attr("x", 0+legendX)
        .attr("y", 0+legendY)
        .attr("width", 325)
        .attr("height", 95);


    /*** LEGEND: Colour (**/
    /* Title */
    legend.append("text")
        .text("Colour Legend")
        .attr("x", 10+legendX)
        .attr("y", 20+legendY)
        .attr("fill","#582630")
        .attr("opacity", .9)
        .attr("text-anchor", "start")
        .attr("font-weight", "bold")
        .attr("font-size", "12px"); 

    /* Rain */
    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("opacity", .7)
        .attr("fill", "#8ECAE6")
        .attr("x", 20+legendX)
        .attr("y", 30+legendY);

    legend.append("text")
        .text("Rain")
        .attr("x", 50+legendX)
        .attr("y", 47+legendY)
        .attr("fill", "#582630")
        .attr("font-size", "11px"); 

    /* No Rain */
    legend.append("rect")
        .attr("width", 20)
        .attr("height", 20)
        .attr("opacity", .7)
        .attr("fill", "#548C2F")
        .attr("x", 20+legendX)
        .attr("y", 60+legendY);

    legend.append("text")
        .text("No Rain")
        .attr("x", 50+legendX)
        .attr("y", 77+legendY)
        .attr("fill", "#272932")
        .attr("font-size", "11px");

    /*** LEGEND: Scale ***/

    /* Title */
   legend.append("text")
        .text("Is this a new location for me?")
        .attr("x", 210+legendX)
        .attr("y", 20+legendY)
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("fill", "#582630")
        .attr("opacity", .9)
        .attr("font-size", "12px");

    /* high familiarity*/
    legend.append("circle")
        .attr("r", rScale(4))
        .attr("cx", 155+legendX)
        .attr("cy", 40+legendY)
        .attr("stroke", "#492C1D")
        .attr("opacity", .7)
        .attr("fill", "none");

    legend.append("text")
        .text("Not at all")
        .attr("fill", "#492C1D")
        .attr("font-size", "11px")
        .attr("x", 172+legendX)
        .attr("y", 45+legendY);

    /* average familiarity */
    legend.append("circle")
        .attr("r", rScale(avgAvgFam))
        .attr("cx", 155+legendX)
        .attr("cy", 70+legendY)
        .attr("stroke", "#492C1D")
        .attr("opacity", .7)
        .attr("fill", "none");

    legend.append("text")
        .text("Somewhat")
        .attr("font-size", "11px")
        .attr("fill", "#492C1D")
        .attr("x", 172+legendX)
        .attr("y", 74+legendY);
}