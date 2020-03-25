"use strict";

var _requests_lib = require("./14_requests_lib");

var XMLHttpRequest = require('xhr2');

/**
 * For working examples using xhr requests with wordsmith and rebrandly look into the "requests"
 * folder
 */

/**
 * 4. XHR GET Requests II
 */
// an AJAX GET request written with xhlhttprequest object
var xhr = new XMLHttpRequest();
var url = 'https://api-to-call.com/endpoint';
xhr.responseType = 'json';

xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    return xhr.response;
  }
};

xhr.open('GET', url);
xhr.send();
/**
 * 5. XHR GET Requests III
 */
// Information to reach API

var newUrl = 'https://api.datamuse.com/words?';
var queryParams = 'rel_rhy='; // Selecting page elements

var inputField = document.querySelector('#input');
var submit = document.querySelector('#submit');
var responseField = document.querySelector('#responseField'); // AJAX function

var getSuggestions = function getSuggestions() {
  var wordQuery = inputField.value;
  var endpoint = newUrl + queryParams + wordQuery;
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      (0, _requests_lib.renderResponseWordSmith)(xhr.response);
    }
  };

  xhr.open('GET', endpoint);
  xhr.send();
}; // Clear previous results and display results to webpage


var displaySuggestions = function displaySuggestions(event) {
  event.preventDefault();

  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }

  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
/**
 * 6. XHR GET Requests IV
 */
// Information to reach API

var urlN = 'https://api.datamuse.com/words?';
var queryParamsN = 'rel_jjb=';
var additionalParamsN = '&topics='; // Selecting page elements

var inputFieldN = document.querySelector('#input');
var topicFieldN = document.querySelector('#topic');
var submitN = document.querySelector('#submit');
var responseFieldN = document.querySelector('#responseField'); // AJAX function

var getSuggestionsN = function getSuggestionsN() {
  var wordQuery = inputFieldN.value;
  var topicQuery = topicFieldN.value;
  var endpoint = "".concat(urlN).concat(queryParamsN).concat(wordQuery).concat(additionalParamsN).concat(topicQuery);
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderResponse(xhr.response);
    }
  };

  xhr.open('GET', endpoint);
  xhr.send();
}; // Clear previous results and display results to webpage


var displaySuggestionsN = function displaySuggestionsN(event) {
  event.preventDefault();

  while (responseFieldN.firstChild) {
    responseFieldN.removeChild(responseFieldN.firstChild);
  }

  getSuggestionsN();
};

submitN.addEventListener('click', displaySuggestionsN);
/**
 * 8. XHR POST Requests II
 */

var xhrO = new XMLHttpRequest();
var urlO = 'https://api-to-call.com/endpoint';
var data = JSON.stringify({
  id: '200'
});
xhrO.responseType = 'json';

xhrO.onreadystatechange = function () {
  if (xhrO.readyState === XMLHttpRequest.DONE) {
    return xhrO.response;
  }
};

xhrO.open('POST', urlO);
xhrO.send(data);
/**
 * 9. XHR POST Requests III
 */
// Information to reach API

var apiKey = '195391943fc441c78d5d8d94474fab57';
var urlP = 'https://api.rebrandly.com/v1/links'; // Some page elements

var inputFieldP = document.querySelector('#input');
var shortenButtonP = document.querySelector('#shorten');
var responseFieldP = document.querySelector('#responseField'); // AJAX functions

var shortenUrl = function shortenUrl() {
  var urlToShorten = inputFieldP.value;
  var data = JSON.stringify({
    destination: urlToShorten
  });
  var xhrP = new XMLHttpRequest();
  xhrP.responseType = 'json';

  xhrP.onreadystatechange = function () {
    if (xhrP.readyState === XMLHttpRequest.DONE) {
      (0, _requests_lib.renderResponseRebrandly)(xhrP.response);
    }
  };

  xhrP.open('POST', urlP);
  xhrP.setRequestHeader('Content-type', 'application/json');
  xhrP.setRequestHeader('apikey', apiKey);
  xhrP.send(data);
}; // Clear page and call AJAX functions


var displayShortUrl = function displayShortUrl(event) {
  event.preventDefault();

  while (responseFieldP.firstChild) {
    responseFieldP.removeChild(responseFieldP.firstChild);
  }

  shortenUrl();
};

shortenButtonP.addEventListener('click', displayShortUrl);
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