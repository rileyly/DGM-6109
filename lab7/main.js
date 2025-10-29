"use strict"

/* Configuration variables: drawing */

let svgWidth = 800; //increased canvas size for 'big' data spread
let svgHeight = 600; 
let margin = 25;
let maxSteps = 18500; // config values to experimeny with x and y scaling 
let maxPhotos = 85; 

/* Resize div to match width of visualization. */
d3.select("#container")
    .style("width", String(svgWidth) + "px");

/* Create drawing canvas */
let svg = d3.select("#canvas")
    .append("svg")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw canvas border */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("stroke-dasharray", "5")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);

let dataset = [{steps:6202, photos:4}, {steps:6368, photos:7}, 
    {steps:18, photos:0}, {steps:48, photos:0},
    {steps:4053, photos:14}, {steps:2838, photos:0}, 
    {steps:544, photos:0}, {steps:4696, photos:3},
    {steps:9353, photos:44}, {steps:12235, photos:41},
     {steps:4072, photos:0}, {steps:2573, photos:2},
    {steps:8933, photos:24}, {steps:8140, photos:31}, 
    {steps:9455, photos:7}, {steps:1751, photos:3},
    {steps:8, photos:0}, {steps:3656, photos:3}, 
    {steps:51, photos:0}, {steps:7094, photos:9}, 
    {steps:17758, photos:46},{steps:9068, photos:15}, 
    {steps:13723, photos:6}, {steps:7935, photos:1}, 
    {steps:9043, photos:52}, {steps:7333, photos:3}, 
    {steps:17673, photos:2}, {steps:15831, photos:81}];

/* Scaling data */
let xScale = d3.scaleLinear()
    .domain([0, maxSteps])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, maxPhotos])
    .range([svgHeight - margin, margin]);

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

// reduced point size for visibility, reduced opacity to find overlapping values 
circles.attr("r", 5)
    .attr("opacity", .5)
    .attr("cx", function (value) {
        return xScale(value.steps);
    })
    .attr("cy", function (value) {
        return yScale(value.photos); 
    })

/**** label the axes ****/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("Number of steps walked per day");

let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 2)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .text("Number of photos taken per day")
    .attr("transform", "rotate(-90)");


/**** label key graph coordinates ****/
// label origin
let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .text("0,0");

// label max steps
let xMaxLabel = svg.append("text")
    .attr("x", xScale(maxSteps))
    .attr("y", svgHeight-(margin/2))
    .attr("text-anchor", "middle")
    .text(String(maxSteps));

// label max photos
let yMaxLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", yScale(maxPhotos))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .text(String(maxPhotos));

