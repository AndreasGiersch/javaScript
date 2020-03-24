import {
    checkInventory,
    checkInventoryInitial,
    checkAvailability,
    inventory,
    processPayment,
    shipOrder,
} from './12_promisesLib'

/**
 * 3. constructing a promise object
 */

// Write your code below:
function myExecutor(resolve, reject) {
    if (inventory.sunglasses > 0) {
        resolve('Sunglasses order processed.')
    } else {
        reject('That item is sold out.')
    }
}

function orderSunglasses() {
    return new Promise(myExecutor)
}

const orderPromise = orderSunglasses()

console.log(orderPromise)

/**
 * 4. the node setTimeout() function
 */

console.log('This is the first line of code in app.js.')
// Keep the line above as the first line of code
// Write your code here:
function usingSTO() {
    console.log('testing line')
}

setTimeout(usingSTO, 2500)

// Keep the line below as the last line of code:
console.log('This is the last line of code in app.js.')

/**
 * 6. onFulfilled() and onRejected() functions
 */

const order = [
    ['sunglasses', 1],
    ['bags', 2],
]

// Write your code below:

function handleSuccess(successValue) {
    console.log('success: ' + successValue)
}

function handleFailure(rejectionReason) {
    console.log('failure: ' + rejectionReason)
}

checkInventoryInitial(order).then(handleSuccess, handleFailure)

/**
 * 7. using .catch() with promises
 */
inventory['sunglasses'] = 0

// Write your code below:
checkInventoryInitial(order)
    .then(handleSuccess)
    .catch(handleFailure)

/**
 * 8. chaining multiple promises
 */

const orderNew = {
    items: [
        ['sunglasses', 1],
        ['bags', 2],
    ],
    giftcardBalance: 79.82,
}

checkInventory(orderNew)
    .then(resolvedValueArray => {
        // Write the correct return statement here:
        return processPayment(resolvedValueArray)
    })
    .then(resolvedValueArray => {
        // Write the correct return statement here:
        return shipOrder(resolvedValueArray)
    })
    .then(successMessage => {
        console.log(successMessage)
    })
    .catch(errorMessage => {
        console.log(errorMessage)
    })

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

const onFulfill = itemsArray => {
    console.log(`Items checked: ${itemsArray}`)
    console.log(
        `Every item was available from the distributor. Placing order now.`
    )
}

const onReject = rejectionReason => {
    console.log(rejectionReason)
}

// Write your code below:
const checkSunglasses = checkAvailability('sunglasses', 'Favorite Supply Co.')

const checkPants = checkAvailability('pants', 'Favorite Supply Co.')

const checkBags = checkAvailability('bags', 'Favorite Supply Co.')

Promise.all([checkSunglasses, checkPants, checkBags])
    .then(onFulfill)
    .catch(onReject)

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
