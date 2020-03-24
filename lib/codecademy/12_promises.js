"use strict";

var _promisesLib = require("./12_promisesLib");

/**
 * 3. constructing a promise object
 */
// Write your code below:
function myExecutor(resolve, reject) {
  if (_promisesLib.inventory.sunglasses > 0) {
    resolve('Sunglasses order processed.');
  } else {
    reject('That item is sold out.');
  }
}

function orderSunglasses() {
  return new Promise(myExecutor);
}

var orderPromise = orderSunglasses();
console.log(orderPromise);
/**
 * 4. the node setTimeout() function
 */

console.log('This is the first line of code in app.js.'); // Keep the line above as the first line of code
// Write your code here:

function usingSTO() {
  console.log('testing line');
}

setTimeout(usingSTO, 2500); // Keep the line below as the last line of code:

console.log('This is the last line of code in app.js.');
/**
 * 6. onFulfilled() and onRejected() functions
 */

var order = [['sunglasses', 1], ['bags', 2]]; // Write your code below:

function handleSuccess(successValue) {
  console.log('success: ' + successValue);
}

function handleFailure(rejectionReason) {
  console.log('failure: ' + rejectionReason);
}

(0, _promisesLib.checkInventoryInitial)(order).then(handleSuccess, handleFailure);
/**
 * 7. using .catch() with promises
 */

_promisesLib.inventory['sunglasses'] = 0; // Write your code below:

(0, _promisesLib.checkInventoryInitial)(order).then(handleSuccess)["catch"](handleFailure);
/**
 * 8. chaining multiple promises
 */

var orderNew = {
  items: [['sunglasses', 1], ['bags', 2]],
  giftcardBalance: 79.82
};
(0, _promisesLib.checkInventory)(orderNew).then(function (resolvedValueArray) {
  // Write the correct return statement here:
  return (0, _promisesLib.processPayment)(resolvedValueArray);
}).then(function (resolvedValueArray) {
  // Write the correct return statement here:
  return (0, _promisesLib.shipOrder)(resolvedValueArray);
}).then(function (successMessage) {
  console.log(successMessage);
})["catch"](function (errorMessage) {
  console.log(errorMessage);
});
/**
 * 9. avoiding common mistakes
 */
//  missing the return statement inside a then callback:
// e.g.
// .then(resolvedValueArray => {
//    processPayment(resolvedValueArray)
// })
// should be:
// .then(resolvedValueArray => {
//     return processPayment(resolvedValueArray)
// })
// nesting .then() instead of chaining it
// e.g.
// .then(resolvedValueArray => {
//    processPayment(resolvedValueArray).then(resolvedValues => {
//     shipOrder(resolvedValues).then(successMessage => {
//         console.log(.....)
//     })
// })
// })
// should be
// .then(resolvedValueArray => {
//   return processPayment(resolvedValueArray);
// })
// .then(resolvedValues => {
//     return shipOrder(resolvedValues);
// })
// .then(successMessage => {
//         console.log(successMessage);
// })

/**
 * 10. using Promise.all()
 */

var onFulfill = function onFulfill(itemsArray) {
  console.log("Items checked: ".concat(itemsArray));
  console.log("Every item was available from the distributor. Placing order now.");
};

var onReject = function onReject(rejectionReason) {
  console.log(rejectionReason);
}; // Write your code below:


var checkSunglasses = (0, _promisesLib.checkAvailability)('sunglasses', 'Favorite Supply Co.');
var checkPants = (0, _promisesLib.checkAvailability)('pants', 'Favorite Supply Co.');
var checkBags = (0, _promisesLib.checkAvailability)('bags', 'Favorite Supply Co.');
Promise.all([checkSunglasses, checkPants, checkBags]).then(onFulfill)["catch"](onReject);
/**
 * 11. review
 */
// Promises are JavaScript objects that represent the eventual result of an asynchronous operation.
// Promises can be in one of three states: pending, resolved, or rejected.
// A promise is settled if it is either resolved or rejected.
// We construct a promise by using the new keyword and passing an executor function to the Promise constructor method.
// setTimeout() is a Node function which delays the execution of a callback function using the event-loop.
// We use .then() with a success handler callback containing the logic for what should happen if a promise resolves.
// We use .catch() with a failure handler callback containing the logic for what should happen if a promise rejects.
// Promise composition enables us to write complex, asynchronous code that’s still readable. We do this by chaining multiple .then()‘s and .catch()‘s.
// To use promise composition correctly, we have to remember to return promises constructed within a .then().
// We should chain multiple promises rather than nesting them.
// To take advantage of concurrency, we can use Promise.all().