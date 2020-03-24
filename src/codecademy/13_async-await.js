require('regenerator-runtime/runtime')

/**
 * 2. the async keyword
 */

function withConstructor(num) {
    return new Promise((resolve, reject) => {
        if (num === 0) {
            resolve('zero')
        } else {
            resolve('not zero')
        }
    })
}

withConstructor(0).then(resolveValue => {
    console.log(
        ` withConstructor(0) returned a promise which resolved to: ${resolveValue}.`
    )
})

// Write your code below:
async function withAsync(num) {
    if (num === 0) {
        return 'zero'
    } else {
        return 'not zero'
    }
}

// Leave this commented out until step 3:

withAsync(100).then(resolveValue => {
    console.log(
        ` withAsync(100) returned a promise which resolved to: ${resolveValue}.`
    )
})

/**
 * 3. The await operator
 */

// this is the brainstormDinner function. It's a little silly. It returns a promise
// that uses a series of setTimeout() functions to simulate a time-consuming asynchronous
// action. It's a good example of "callback hell" or "the pyramid of doom," two ways
// people describe how confusing a bunch of nested callback functions can become.
const brainstormDinner = () => {
    return new Promise((resolve, reject) => {
        console.log(`I have to decide what's for dinner...`)
        setTimeout(() => {
            console.log('Should I make salad...?')
            setTimeout(() => {
                console.log('Should I make ramen...?')
                setTimeout(() => {
                    console.log('Should I make eggs...?')
                    setTimeout(() => {
                        console.log('Should I make chicken...?')
                        resolve('beans')
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    })
}

// Native promise version:
function nativePromiseDinner() {
    brainstormDinner().then(meal => {
        console.log(`I'm going to make ${meal} for dinner.`)
    })
}

// async/await version:
async function announceDinner() {
    // Write your code below:
    const result = await brainstormDinner()
    console.log(`I'm going to make ${result} for dinner.`)
}
announceDinner()

/**
 * 4. writing async functions
 */

// This is the shopForBeans function. It uses a setTimeout() function to simulate a
// time-consuming asynchronous action. The function returns a promise with a resolved
//  value of a string representing a type of bean. It settles on a random beanType
//  from the beanTypes array using Math.random().
const shopForBeans = () => {
    return new Promise((resolve, reject) => {
        const beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo']
        setTimeout(() => {
            let randomIndex = Math.floor(Math.random() * 5)
            let beanType = beanTypes[randomIndex]
            console.log(
                `2. I bought ${beanType} beans because they were on sale.`
            )
            resolve(beanType)
        }, 1000)
    })
}

async function getBeans() {
    console.log(`1. Heading to the store to buy beans...`)
    let value = await shopForBeans()
    console.log(`3. Great! I'm making ${value} beans for dinner tonight!`)
}

getBeans()

/**
 * 5. Handling dependent promises
 */

let soakTheBeans = beanType => {
    return new Promise((resolve, reject) => {
        console.log('Time to soak the beans.')
        setTimeout(() => {
            console.log(`... The ${beanType} beans are softened.`)
            resolve(true)
        }, 1000)
    })
}

let cookTheBeans = isSoftened => {
    return new Promise((resolve, reject) => {
        console.log('Time to cook the beans.')
        setTimeout(() => {
            if (isSoftened) {
                console.log('... The beans are cooked!')
                resolve('\n\nDinner is served!')
            }
        }, 1000)
    })
}

// Write your code below:
async function makeBeans() {
    const type = await shopForBeans()
    const isSoft = await soakTheBeans(type)
    const dinner = await cookTheBeans(isSoft)
    console.log(dinner)
}
makeBeans()

/**
 * 6. Handle errors
 */

//This function returns true 50% of the time.
let randomSuccess = () => {
    let num = Math.random()
    if (num < 0.5) {
        return true
    } else {
        return false
    }
}

//This function returns a promise that resolves half of the time and rejects half of the time
let cookBeanSouffle = () => {
    return new Promise((resolve, reject) => {
        console.log('Fingers crossed... Putting the Bean Souffle in the oven')
        setTimeout(() => {
            let success = randomSuccess()
            if (success) {
                resolve('Bean Souffle')
            } else {
                reject('Dinner is ruined!')
            }
        }, 1000)
    })
}

// Write your code below:

async function hostDinnerParty() {
    try {
        const result = await cookBeanSouffle()
        console.log(`${result} is served!`)
    } catch (error) {
        console.log(error)
        console.log('Ordering a pizza!')
    }
}

hostDinnerParty()

/**
 * 7. Handling independent promises
 */

let cookBeans = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('beans')
        }, 1000)
    })
}

let steamBroccoli = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('broccoli')
        }, 1000)
    })
}

let cookRice = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('rice')
        }, 1000)
    })
}

let bakeChicken = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('chicken')
        }, 1000)
    })
}

// Write your code below:

async function serveDinner() {
    const vegetablePromise = steamBroccoli()
    const starchPromise = cookRice()
    const proteinPromise = bakeChicken()
    const sidePromise = cookBeans()
    console.log(
        `Dinner is served. We're having ${await vegetablePromise}, ${await starchPromise}, ${await proteinPromise}, and ${await sidePromise}.`
    )
}

serveDinner()

/**
 * 8. Await Promise.all()
 */

// Write your code below:

async function serveDinnerAgain() {
    const foodArray = await Promise.all([
        steamBroccoli(),
        cookRice(),
        bakeChicken(),
        cookBeans(),
    ])

    console.log(
        `Dinner is served. We're having ${foodArray[0]}, ${foodArray[1]}, ${foodArray[2]}, and ${foodArray[3]}.`
    )
}

serveDinnerAgain()

/**
 * 9. Review
 */

// Awesome work getting the hang of the async...await syntax! Let’s review what you’ve learned:

// async...await is syntactic sugar built on native JavaScript promises and generators.
// We declare an async function with the keyword async.
// Inside an async function we use the await operator to pause execution of our function until an asynchronous action completes and the awaited promise is no longer pending .
// await returns the resolved value of the awaited promise.
// We can write multiple await statements to produce code that reads like synchronous code.
// We use try...catch statements within our async functions for error handling.
// We should still take advantage of concurrency by writing async functions that allow asynchronous actions to happen in concurrently whenever possible.
