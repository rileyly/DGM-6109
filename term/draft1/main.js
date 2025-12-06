"use strict"

let dataset = [{
    date: "2025-09-25",
    steps: 6202, // number of steps I "walked" per apple watch
    photos: 4, // number of photos I took
    precipMM: 18, // precipitation (any) in mm
    tempC: { hiTemp: 16, loTemp: 10 },
    locCount: 2, // number of discrete locations I visited this day
    locations: [{ locName: "campus", locFamiliar: 3 }, { locName: "burrito shop", locFamiliar: 1 }], // list of locations visited and how familiar i am with each
    maxDistKM: 3.8, // max distance traveled from home, measured as the crow flies
    busBool: true, // did i ride at least one transit bus 
    skytrainBool: true, // did i take skytrain
    schoolday: true,
    park: false,
    avgFam: 2
},
{
    date: "2025-09-26",
    steps: 6368,
    photos: 7,
    precipMM: 3,
    tempC: { hiTemp: 17, loTemp: 12 },
    locCount: 2,
    locations: [{ locName: "main street", locFamiliar: 2 }, { locName: "dollarama", locFamiliar: 1 }],
    maxDistKM: .96,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: true,
    avgFam: 1.5
},
{
    date: "2025-09-27",
    steps: 18,
    photos: 0,
    precipMM: 19,
    tempC: { hiTemp: 15, loTemp: 11 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-09-28",
    steps: 48,
    photos: 0,
    precipMM: 0,
    tempC: { hiTemp: 20, loTemp: 13 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-09-29",
    steps: 4053,
    photos: 14,
    precipMM: 48,
    tempC: { hiTemp: 16, loTemp: 12 },
    locCount: 2,
    locations: [{ locName: "coffee/pastry shop", locFamiliar: 1 }, { locName: "burrito shop", locFamiliar: 2 }],
    maxDistKM: 1.79,
    busBool: true,
    skytrainBool: true,
    schoolday: false,
    park: false,
    shoppingCorr: true,
    avgFam: 1.5
},
{
    date: "2025-09-30",
    steps: 2838,
    photos: 0,
    precipMM: 15,
    tempC: { hiTemp: 18, loTemp: 11 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-01",
    steps: 544,
    photos: 0,
    precipMM: 40.4,
    tempC: { hiTemp: 15, loTemp: 11 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-02",
    steps: 4696,
    photos: 3,
    precipMM: 0,
    tempC: { hiTemp: 15, loTemp: 10 },
    locCount: 0,
    locations: [{ locName: "campus", locFamiliar: 3 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 3
},
{
    date: "2025-10-03",
    steps: 9353,
    photos: 44,
    precipMM: 0,
    tempC: { hiTemp: 16, loTemp: 9 },
    energy: { energyAM: 7, energyPM: 9 }, // my subjective sense of physical tiredness/energy
    locCount: 4,
    locations: [{ locName: "mall", locFamiliar: 1 }, { locName: "main street", locFamiliar: 2 }, { locName: "coffee shop", locFamiliar: 1 }, { locName: "dollarama", locFamiliar: 2 }],
    maxDistKM: 1.09,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 1.5
},
{
    date: "2025-10-04",
    steps: 12235,
    photos: 41,
    precipMM: 0,
    tempC: { hiTemp: 16, loTemp: 10 },
    energy: { energyAM: 6, energyPM: 8 },
    locCount: 1,
    locations: [{ locName: "park", locFamiliar: 1 }],
    maxDistKM: 1.02,
    busBool: true,
    skytrainBool: true,
    schoolday: false,
    park: true,
    shoppingCorr: false,
    avgFam: 1
},
{
    date: "2025-10-05",
    steps: 4072,
    photos: 0,
    precipMM: 0,
    tempC: { hiTemp: 17, loTemp: 7 },
    energy: { energyAM: 6, energyPM: 8 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-06",
    steps: 2573,
    photos: 2,
    precipMM: 0,
    tempC: { hiTemp: 18, loTemp: 8 },
    energy: { energyAM: 4, energyPM: 6 },
    locCount: 1,
    locations: [{ locName: "commercial drive", locFamiliar: 2 }],
    maxDistKM: 1.72,
    busBool: true,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: true,
    avgFam: 2
},
{
    date: "2025-10-07",
    steps: 8933,
    photos: 24,
    precipMM: 0,
    tempC: { hiTemp: 17, loTemp: 8 },
    energy: { energyAM: 6, energyPM: 7 },
    locCount: 3,
    locations: [{ locName: "coffee/pastry shop", locFamiliar: 2 }, { locName: "campus", locFamiliar: 3 }, { locName: "vpl", locFamiliar: 2 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 2.3
},
{
    date: "2025-10-08",
    steps: 8140,
    photos: 31,
    precipMM: 0,
    tempC: { hiTemp: 14, loTemp: 10 },
    energy: { energyAM: 7, energyPM: 8 },
    locCount: 2,
    locations: [{ locName: "pharmacy", locFamiliar: 1 }, { locName: "no frills", locFamiliar: 1 }],
    maxDistKM: 1.34,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: true,
    avgFam: 1
},
{
    date: "2025-10-09",
    steps: 9455,
    photos: 7,
    precipMM: 6.4,
    tempC: { hiTemp: 16, loTemp: 9 },
    energy: { energyAM: 7, energyPM: 7 },
    locCount: 1,
    locations: [{ locName: "campus", locFamiliar: 3 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 3
},
{
    date: "2025-10-10",
    steps: 1751,
    photos: 3,
    precipMM: 14.4,
    tempC: { hiTemp: 14, loTemp: 9 },
    energy: { energyAM: 7, energyPM: 4 },
    locCount: 1,
    locations: [{ locName: "dollarama", locFamiliar: 2 }],
    maxDistKM: .16,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 2
},
{
    date: "2025-10-11",
    steps: 8,
    photos: 0,
    precipMM: 3.1,
    tempC: { hiTemp: 14, loTemp: 9 },
    energy: { energyAM: 6, energyPM: 8 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-12",
    steps: 3656,
    photos: 3,
    precipMM: 10.8,
    tempC: { hiTemp: 13, loTemp: 9 },
    energy: { energyAM: 9, energyPM: 8 },
    locCount: 1,
    locations: [{ locName: "general restaurant", locFamiliar: 1 }],
    maxDistKM: .09,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 1
},
{
    date: "2025-10-13",
    steps: 51,
    photos: 0,
    precipMM: 0,
    tempC: { hiTemp: 14, loTemp: 4 },
    energy: { energyAM: 4, energyPM: 4 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-14",
    steps: 7094,
    photos: 9,
    precipMM: 0,
    tempC: { hiTemp: 13, loTemp: 10 },
    energy: { energyAM: 4, energyPM: 6 },
    locCount: 2,
    locations: [{ locName: "campus", locFamiliar: 3 }, { locName: "vpl", locFamiliar: 2 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 2.4
},
{
    date: "2025-10-15",
    steps: 17758,
    photos: 46,
    precipMM: 0,
    tempC: { hiTemp: 14, loTemp: 2 },
    energy: { energyAM: 7, energyPM: 10 },
    locCount: 4,
    locations: [{ locName: "pharmacy", locFamiliar: 2 }, { locName: "fedex", locFamiliar: 1 }, { locName: "commercial drive", locFamiliar: 2 }, { locName: "ethiopian restautant", locFamiliar: 1 }],
    maxDistKM: 2.05,
    busBool: true,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: true,
    avgFam: 1.5
},
{
    date: "2025-10-16",
    steps: 9068,
    photos: 15,
    precipMM: 1,
    tempC: { hiTemp: 13, loTemp: 5 },
    energy: { energyAM: 4, energyPM: 10 },
    locCount: 3,
    locations: [{ locName: "campus", locFamiliar: 4 }, { locName: "vpl", locFamiliar: 2 }, { locName: "ethiopian restautant", locFamiliar: 2 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 2.7
},
{
    date: "2025-10-17",
    steps: 13723,
    photos: 6,
    precipMM: 0,
    tempC: { hiTemp: 14, loTemp: 8 },
    energy: { energyAM: 4, energyPM: 8 },
    locCount: 3,
    locations: [{ locName: "drum shop", locFamiliar: 1 }, { locName: "coffee/pastry shop", locFamiliar: 3 }, { locName: "general restautant", locFamiliar: 2 }],
    maxDistKM: 1.97,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: true,
    avgFam: 2
},
{
    date: "2025-10-18",
    steps: 7935,
    photos: 1,
    precipMM: 66.6,
    tempC: { hiTemp: 10, loTemp: 7 },
    energy: { energyAM: 5, energyPM: 6 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-19",
    steps: 9043,
    photos: 52,
    precipMM: 24,
    tempC: { hiTemp: 12, loTemp: 8 },
    energy: { energyAM: 5, energyPM: 7 },
    locCount: 3,
    locations: [{ locName: "small park", locFamiliar: 1 }, { locName: "coffee shop", locFamiliar: 2 }, { locName: "medium park", locFamiliar: 1 }],
    maxDistKM: 1.28,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: true,
    shoppingCorr: true,
    avgFam: 1.3
},
{
    date: "2025-10-20",
    steps: 7333,
    photos: 3,
    precipMM: 1,
    tempC: { hiTemp: 12, loTemp: 7 },
    energy: { energyAM: 4, energyPM: 6 },
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-21",
    steps: 17707,
    photos: 2,
    precipMM: 0,
    tempC: { hiTemp: 14, loTemp: 8 },
    energy: { energyAM: 7, energyPM: 10 },
    locCount: 4,
    locations: [{ locName: "grocery store", locFamiliar: 2 }, { locName: "drug store", locFamiliar: 1 }, { locName: "campus", locFamiliar: 4 }, { locName: "cbc", locFamiliar: 1 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 2
},
{
    date: "2025-10-22",
    steps: 15931,
    photos: 81,
    precipMM: 4,
    tempC: { hiTemp: 12, loTemp: 6 },
    energy: { energyAM: 7, energyPM: 8 },
    locCount: 4,
    locations: [{ locName: "bank", locFamiliar: 1 }, { locName: "coal harbour", locFamiliar: 1 }, { locName: "park", locFamiliar: 1 }, { locName: "coffee/pastry shop", locFamiliar: 3 }],
    maxDistKM: 4.65,
    busBool: true,
    skytrainBool: true,
    schoolday: false,
    park: true,
    shoppingCorr: false,
    avgFam: 1.5
},
{
    date: "2025-10-23",
    steps: 13235,
    photos: 8,
    precipMM: 12,
    tempC: { hiTemp: 15, loTemp: 10 },
    energy: {},
    locCount: 1,
    locations: [{ locName: "campus", locFamiliar: 4 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-24",
    steps: 8050,
    photos: 0,
    precipMM: 50,
    tempC: { hiTemp: 14, loTemp: 8 },
    energy: {},
    locCount: 1,
    locations: [{ locName: "coffee shop", locFamiliar: 2 }],
    maxDistKM: 1.2,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 2
},
{
    date: "2025-10-25",
    steps: 110,
    photos: 0,
    precipMM: 21.2,
    tempC: { hiTemp: 10, loTemp: 8 },
    energy: {},
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-26",
    steps: 298,
    photos: 0,
    precipMM: 24.8,
    tempC: { hiTemp: 10, loTemp: 6 },
    energy: {},
    locCount: 0,
    locations: [],
    maxDistKM: 0,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-27",
    steps: 12878,
    photos: 17,
    precipMM: 0,
    tempC: { hiTemp: 12, loTemp: 6 },
    energy: {},
    locCount: 2,
    locations: [{ locName: "campus", locFamiliar: 4 }, { locName: "coffee/pastry", locFamiliar: 2 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 3
},
{
    date: "2025-10-28",
    steps: 6550,
    photos: 4,
    precipMM: 22,
    tempC: { hiTemp: 10, loTemp: 5 },
    energy: {},
    locCount: 1,
    locations: [{ locName: "campus", locFamiliar: 4 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 4
},
{
    date: "2025-10-29",
    steps: 5687,
    photos: 3,
    precipMM: 35.8,
    tempC: { hiTemp: 12, loTemp: 6 },
    energy: {},
    locCount: 2,
    locations: [{ locName: "coffee", locFamiliar: 1 }, { locName: "dollarama", locFamiliar: 2 }],
    maxDistKM: 0.15,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 1.5
},
{
    date: "2025-10-30",
    steps: 11677,
    photos: 31,
    precipMM: 0,
    tempC: { hiTemp: 12, loTemp: 5 },
    energy: {},
    locCount: 2,
    locations: [{ locName: "campus", locFamiliar: 4 }, { locName: "safeway", locFamiliar: 2 }],
    maxDistKM: 3.8,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 3
},
{
    date: "2025-10-31",
    steps: 4703,
    photos: 10,
    precipMM: 30.8,
    tempC: { hiTemp: 10, loTemp: 7 },
    energy: {},
    locCount: 1,
    locations: [{ locName: "coffee", locFamiliar: 2 }],
    maxDistKM: .06,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 2
},
{
    date: "2025-11-01",
    steps: 7844,
    photos: 13,
    precipMM: 17.9,
    tempC: { hiTemp: 12, loTemp: 7 },
    energy: {},
    locCount: 2,
    locations: [{ locName: "coffee", locFamiliar: 2 }, { locName: "dollarama", locFamiliar: 2 }],
    maxDistKM: .15,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: false,
    avgFam: 2
},
{
    date: "2025-11-02",
    steps: 8331,
    photos: 25,
    precipMM: 3.8,
    tempC: { hiTemp: 10, loTemp: 5 },
    energy: {},
    locCount: 3,
    locations: [{ locName: "book store", locFamiliar: 1 }, { locName: "craft store", locFamiliar: 1 }, { locName: "broadway", locFamiliar: 2 }],
    maxDistKM: 1.2,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: false,
    shoppingCorr: true,
    avgFam: 1.3
},
{
    date: "2025-11-03",
    steps: 8541,
    photos: 13,
    precipMM: 0,
    tempC: { hiTemp: 12, loTemp: 6 },
    energy: {},
    locCount: 3,
    locations: [{ locName: "park", locFamiliar: 1 }, { locName: "park", locFamiliar: 2 }, { locName: "ethiopian restaurant", locFamiliar: 3 }],
    maxDistKM: 1.12,
    busBool: false,
    skytrainBool: false,
    schoolday: false,
    park: true,
    shoppingCorr: false,
    avgFam: 2
},
{
    date: "2025-11-04",
    steps: 15184,
    photos: 16,
    precipMM: 1,
    tempC: { hiTemp: 13, loTemp: 2 },
    energy: {},
    locCount: 2,
    locations: [{ locName: "campus", locFamiliar: 4 }, { locName: "burrard", locFamiliar: 1 }],
    maxDistKM: 3.99,
    busBool: true,
    skytrainBool: true,
    schoolday: true,
    park: false,
    shoppingCorr: false,
    avgFam: 2.5
}
]

/* Sort familiarity level to ensure smallest dots on top*/

dataset.sort(function (a, b) {
    if (a.avgFam>= b.avgFam) {
        return 1;
    } return -1;
})

/* Configuration variables: drawing */

let svgWidth = 1200; //increased canvas size for 'big' data spread
let svgHeight = 900;
let leftMargin = 50;
let rightMargin = 20;
let topMargin = 120;
let bottomMargin = 50;

//let margin = 40;
let maxFam = d3.max(dataset, function (value) { return value.avgFam }); 
let maxKM = d3.max(dataset, function (value) { return value.maxDistKM }); // config values to experiment with x and y scaling 
let maxPhotos = d3.max(dataset, function (value) { return value.photos });
let maxSteps = d3.max(dataset, function (value) { return value.steps });
let maxPrecip = d3.max(dataset, function (value) { return value.precipMM });
/*https://observablehq.com/@d3/d3-mean-d3-median-and-friends*/
let avgAvgFam = d3.mean(dataset, function (value) {return value.avgFam});

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

/* Draw margin border with configuration variables */
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("x", leftMargin)
    .attr("y", topMargin)
    .attr("width", svgWidth - (leftMargin + rightMargin))
    .attr("height", svgHeight - (topMargin + bottomMargin));

/** SCALE DATA **/
let xScale = d3.scalePow().exponent(.7)
    .domain([0, 19000])
    .range([leftMargin, svgWidth - rightMargin]);

let yScale = d3.scaleSqrt()
    .domain([-.005, 90])
    .range([svgHeight - bottomMargin, topMargin]);

let rScale = d3.scaleLog()
    .domain([4, 1])
    .range([5,30]);

let circles = svg.selectAll("circle")
    .data(dataset)
    .join("circle");

circles.attr("r", function (value) {
    return rScale(value.avgFam);
})
    .attr("opacity", .7)
    .attr("cx", function (value) {
        return xScale(value.steps);
    })
    .attr("cy", function (value) {
        return yScale(value.photos);
    })
    .attr("stroke", "black")
    .attr("fill", "grey")
    .attr("fill", function (value) {
        if (value.precipMM) {
            return "#8ECAE6";
        }
        return "#548C2F"
    });


/** DRAW AXIS LABELS **/

let xAxisLabel = svg.append("text")
    .attr("x", svgWidth / 2)
    .attr("y", svgHeight - (bottomMargin / 4))
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .text("Steps Walked");

let yAxisLabel = svg.append("text")
    .attr("x", -svgHeight / 2)
    .attr("y", leftMargin /2.4)
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .text("Photos Taken")
    .attr("transform", "rotate(-90)");


/** DRAW COORDINATE LABELS **/

/* label max steps */
/* let xMaxLabel = svg.append("text")
    .attr("x", xScale(18000))
    .attr("y", svgHeight - (bottomMargin / 1.4))
    .attr("text-anchor", "middle")
    .attr("font-size", "11px")
    .text(String(18000));
 */
/* label intermediate x values */
for (let i = 1500; i <= 18000; i += 1500) {
    svg.append("text")
        .attr("x", xScale(i))
        .attr("y", svgHeight - bottomMargin / 1.4)
        .attr("text-anchor", "end")
        .attr("alignment-baseline", "middle")
        .attr("font-size", "11px")
        .text(String(i));
}

/* label intermediate y values */
for (let i = 0; i <= 90; i += 10) {
    svg.append("text")
        .attr("x", leftMargin-4)
        .attr("y", yScale(i))
        .attr("text-anchor", "end")
        .attr("font-size", "11px")
        .text(String(i));
}

/* DRAW LEGEND */

/*** Colour Legend (**/

/* Title */
svg.append("text")
    .text("Colour Legend")
    .attr("x", 60)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("text-decoration", "underline")
    .attr("font-weight", "bold")
    .attr("font-size", "12px"); 

/* Rain */
svg.append("rect")
    .attr("width", 20)
    .attr("height", 20)
    .attr("opacity", .7)
    .attr("fill", "#8ECAE6")
    .attr("x", 20)
    .attr("y", 30);

svg.append("text")
    .text("Rain")
    .attr("x", 50)
    .attr("y", 47)
    .style("alignment-baseline", "middle")
    .attr("font-size", "11px"); 

/* No Rain */
svg.append("rect")
    .attr("width", 20)
    .attr("height", 20)
    .attr("opacity", .7)
    .attr("fill", "#548C2F")
    .attr("x", 20)
    .attr("y", 60);

svg.append("text")
    .text("No Rain")
    .attr("x", 50)
    .attr("y", 77)
    .style("alignment-baseline", "middle")
    .attr("font-size", "11px");

/*** Photo Legend ***/

/* Title */
svg.append("text")
    .text("Is this a new location for me?")
    .attr("x", 240)
    .attr("y", 20)
    .attr("text-anchor", "middle")
    .attr("font-weight", "bold")
    .attr("text-decoration", "underline")
    .attr("font-size", "12px");

/* high familiarity*/
svg.append("circle")
    .attr("r", rScale(4))
    .attr("cx", 165)
    .attr("cy", 40)
    .attr("opacity", .7)
    .attr("fill", "grey");

svg.append("text")
    .text("Not at all")
    .attr("alignment-baseline", "middle")
    .attr("font-size", "11px")
    .attr("x", 182)
    .attr("y", 45);

/* average familiarity */
svg.append("circle")
    .attr("r", rScale(avgAvgFam))
    .attr("cx", 165)
    .attr("cy", 70)
    .attr("opacity", .7)
    .attr("fill", "grey");

svg.append("text")
    .text("Somewhat")
    .attr("font-size", "11px")
    .attr("x", 182)
    .attr("y", 74);

/* lowest familiarity */
svg.append("circle")
    .attr("r", rScale(1))
    .attr("cx", 415)
    .attr("cy", 50)
    .attr("opacity", .7)
    .attr("fill", "grey");

svg.append("text")
    .text("I've never been here before")
    .attr("alignment-baseline", "middle")
    .attr("font-size", "11px")
    .attr("x", 444)
    .attr("y", 50);

/*** Draw legend separator ***/
svg.append("rect")
    .attr("fill", "none")
    .attr("stroke", "black")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 350)
    .attr("height", 95);