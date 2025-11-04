"use strict"

/* Configuration variables: drawing */

let svgWidth = 800; //increased canvas size for 'big' data spread
let svgHeight = 599;
let margin = 40;
let maxSteps = 18500; // config values to experiment with x and y scaling 
let maxPhotos = 85;
let maxFam = 30;

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
    .attr("stroke-width", 3) // Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute/stroke-width
    .attr("width", svgWidth)
    .attr("height", svgHeight);

/* Draw margin border. */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("x", margin)
    .attr("y", margin)
    .attr("width", svgWidth - margin * 2)
    .attr("height", svgHeight - margin * 2);


let dataset =
    [{ steps: 4696, photos: 3, precip: 0 },
    { steps: 4072, photos: 0, precip: 0 },
    { steps: 2573, photos: 2, precip: 0 },
    { steps: 13723, photos: 6, precip: 0 },
    { steps: 17673, photos: 2, precip: 0 },
    { steps: 51, photos: 0, precip: 0 },
    { steps: 8933, photos: 24, precip: 0 },
    { steps: 8140, photos: 31, precip: 0 },
    { steps: 17758, photos: 46, precip: 0 },
    { steps: 9353, photos: 44, precip: 0 },
    { steps: 12235, photos: 41, precip: 0 },
    { steps: 7333, photos: 3, precip: 1 },
    { steps: 9068, photos: 15, precip: 1 },
    { steps: 3656, photos: 3, precip: 3 },
    { steps: 48, photos: 0, precip: 3.6 },
    { steps: 15831, photos: 81, precip: 4 },
    { steps: 2838, photos: 0, precip: 5.2 },
    { steps: 8, photos: 0, precip: 7 },
    { steps: 18, photos: 0, precip: 9.7 },
    { steps: 9455, photos: 7, precip: 12 },
    { steps: 6368, photos: 7, precip: 13 },
    { steps: 544, photos: 0, precip: 13.5 },
    { steps: 1751, photos: 3, precip: 15 },
    { steps: 4053, photos: 14, precip: 16.1 },
    { steps: 7094, photos: 9, precip: 17 },
    { steps: 6202, photos: 4, precip: 18 },
    { steps: 9043, photos: 52, precip: 23 },
    { steps: 7935, photos: 1, precip: 29 }
    ];

/* Scaling data */
let xScale = d3.scaleLinear()
    .domain([0, maxSteps])
    .range([margin, svgWidth - margin]);

let yScale = d3.scaleLinear()
    .domain([0, maxPhotos])
    .range([svgHeight - margin, margin]);

//scaling the radius according to 
let rScale = d3.scaleLinear()
    .domain([0, maxFam])
    .range([4, 17]);

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

// reduced point size for visibility, reduced opacity to find overlapping values 
circles.attr("r", function (value) {
    return rScale(value.precip);
})
    .attr("opacity", .5)
    .attr("cx", function (value) {
        return xScale(value.steps);
    })
    .attr("cy", function (value) {
        return yScale(value.photos);
    })
    .attr("stroke", "black")
    .attr("opacity", .7)
    .attr("fill", "grey");

/**** label the axes ****/
let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (margin / 3))
    .attr("text-anchor", "middle")
    .attr("font-family", "monospace") // Reference: https://developer.mozilla.org/en-US/docs/Web/SVG/Reference/Attribute
    .text("Number of steps walked per day");

let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", margin / 1.6)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .attr("font-family", "monospace")
    .text("Number of photos taken per day")
    .attr("transform", "rotate(-90)");


/**** label key graph coordinates ****/
// label origin
let originLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .attr("font-family", "monospace")
    .text("0");

// label max steps
let xMaxLabel = svg.append("text")
    .attr("x", xScale(maxSteps))
    .attr("y", svgHeight - (margin / 2))
    .attr("text-anchor", "middle")
    .attr("font-family", "monospace")
    .text(String(maxSteps));

// label max photos
let yMaxLabel = svg.append("text")
    .attr("x", margin)
    .attr("y", yScale(maxPhotos))
    .attr("text-anchor", "end")
    .attr("alignment-baseline", "middle")
    .attr("font-family", "monospace")
    .text(String(maxPhotos));

/*** Create key ***/
/* min mm */
svg.append("circle")
    .attr("r", rScale(0))
    .attr("cx", 61)
    .attr("cy", 60)
    .attr("opacity", .7)
    .attr("stroke", "black")
    .attr("fill", "grey");

svg.append("text")
    .text("0.0 mm rain")
    .attr("alignment-baseline", "middle")
    .attr("font-family", "monospace")
    .attr("x", 90)
    .attr("y", 65);

/* avg mm */
svg.append("circle")
    .attr("r", rScale(6.8))
    .attr("cx", 61)
    .attr("cy", 85)
    .attr("opacity", .7)
    .attr("stroke", "black")
    .attr("fill", "grey");

svg.append("text")
    .text("6.8 mm - Average")
    .attr("alignment-baseline", "middle")
    .attr("font-family", "monospace")
    .attr("x", 90)
    .attr("y", 91);

/* max mm */
svg.append("circle")
    .attr("r", rScale(29))
    .attr("cx", 62)
    .attr("cy", 123)
    .attr("opacity", .7)
    .attr("stroke", "black")
    .attr("fill", "grey");

svg.append("text")
    .text("29.0 mm rain")
    .attr("alignment-baseline", "middle")
    .attr("font-family", "monospace")
    .attr("x", 90)
    .attr("y", 118);
