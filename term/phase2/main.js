"use strict"

let photoSteps = [{
    date: "2025-10-22",
    steps: 15931, // number of steps I "walked" per apple watch
    photos: 81, // number of photos I took
    precipMM: 4, // precipitation (any) in mm
    tempC: { hiTemp: 12, loTemp: 6 },
    energy: { energyAM: 7, energyPM: 8 }, // my subjective sense of physical tiredness/energy
    locCount: 4, // number of discrete locations I visited this day
    locations: [{ locName: "bank", locFamiliar: 1 }, { locName: "coal harbour", locFamiliar: 1 }, { locName: "park", locFamiliar: 1 }, { locName: "coffee/pastry shop", locFamiliar: 3 }], // list of locations visited and how familiar i am with each
    maxDistKM: 2.84, // max distance traveled from home, measured as the crow flies
    busBool: true, // did i ride at least one transit bus 
    skytrainBool: true // did i take skytrain
}]

console.log(JSON.stringify(photoSteps));
showData(photoSteps);
