import {
    renderResponseWordSmith,
    renderRawResponseWordSmith,
    renderJsonResponseWordSmith,
} from './14_requests_lib'

/**
 * 3. fetch() GET requests II
 */

fetch('https://api-to-call.com/endpoint')
    .then(
        response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Request failed!')
        },
        networkError => {
            console.log(networkError.message)
        }
    )
    .then(jsonResponse => jsonResponse)

/**
 * 4. fetch() GET requests III
 */

// Information to reach API
const url = 'https://api.datamuse.com/words'
const queryParams = '?sl='

// Selects page elements
const inputField = document.querySelector('#input')
const submit = document.querySelector('#submit')
const responseField = document.querySelector('#responseField')

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value
    const endpoint = `${url}${queryParams}${wordQuery}`

    fetch(endpoint, { cache: 'no-cache' }).then(
        response => {
            if (response.ok) {
                return response.json()
            }

            throw new Error('Request failed!')
        },
        networkError => {
            console.log(networkError.message)
        }
    )
}

// Clears previous results and display results to webpage
const displaySuggestions = event => {
    event.preventDefault()
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild)
    }
    getSuggestions()
}

submit.addEventListener('click', displaySuggestions)

/**
 * 5. fetch() GET Requests IV
 */

// Information to reach API
const urlB = 'https://api.datamuse.com/words'
const queryParamsB = '?sl='

// Selects page elements
const inputFieldB = document.querySelector('#input')
const submitB = document.querySelector('#submit')
const responseFieldB = document.querySelector('#responseField')

// AJAX function
const getSuggestionsB = () => {
    const wordQueryB = inputFieldB.value
    const endpointB = `${urlB}${queryParamsB}${wordQueryB}`

    fetch(endpointB, { cache: 'no-cache' })
        .then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Request failed!')
            },
            networkError => {
                console.log(networkError.message)
            }
        )
        .then(jsonResponse => {
            renderResponseWordSmith(jsonResponse)
        })
}

// Clears previous results and display results to webpage
const displaySuggestionsB = event => {
    event.preventDefault()
    while (responseFieldB.firstChild) {
        responseFieldB.removeChild(responseFieldB.firstChild)
    }
    getSuggestionsB()
}

submitB.addEventListener('click', displaySuggestionsB)

/**
 * 7. fetch() POST requests II
 */

fetch('https://api-to-call.com/endpoint', {
    method: 'POST',
    body: JSON.stringify({ id: '200' }),
})
    .then(
        response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Request failed!')
        },
        networkError => {
            console.log(networkError.message)
        }
    )
    .then(jsonResponse => {
        return jsonResponse
    })

/**
 * 8. fetch() POST requests III
 */

// Information to reach API
const apiKey = '195391943fc441c78d5d8d94474fab57'
const urlC = 'https://api.rebrandly.com/v1/links'

// Some page elements
const inputFieldC = document.querySelector('#input')
const shortenButtonC = document.querySelector('#shorten')
const responseFieldC = document.querySelector('#responseField')

// AJAX functions
const shortenUrl = () => {
    const urlToShorten = inputFieldC.value
    const data = JSON.stringify({ destination: urlToShorten })

    fetch(urlC, {
        method: 'POST',
        headers: { 'Content-type': 'application/json', apikey: apiKey },
        body: data,
    })
}

// Clear page and call AJAX functions
const displayShortUrl = event => {
    event.preventDefault()
    while (responseFieldC.firstChild) {
        responseFieldC.removeChild(responseFieldC.firstChild)
    }
    shortenUrl()
}

shortenButtonC.addEventListener('click', displayShortUrl)

/**
 * 9. fetch() POST request IV
 */

const shortenUrlB = () => {
    const urlToShorten = inputField.value
    const data = JSON.stringify({ destination: urlToShorten })

    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json', apikey: apiKey },
        body: data,
    }).then(
        response => {
            if (response.ok) {
                return response.json()
            }
            throw new Error('Request failed!')
        },
        networkError => {
            console.log(networkError.message)
        }
    )
}

/**
 * 10. fetch() POST requests V
 */

const shortenUrlC = () => {
    const urlToShorten = inputField.value
    const data = JSON.stringify({ destination: urlToShorten })

    fetch(url, {
        method: 'POST',
        headers: { 'Content-type': 'application/json', apikey: apiKey },
        body: data,
    })
        .then(
            response => {
                if (response.ok) {
                    return response.json()
                }
                throw new Error('Request failed!')
            },
            networkError => {
                console.log(networkError.message)
            }
        )
        .then(jsonResponse => {
            renderResponse(jsonResponse)
        })
}

/**
 * 12. async GET requests II
 */

const getData = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint')

        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        }
        throw new Error('Request failed!')
    } catch (error) {
        console.log(error)
    }
}

/**
 * 13. async GET requests III
 */

// Information to reach API
const urlD = 'https://api.datamuse.com/words?'
const queryParamsD = 'rel_jja='

// Selecting page elements
const inputFieldD = document.querySelector('#input')
const submitD = document.querySelector('#submit')
const responseFieldD = document.querySelector('#responseField')

// AJAX function
// Code goes here
const getSuggestionsD = async () => {
    const wordQueryD = inputFieldD.value
    const endpointD = `${urlD}${queryParamsD}${wordQueryD}`

    try {
        const response = await fetch(endpointD, { cache: 'no-cache' })
        if (response.ok) {
            const jsonResponse = await response.json()
            renderResponse(jsonResponse)
        }
    } catch (error) {
        console.log(error)
    }
}

// Clear previous results and display results to webpage
const displaySuggestionsD = event => {
    event.preventDefault()
    while (responseFieldD.firstChild) {
        responseFieldD.removeChild(responseFieldD.firstChild)
    }
    getSuggestionsD()
}

submitD.addEventListener('click', displaySuggestionsD)

/**
 * 15. async POST requests II
 */

const getDataB = async () => {
    try {
        const response = await fetch('https://api-to-call.com/endpoint', {
            method: 'POST',
            body: JSON.stringify({ id: 200 }),
        })
        if (response.ok) {
            const jsonResponse = await response.json()
            return jsonResponse
        }
        throw new Error('Request failed!')
    } catch (error) {
        console.log(error)
    }
}

/**
 * 16. async POST requests III
 */

// information to reach API
const urlE = 'https://api.rebrandly.com/v1/links'

// Some page elements
const inputFieldE = document.querySelector('#input')
const shortenButtonE = document.querySelector('#shorten')
const responseFieldE = document.querySelector('#responseField')

// AJAX functions
const shortenUrlE = async () => {
    const urlToShortenE = inputFieldE.value
    const dataE = JSON.stringify({ destination: urlToShortenE })

    try {
        const response = await fetch(urlE, {
            method: 'POST',
            body: dataE,
            headers: {
                'Content-type': 'application/json',
                apikey: apiKey,
            },
        })
        if (response.ok) {
            const jsonResponse = await response.json()
            renderResponse(jsonResponse)
        }
    } catch (error) {
        console.log(error)
    }
}
// Code goes here

// Clear page and call AJAX functions
const displayShortUrlE = event => {
    event.preventDefault()
    while (responseFieldE.firstChild) {
        responseFieldE.removeChild(responseFieldE.firstChild)
    }
    shortenUrlE()
}

shortenButtonE.addEventListener('click', displayShortUrlE)

/**
 * 17. Review requests II
 */

// GET and POST requests can be created a variety of ways.

// Use AJAX to asynchronously request data from APIs. fetch() and async/await are new functionalities developed in ES6 (promises) and ES8 respectively.

// Promises are a new type of JavaScript object that represent data that will eventually be returned from a request.

// fetch() is a web API that can be used to create requests. fetch() will return promises.

// We can chain .then() methods to handle promises returned by fetch().

// The .json() method converts a returned promise to a JSON object.

// async is a keyword that is used to create functions that will return promises.

// await is a keyword that is used to tell a program to continue moving through the message queue while a promise resolves.

// await can only be used within functions declared with async.
