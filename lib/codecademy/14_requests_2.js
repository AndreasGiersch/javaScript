"use strict";

/**
 * 3. fetch() GET requests II
 */
fetch('https://api-to-call.com/endpoint').then(function (response) {
  if (response.ok) {
    return response.json();
  }

  throw new Error('Request failed!');
}, function (networkError) {
  console.log(networkError.message);
}).then(function (jsonResponse) {
  return jsonResponse;
});
/**
 * 4. fetch() GET requests III
 */
// Formats response to look presentable on webpage

var renderResponse = function renderResponse(res) {
  // Handles if res is falsey
  if (!res) {
    console.log(res.status);
  } // In case res comes back as a blank array


  if (!res.length) {
    responseField.innerHTML = '<p>Try again!</p><p>There were no suggestions found!</p>';
    return;
  } // Creates an empty array to contain the HTML strings


  var wordList = []; // Loops through the response and caps off at 10

  for (var i = 0; i < Math.min(res.length, 10); i++) {
    // creating a list of words
    wordList.push("<li>".concat(res[i].word, "</li>"));
  } // Joins the array of HTML strings into one string


  wordList = wordList.join(''); // Manipulates responseField to render the modified response

  responseField.innerHTML = "<p>You might be interested in:</p><ol>".concat(wordList, "</ol>");
  return;
}; // Renders response before it is modified


var renderRawResponse = function renderRawResponse(res) {
  // Takes the first 10 words from res
  var trimmedResponse = res.slice(0, 10); // Manipulates responseField to render the unformatted response

  responseField.innerHTML = "<text>".concat(JSON.stringify(trimmedResponse), "</text>");
}; // Renders the JSON that was returned when the Promise from fetch resolves.


var renderJsonResponse = function renderJsonResponse(res) {
  // Creates an empty object to store the JSON in key-value pairs
  var rawJson = {};

  for (var key in res) {
    rawJson[key] = res[key];
  } // Converts JSON into a string and adding line breaks to make it easier to read


  rawJson = JSON.stringify(rawJson).replace(/,/g, ', \n'); // Manipulates responseField to show the returned JSON.

  responseField.innerHTML = "<pre>".concat(rawJson, "</pre>");
}; // Information to reach API


var url = 'https://api.datamuse.com/words';
var queryParams = '?sl='; // Selects page elements

var inputField = document.querySelector('#input');
var submit = document.querySelector('#submit');
var responseField = document.querySelector('#responseField'); // AJAX function

var getSuggestions = function getSuggestions() {
  var wordQuery = inputField.value;
  var endpoint = "".concat(url).concat(queryParams).concat(wordQuery);
  fetch(endpoint, {
    cache: 'no-cache'
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Request failed!');
  }, function (networkError) {
    console.log(networkError.message);
  });
}; // Clears previous results and display results to webpage


var displaySuggestions = function displaySuggestions(event) {
  event.preventDefault();

  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }

  getSuggestions();
};

submit.addEventListener('click', displaySuggestions);
/**
 * 5. fetch() GET Requests IV
 */
// Information to reach API

var urlB = 'https://api.datamuse.com/words';
var queryParamsB = '?sl='; // Selects page elements

var inputFieldB = document.querySelector('#input');
var submitB = document.querySelector('#submit');
var responseFieldB = document.querySelector('#responseField'); // AJAX function

var getSuggestionsB = function getSuggestionsB() {
  var wordQueryB = inputFieldB.value;
  var endpointB = "".concat(urlB).concat(queryParamsB).concat(wordQueryB);
  fetch(endpointB, {
    cache: 'no-cache'
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Request failed!');
  }, function (networkError) {
    console.log(networkError.message);
  }).then(function (jsonResponse) {
    renderResponse(jsonResponse);
  });
}; // Clears previous results and display results to webpage


var displaySuggestionsB = function displaySuggestionsB(event) {
  event.preventDefault();

  while (responseFieldB.firstChild) {
    responseFieldB.removeChild(responseFieldB.firstChild);
  }

  getSuggestionsB();
};

submitB.addEventListener('click', displaySuggestionsB);
/**
 * 7. fetch() POST requests II
 */

fetch('https://api-to-call.com/endpoint', {
  method: 'POST',
  body: JSON.stringify({
    id: '200'
  })
}).then(function (response) {
  if (response.ok) {
    return response.json();
  }

  throw new Error('Request failed!');
}, function (networkError) {
  console.log(networkError.message);
}).then(function (jsonResponse) {
  return jsonResponse;
});