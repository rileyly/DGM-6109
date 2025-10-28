"use strict"

let photoSteps = [{
    date: "2025-09-25",
    steps: 6202, // number of steps I "walked" per apple watch
    photos: 4, // number of photos I took
    precipMM: 18, // precipitation (any) in mm
    tempC: { hiTemp: 16, loTemp: 10 },
    locCount: 2, // number of discrete locations I visited this day
    locations: [{ locName: "campus", locFamiliar: 3 }, { locName: "burrito shop", locFamiliar: 1 }], // list of locations visited and how familiar i am with each
    maxDistKM: 2.5, // max distance traveled from home, measured as the crow flies
    busBool: true, // did i ride at least one transit bus 
    skytrainBool: true // did i take skytrain
},
{
    date: "2025-09-26",
    steps: 6368, 
    photos: 7, 
    precipMM: 13, 
    tempC: { hiTemp: 17, loTemp: 12 },
    locCount: 2, 
    locations: [{ locName: "main street", locFamiliar: 2 }, { locName: "dollarama", locFamiliar: 1 }],
    maxDistKM: .85, 
    busBool: false, 
    skytrainBool: false 
},
{
    date: "2025-09-27",
    steps: 18, 
    photos: 0, 
    precipMM: 9.7, 
    tempC: { hiTemp: 15, loTemp: 11 },
    locCount: 0, 
    locations: [],
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false 
},
{
    date: "2025-09-28",
    steps: 48, 
    photos: 0, 
    precipMM: 3.6, 
    tempC: { hiTemp: 20, loTemp: 13 },
    locCount: 0, 
    locations: [],
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false 
},
{
    date: "2025-09-29",
    steps: 4053, 
    photos: 14, 
    precipMM: 16.1, 
    tempC: { hiTemp: 16, loTemp: 12 },
    locCount: 2, 
    locations: [{ locName: "coffee/pastry shop", locFamiliar: 1 }, { locName: "burrito shop", locFamiliar: 2 }],
    maxDistKM: 0.97, 
    busBool: true, 
    skytrainBool: true 
},
{
    date: "2025-09-30",
    steps: 2838, 
    photos: 0, 
    precipMM: 5.2, 
    tempC: { hiTemp: 18, loTemp: 11 },
    locCount: 0, 
    locations: [],
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false 
},
{
    date: "2025-10-01",
    steps: 544, 
    photos: 0, 
    precipMM: 13.5, 
    tempC: { hiTemp: 15, loTemp: 11 },
    locCount: 0, 
    locations: [],
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false 
},
{
    date: "2025-10-02",
    steps: 4696, 
    photos: 3, 
    precipMM: 0, 
    tempC: { hiTemp: 15, loTemp: 10 },
    locCount: 0, 
    locations: [],
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false 
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
    maxDistKM: .97, 
    busBool: false, 
    skytrainBool: false 
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
    skytrainBool: true 
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
    skytrainBool: false
},
{
    date: "2025-10-06",
    steps: 2573, 
    photos: 2, 
    precipMM: 0, 
    tempC: { hiTemp: 18, loTemp:8 },
    energy: { energyAM: 4, energyPM: 6 }, 
    locCount: 1, 
    locations: [{ locName: "commercial drive", locFamiliar: 2 }], 
    maxDistKM: 1.49, 
    busBool: true, 
    skytrainBool: false
},
{
    date: "2025-10-07",
    steps: 8933, 
    photos: 24, 
    precipMM: 0, 
    tempC: { hiTemp: 17, loTemp:8 },
    energy: { energyAM: 6, energyPM: 7 }, 
    locCount: 3, 
    locations: [{ locName: "coffee/pastry shop", locFamiliar: 2 }, { locName: "campus", locFamiliar: 3 }, { locName: "vpl", locFamiliar: 2 }], 
    maxDistKM: 1.8, 
    busBool: true, 
    skytrainBool: true
},
{
    date: "2025-10-08",
    steps: 8140, 
    photos: 31, 
    precipMM: 0, 
    tempC: { hiTemp: 14, loTemp:10 },
    energy: { energyAM: 7, energyPM: 8 }, 
    locCount: 2, 
    locations: [{ locName: "pharmacy", locFamiliar: 1 }, { locName: "no frills", locFamiliar: 1 }], 
    maxDistKM: 1.34, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-09",
    steps: 9455, 
    photos: 7, 
    precipMM: 12, 
    tempC: { hiTemp: 16, loTemp:9 },
    energy: { energyAM: 7, energyPM: 7 }, 
    locCount: 1, 
    locations: [{ locName: "campus", locFamiliar: 3 }], 
    maxDistKM: 2.5, 
    busBool: true, 
    skytrainBool: true
},
{
    date: "2025-10-10",
    steps: 1751, 
    photos: 3, 
    precipMM: 15, 
    tempC: { hiTemp: 14, loTemp:9 },
    energy: { energyAM: 7, energyPM: 4 }, 
    locCount: 1, 
    locations: [{ locName: "dollarama", locFamiliar: 2 }], 
    maxDistKM: .26, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-11",
    steps: 8, 
    photos: 0, 
    precipMM: 7, 
    tempC: { hiTemp: 14, loTemp:9 },
    energy: { energyAM: 6, energyPM: 8 }, 
    locCount: 0, 
    locations: [], 
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-12",
    steps: 3656, 
    photos: 3, 
    precipMM: 3, 
    tempC: { hiTemp: 13, loTemp:9 },
    energy: { energyAM: 9, energyPM: 8 }, 
    locCount: 1, 
    locations: [{ locName: "general restaurant", locFamiliar: 1 }], 
    maxDistKM: .12, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-13",
    steps: 51, 
    photos: 0, 
    precipMM: 0, 
    tempC: { hiTemp: 14, loTemp:4 },
    energy: { energyAM: 4, energyPM: 4 }, 
    locCount: 0, 
    locations: [], 
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-14",
    steps: 7094, 
    photos: 9, 
    precipMM: 17, 
    tempC: { hiTemp: 13, loTemp:10 },
    energy: { energyAM: 4, energyPM: 6 }, 
    locCount: 2, 
    locations: [{ locName: "campus", locFamiliar: 3 }, { locName: "vpl", locFamiliar: 2 }], 
    maxDistKM: 2.5, 
    busBool: true, 
    skytrainBool: true
},
{
    date: "2025-10-15",
    steps: 17758, 
    photos: 46, 
    precipMM: 0, 
    tempC: { hiTemp: 14, loTemp:2 },
    energy: { energyAM: 7, energyPM: 10 }, 
    locCount: 4, 
    locations: [{ locName: "pharmacy", locFamiliar: 2 }, { locName: "fedex", locFamiliar: 1 }, { locName: "commercial drive", locFamiliar: 2 }, { locName: "ethiopian restautant", locFamiliar: 1 }], 
    maxDistKM: 2.05, 
    busBool: true, 
    skytrainBool: false
},
{
    date: "2025-10-16",
    steps: 9068, 
    photos: 15, 
    precipMM: 1, 
    tempC: { hiTemp: 13, loTemp:5 },
    energy: { energyAM: 4, energyPM: 10 }, 
    locCount: 3, 
    locations: [{ locName: "campus", locFamiliar: 4 }, { locName: "vpl", locFamiliar: 2 }, { locName: "ethiopian restautant", locFamiliar: 2 }], 
    maxDistKM: 2.5, 
    busBool: true, 
    skytrainBool: true
},
{
    date: "2025-10-17",
    steps: 13723, 
    photos: 6, 
    precipMM: 0, 
    tempC: { hiTemp: 14, loTemp:8 },
    energy: { energyAM: 4, energyPM: 8 }, 
    locCount: 3, 
    locations: [{ locName: "drum shop", locFamiliar: 1 }, { locName: "coffee/pastry shop", locFamiliar: 3 }, { locName: "general restautant", locFamiliar: 2 }], 
    maxDistKM: 1.97, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-18",
    steps: 7935, 
    photos: 1, 
    precipMM: 29, 
    tempC: { hiTemp: 10, loTemp:7 },
    energy: { energyAM: 5, energyPM: 6 }, 
    locCount: 0, 
    locations: [], 
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-19",
    steps: 9043, 
    photos: 52, 
    precipMM: 23, 
    tempC: { hiTemp: 12, loTemp:8 },
    energy: { energyAM: 5, energyPM: 7 }, 
    locCount: 3, 
    locations: [{ locName: "small park", locFamiliar: 1 }, { locName: "coffee shop", locFamiliar: 2 }, { locName: "medium park", locFamiliar: 1 }], 
    maxDistKM: 1.24, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-20",
    steps: 7333, 
    photos: 3, 
    precipMM: 1, 
    tempC: { hiTemp: 12, loTemp:7 },
    energy: { energyAM: 4, energyPM: 6 }, 
    locCount: 0, 
    locations: [], 
    maxDistKM: 0, 
    busBool: false, 
    skytrainBool: false
},
{
    date: "2025-10-21",
    steps: 17707, 
    photos: 2, 
    precipMM: 0, 
    tempC: { hiTemp: 14, loTemp:8 },
    energy: { energyAM: 7, energyPM: 10 }, 
    locCount: 4, 
    locations: [{ locName: "grocery store", locFamiliar: 2 }, { locName: "drug store", locFamiliar: 1 }, { locName: "campus", locFamiliar: 4 }, { locName: "cbc", locFamiliar: 1 }], 
    maxDistKM: 2.5, 
    busBool: true, 
    skytrainBool: true
},
{
    date: "2025-10-22",
    steps: 15931, 
    photos: 81, 
    precipMM: 4, 
    tempC: { hiTemp: 12, loTemp: 6 },
    energy: { energyAM: 7, energyPM: 8 }, 
    locCount: 4, 
    locations: [{ locName: "bank", locFamiliar: 1 }, { locName: "coal harbour", locFamiliar: 1 }, { locName: "park", locFamiliar: 1 }, { locName: "coffee/pastry shop", locFamiliar: 3 }], // list of locations visited and how familiar i am with each
    maxDistKM: 2.84, 
    busBool: true, 
    skytrainBool: true 
}

]

// console.log(JSON.stringify(photoSteps));
showData(photoSteps);
