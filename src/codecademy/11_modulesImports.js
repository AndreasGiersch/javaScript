/**
 * require modules
 */

const Airplane = require('./11_modules.js')

function displayAirplane() {
    console.log(Airplane.myAirplane)
}

displayAirplane()

/**
 * require modules II
 */

const Airplane2 = require('./11_modules.js')

console.log(Airplane2.displayAirplane())
