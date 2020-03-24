"use strict";

// NOTE: wordSmith functions from lines 4 - 39
// NOTE: byteSize functions from lines 41 - 76 (remember to add your API key!)
// information to reach API
var dataMuseUrl = 'https://api.datamuse.com/words?';
var queryParams = 'rel_jjb='; // selecting page elements

var inputField = document.querySelector('#input');
var submit = document.querySelector('#submit');
var responseField = document.querySelector('#responseField'); // AJAX function

var getSuggestions = function getSuggestions() {
  var wordQuery = inputField.value;
  var endPoint = dataMuseUrl + queryParams + wordQuery;
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderWordResponse(xhr.response);
    }
  };

  xhr.open('GET', endPoint);
  xhr.send();
}; // clear previous results and display results to webpage


var displaySuggestions = function displaySuggestions(event) {
  event.preventDefault();

  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }

  getSuggestions();
};

submit.addEventListener('click', displaySuggestions); // information to reach Rebrandly API

var apiKey = '195391943fc441c78d5d8d94474fab57';
var rebrandlyUrl = 'https://api.rebrandly.com/v1/links'; // element selector

var shortenButton = document.querySelector('#shorten'); // AJAX functions

var shortenUrl = function shortenUrl() {
  var urlToShorten = inputField.value;
  var data = JSON.stringify({
    destination: urlToShorten
  });
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'json';

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      renderByteResponse(xhr.response);
    }
  };

  xhr.open('POST', rebrandlyUrl);
  xhr.setRequestHeader('Content-type', 'application/json');
  xhr.setRequestHeader('apikey', apiKey);
  xhr.send(data);
}; // Clear page and call AJAX functions


var displayShortUrl = function displayShortUrl(event) {
  event.preventDefault();

  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }

  shortenUrl();
};

shortenButton.addEventListener('click', displayShortUrl);