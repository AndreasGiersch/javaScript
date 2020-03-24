"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _modules = _interopRequireWildcard(require("./11_modules"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/**
 * require modules
 */
var Airplane = require('./11_modules.js');

function displayAirplane() {
  console.log(Airplane.myAirplane);
} // need to turn off other module exports, because export default at lesson "export defaults"
// will be overridden. Lines using these other module exports are commented out
// displayAirplane()

/**
 * require modules II
 */


var Airplane2 = require('./11_modules.js'); // console.log(Airplane2.displayAirplane())

/**
 * import
 */


function displayFuelCapacity() {
  console.log(_modules["default"]);

  _modules["default"].availableAirplanes.forEach(function (element) {
    console.log("Fuel Capacity of ".concat(element.name, " :").concat(element.fuelCapacity));
  });
} // displayFuelCapacity()

/**
 * named imports
 */
// import {
//     availableAirplanes,
//     flightRequirements,
//     meetsStaffRequirements,
// }


function displayStaffStatus() {
  _modules.availableAirplanes.forEach(function (element) {
    console.log(element.name + ' meets staff requirements: ' + (0, _modules.meetsStaffRequirements)(element.availableStaff, _modules.flightRequirements.requiredStaff));
  });
} // displayStaffStatus()

/**
 * import named imports
 */


function displaySpeedRangeStatus() {
  _modules.availableAirplanes.forEach(function (element) {
    console.log(element.name + ' meets speed range requirements: ' + (0, _modules.meetsSpeedRangeRequirements)(element.maxSpeed, element.minSpeed, _modules.flightRequirements.requiredSpeedRange));
  });
} // displaySpeedRangeStatus()

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


console.log(_modules.bla);
(0, _modules.blaa)();
console.log(_modules["default"].prop);