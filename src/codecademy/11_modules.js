/**
 * export modules
 */

const Airplane = {}
Airplane.myAirplane = 'StarJet'

// need to turn off other module exports, because export default at lesson "export defaults"
// will be overridden

// module.exports = Airplane

/**
 * export modules II
 */

// module.exports = {
//     myAirplane: 'CloudJet',
//     displayAirplane: function() {
//         return this.myAirplane
//     },
// }

/**
 * export defaults
 */

let availableAirplanesA = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: [
            'pilots',
            'flightAttendants',
            'engineers',
            'medicalAssistance',
            'sensorOperators',
        ],
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
    },
]

const AirplaneExp = {
    availableAirplanes: [availableAirplanesA[0], availableAirplanesA[1]],
}

// export default AirplaneExp

/**
 * named exports
 */

// let flightRequirements = { requiredStaff: 4 }

// function meetsStaffRequirements(availableStaff, requiredStaff) {
//     if (availableStaff.length >= requiredStaff) {
//         return true
//     } else {
//         return false
//     }
// }

// export { availableAirplanes, flightRequirements, meetsStaffRequirements }

/**
 * export named exports as soon as they are declared
 */

export const availableAirplanes = [
    {
        name: 'AeroJet',
        fuelCapacity: 800,
        availableStaff: [
            'pilots',
            'flightAttendants',
            'engineers',
            'medicalAssistance',
            'sensorOperators',
        ],
        maxSpeed: 1200,
        minSpeed: 300,
    },
    {
        name: 'SkyJet',
        fuelCapacity: 500,
        availableStaff: ['pilots', 'flightAttendants'],
        maxSpeed: 800,
        minSpeed: 200,
    },
]

export const flightRequirements = {
    requiredStaff: 4,
    requiredSpeedRange: 700,
}

export function meetsStaffRequirements(availableStaff, requiredStaff) {
    if (availableStaff.length >= requiredStaff) {
        return true
    } else {
        return false
    }
}

export function meetsSpeedRangeRequirements(
    maxSpeed,
    minSpeed,
    requiredSpeedRange
) {
    const range = maxSpeed - minSpeed

    if (range > requiredSpeedRange) return true
    else return false
}

/**
 * export as
 */

export {
    availableAirplanes as aircrafts,
    flightRequirements as flightReqs,
    meetsStaffRequirements as meetsStaffReqs,
    meetsSpeedRangeRequirements as meetsSpeedRangeReqs,
}

/**
 * combining export statements
 */

export const bla = ' aaaa'

export function blaa() {
    console.log('bbbbb')
}

const obj = { prop: 'abc' }

export default obj
