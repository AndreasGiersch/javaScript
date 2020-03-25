var XMLHttpRequest = require('xhr2')
import {
    renderResponseWordSmith,
    renderJsonResponseWordSmith,
    renderRawResponseWordSmith,
    renderResponseRebrandly,
    renderRawResponseRebrandly,
} from './14_requests_lib'

/**
 * For working examples using xhr requests with wordsmith and rebrandly look into the "requests"
 * folder
 */

/**
 * 4. XHR GET Requests II
 */

// an AJAX GET request written with xhlhttprequest object

const xhr = new XMLHttpRequest()

const url = 'https://api-to-call.com/endpoint'

xhr.responseType = 'json'

xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        return xhr.response
    }
}

xhr.open('GET', url)
xhr.send()

/**
 * 5. XHR GET Requests III
 */

// Information to reach API
const newUrl = 'https://api.datamuse.com/words?'
const queryParams = 'rel_rhy='

// Selecting page elements
const inputField = document.querySelector('#input')
const submit = document.querySelector('#submit')
const responseField = document.querySelector('#responseField')

// AJAX function
const getSuggestions = () => {
    const wordQuery = inputField.value
    const endpoint = newUrl + queryParams + wordQuery

    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponseWordSmith(xhr.response)
        }
    }
    xhr.open('GET', endpoint)
    xhr.send()
}

// Clear previous results and display results to webpage
const displaySuggestions = event => {
    event.preventDefault()
    while (responseField.firstChild) {
        responseField.removeChild(responseField.firstChild)
    }
    getSuggestions()
}

submit.addEventListener('click', displaySuggestions)

/**
 * 6. XHR GET Requests IV
 */

// Information to reach API
const urlN = 'https://api.datamuse.com/words?'
const queryParamsN = 'rel_jjb='
const additionalParamsN = '&topics='

// Selecting page elements
const inputFieldN = document.querySelector('#input')
const topicFieldN = document.querySelector('#topic')
const submitN = document.querySelector('#submit')
const responseFieldN = document.querySelector('#responseField')

// AJAX function
const getSuggestionsN = () => {
    const wordQuery = inputFieldN.value
    const topicQuery = topicFieldN.value
    const endpoint = `${urlN}${queryParamsN}${wordQuery}${additionalParamsN}${topicQuery}`

    const xhr = new XMLHttpRequest()
    xhr.responseType = 'json'

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            renderResponse(xhr.response)
        }
    }

    xhr.open('GET', endpoint)
    xhr.send()
}

// Clear previous results and display results to webpage
const displaySuggestionsN = event => {
    event.preventDefault()
    while (responseFieldN.firstChild) {
        responseFieldN.removeChild(responseFieldN.firstChild)
    }
    getSuggestionsN()
}

submitN.addEventListener('click', displaySuggestionsN)

/**
 * 8. XHR POST Requests II
 */

const xhrO = new XMLHttpRequest()

const urlO = 'https://api-to-call.com/endpoint'

const data = JSON.stringify({ id: '200' })

xhrO.responseType = 'json'

xhrO.onreadystatechange = () => {
    if (xhrO.readyState === XMLHttpRequest.DONE) {
        return xhrO.response
    }
}

xhrO.open('POST', urlO)
xhrO.send(data)

/**
 * 9. XHR POST Requests III
 */

// Information to reach API
const apiKey = '195391943fc441c78d5d8d94474fab57'
const urlP = 'https://api.rebrandly.com/v1/links'

// Some page elements
const inputFieldP = document.querySelector('#input')
const shortenButtonP = document.querySelector('#shorten')
const responseFieldP = document.querySelector('#responseField')

// AJAX functions
const shortenUrl = () => {
    const urlToShorten = inputFieldP.value
    const data = JSON.stringify({ destination: urlToShorten })

    const xhrP = new XMLHttpRequest()
    xhrP.responseType = 'json'
    xhrP.onreadystatechange = () => {
        if (xhrP.readyState === XMLHttpRequest.DONE) {
            renderResponseRebrandly(xhrP.response)
        }
    }

    xhrP.open('POST', urlP)

    xhrP.setRequestHeader('Content-type', 'application/json')
    xhrP.setRequestHeader('apikey', apiKey)
    xhrP.send(data)
}

// Clear page and call AJAX functions
const displayShortUrl = event => {
    event.preventDefault()
    while (responseFieldP.firstChild) {
        responseFieldP.removeChild(responseFieldP.firstChild)
    }
    shortenUrl()
}

shortenButtonP.addEventListener('click', displayShortUrl)

/**
 * 10. Review requests I
 */

// JavaScript is the language of the web because of its asynchronous capabilities. AJAX, which stands for Asynchronous JavaScript and XML, is a set of tools that are used together to take advantage of JavaScript’s asynchronous capabilities.

// There are many HTTP request methods, two of which are GET and POST.

// GET requests only request information from other sources.

// POST methods can introduce new information to other sources in addition to requesting it.

// GET requests can be written using an XMLHttpRequest object and vanilla JavaScript.

// POST requests can also be written using an XMLHttpRequest object and vanilla JavaScript.

// Writing GET and POST requests with XHR objects and vanilla JavaScript requires constructing the XHR object using new, setting the responseType, creating a function that will handle the response object, and opening and sending the request.

// To add a query string to a URL endpoint you can use ? and include a parameter.

// To provide additional parameters, use & and then include a key-value pair, joined by =.

// Determining how to correctly write the requests and how to properly implement them requires carefully reading the documentation of the API with which you’re working.
