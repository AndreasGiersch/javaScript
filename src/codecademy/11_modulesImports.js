import AirplaneExp from './11_modules'

/**
 * require modules
 */

const Airplane = require('./11_modules.js')

function displayAirplane() {
    console.log(Airplane.myAirplane)
}

// need to turn off other module exports, because export default at lesson "export defaults"
// will be overridden. Lines using these other module exports are commented out

// displayAirplane()

/**
 * require modules II
 */

const Airplane2 = require('./11_modules.js')

// console.log(Airplane2.displayAirplane())

/**
 * import
 */

function displayFuelCapacity() {
    console.log(AirplaneExp)
    AirplaneExp.availableAirplanes.forEach(element => {
        console.log(`Fuel Capacity of ${element.name} :${element.fuelCapacity}`)
    })
}

// displayFuelCapacity()

/**
 * named imports
 */

// import {
//     availableAirplanes,
//     flightRequirements,
//     meetsStaffRequirements,
// }

function displayStaffStatus() {
    availableAirplanes.forEach(function(element) {
        console.log(
            element.name +
                ' meets staff requirements: ' +
                meetsStaffRequirements(
                    element.availableStaff,
                    flightRequirements.requiredStaff
                )
        )
    })
}

// displayStaffStatus()

/**
 * import named imports
 */

import {
    availableAirplanes,
    flightRequirements,
    meetsStaffRequirements,
    meetsSpeedRangeRequirements,
} from './11_modules'

function displaySpeedRangeStatus() {
    availableAirplanes.forEach(function(element) {
        console.log(
            element.name +
                ' meets speed range requirements: ' +
                meetsSpeedRangeRequirements(
                    element.maxSpeed,
                    element.minSpeed,
                    flightRequirements.requiredSpeedRange
                )
        )
    })
}

// displaySpeedRangeStatus()

/**
 * import the "export as" exports
 */

// only need to change the used imports to the alias:
// e.g. export { availableAirplanes as aircrafts }
// --> import { aircrafts } from './11_modules';
// aircrafts.forEach(...

/**
 * combining import statements
 */

import { bla, blaa } from './11_modules'

import abc from './11_modules'

console.log(bla)
blaa()

console.log(abc.prop)
