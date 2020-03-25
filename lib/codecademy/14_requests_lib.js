"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderRawResponseRebrandly = exports.renderResponseRebrandly = exports.renderJsonResponseWordSmith = exports.renderRawResponseWordSmith = exports.renderResponseWordSmith = void 0;

// Formats response to look presentable on webpage
var renderResponseWordSmith = function renderResponseWordSmith(res) {
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


exports.renderResponseWordSmith = renderResponseWordSmith;

var renderRawResponseWordSmith = function renderRawResponseWordSmith(res) {
  // Takes the first 10 words from res
  var trimmedResponse = res.slice(0, 10); // Manipulates responseField to render the unformatted response

  responseField.innerHTML = "<text>".concat(JSON.stringify(trimmedResponse), "</text>");
}; // Renders the JSON that was returned when the Promise from fetch resolves.


exports.renderRawResponseWordSmith = renderRawResponseWordSmith;

var renderJsonResponseWordSmith = function renderJsonResponseWordSmith(res) {
  // creating an empty object to store the JSON in key-value pairs
  var rawJson = {};

  for (var key in response) {
    rawJson[key] = response[key];
  } // converting JSON into a string and adding line breaks to make it easier to read


  rawJson = JSON.stringify(rawJson).replace(/,/g, ', \n'); // manipulates responseField to show the returned JSON.

  responseField.innerHTML = "<pre>".concat(rawJson, "</pre>");
}; // Manipulates responseField to render a formatted and appropriate message


exports.renderJsonResponseWordSmith = renderJsonResponseWordSmith;

var renderResponseRebrandly = function renderResponseRebrandly(res) {
  // Displays either message depending on results
  if (res.errors) {
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    responseField.innerHTML = "<p>Your shortened url is: </p><p> ".concat(res.shortUrl, " </p>");
  }
}; // Manipulates responseField to render an unformatted response


exports.renderResponseRebrandly = renderResponseRebrandly;

var renderRawResponseRebrandly = function renderRawResponseRebrandly(res) {
  // Displays either message depending on results
  if (res.errors) {
    responseField.innerHTML = "<p>Sorry, couldn't format your URL.</p><p>Try again.</p>";
  } else {
    // Adds line breaks for JSON
    var structuredRes = JSON.stringify(res).replace(/,/g, ', \n');
    structuredRes = "<pre>".concat(structuredRes, "</pre>");
    responseField.innerHTML = "".concat(structuredRes);
  }
};

exports.renderRawResponseRebrandly = renderRawResponseRebrandly;