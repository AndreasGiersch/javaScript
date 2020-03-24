"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.meetsStaffReqs = exports.meetsStaffRequirements = meetsStaffRequirements;
exports.meetsSpeedRangeReqs = exports.meetsSpeedRangeRequirements = meetsSpeedRangeRequirements;
exports.blaa = blaa;
exports["default"] = exports.bla = exports.flightReqs = exports.flightRequirements = exports.aircrafts = exports.availableAirplanes = void 0;

/**
 * export modules
 */
var Airplane = {};
Airplane.myAirplane = 'StarJet'; // need to turn off other module exports, because export default at lesson "export defaults"
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

var availableAirplanesA = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators']
}, {
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants']
}];
var AirplaneExp = {
  availableAirplanes: [availableAirplanesA[0], availableAirplanesA[1]]
}; // export default AirplaneExp

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

var availableAirplanes = [{
  name: 'AeroJet',
  fuelCapacity: 800,
  availableStaff: ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'],
  maxSpeed: 1200,
  minSpeed: 300
}, {
  name: 'SkyJet',
  fuelCapacity: 500,
  availableStaff: ['pilots', 'flightAttendants'],
  maxSpeed: 800,
  minSpeed: 200
}];
exports.aircrafts = exports.availableAirplanes = availableAirplanes;
var flightRequirements = {
  requiredStaff: 4,
  requiredSpeedRange: 700
};
exports.flightReqs = exports.flightRequirements = flightRequirements;

function meetsStaffRequirements(availableStaff, requiredStaff) {
  if (availableStaff.length >= requiredStaff) {
    return true;
  } else {
    return false;
  }
}

function meetsSpeedRangeRequirements(maxSpeed, minSpeed, requiredSpeedRange) {
  var range = maxSpeed - minSpeed;
  if (range > requiredSpeedRange) return true;else return false;
}
/**
 * export as
 */


/**
 * combining export statements
 */
var bla = ' aaaa';
exports.bla = bla;

function blaa() {
  console.log('bbbbb');
}

var obj = {
  prop: 'abc'
};
var _default = obj;
exports["default"] = _default;