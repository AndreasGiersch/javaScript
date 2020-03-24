"use strict";

// wordSmith helperFunctions are on lines 4 - 50
// byteSize helperFunctions are on lines 52 - 76
// Formats Response to look presentable on webpage
var renderWordResponse = function renderWordResponse(res) {
  // Handles if res is falsey
  if (!res) {
    console.log(res.status);
  } // In case res comes back as a blank array


  if (!res.length) {
    responseField.innerHTML = '<p>Try again!</p><p>There were no suggestions found!</p>';
    return;
  } // Creates an array to contain the HTML strings


  var wordList = []; // Loops through the response and maxxing out at 10

  for (var i = 0; i < Math.min(res.length, 10); i++) {
    // Creates a list of words
    wordList.push("<li>".concat(res[i].word, "</li>"));
  } // Joins the array of HTML strings into one string


  wordList = wordList.join(''); // Manipulates responseField to render the modified response

  responseField.innerHTML = "<p>You might be interested in:</p><ol>".concat(wordList, "</ol>");
  return;
}; // Renders response before it is modified


var renderRawWordResponse = function renderRawWordResponse(res) {
  // Takes the first 10 words from res
  var trimmedResponse = res.slice(0, 10); // Manipulates responseField to render the unformatted response

  responseField.innerHTML = "<text>".concat(JSON.stringify(trimmedResponse), "</text>");
}; // Renders the JSON that was returned when the Promise from fetch resolves.


var renderJsonWordResponse = function renderJsonWordResponse(res) {
  // Creating an empty object to store the JSON in key-value pairs
  var rawJson = {};

  for (var key in response) {
    rawJson[key] = response[key];
  } // Converting JSON into a string and adding line breaks to make it easier to read


  rawJson = JSON.stringify(rawJson).replace(/,/g, ', \n'); // Manipulates responseField to show the returned JSON.

  responseField.innerHTML = "<pre>".concat(rawJson, "</pre>");
}; // Manipulates responseField to render a formatted and appropriate message


var renderByteResponse = function renderByteResponse(res) {
  if (res.errors) {
    // Will change the HTML to show this error message if the response had an error
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // If there was no error, then the HTML will show this message
    responseField.innerHTML = "<p>Your shortened url is: </p><p> ".concat(res.shortUrl, " </p>");
  }
}; // Manipulates responseField to render an unformatted response


var renderRawByteResponse = function renderRawByteResponse(res) {
  if (res.errors) {
    // Changes the HTML to show this error message if the response had an error
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Changes the HTML to show this raw response if there was no error
    // Formats the response into a more organized structure
    var structuredRes = JSON.stringify(res).replace(/,/g, ', \n');
    structuredRes = "<pre>".concat(structuredRes, "</pre>");
    responseField.innerHTML = "".concat(structuredRes);
  }
};