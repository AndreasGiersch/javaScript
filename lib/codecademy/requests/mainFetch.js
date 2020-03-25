"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

// NOTE: wordSmith functions from lines 4 - 39
// NOTE: byteSize functions from lines 48 - 81 (remember to add your API key!)
// information to reach API
var dataMuseUrl = 'https://api.datamuse.com/words?';
var queryParams = 'rel_jjb='; // selecting page elements

var inputField = document.querySelector('#input');
var submit = document.querySelector('#submit');
var responseField = document.querySelector('#responseField'); // AJAX function

var getSuggestions = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var wordQuery, endpoint, response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            wordQuery = inputField.value;
            endpoint = dataMuseUrl + queryParams + wordQuery;
            _context.prev = 2;
            _context.next = 5;
            return fetch(endpoint);

          case 5:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 11;
              break;
            }

            _context.next = 9;
            return response.json();

          case 9:
            jsonResponse = _context.sent;
            renderWordResponse(jsonResponse);

          case 11:
            _context.next = 16;
            break;

          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](2);
            console.log(_context.t0);

          case 16:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[2, 13]]);
  }));

  return function getSuggestions() {
    return _ref.apply(this, arguments);
  };
}(); // clear previous results and display results to webpage


var displaySuggestions = function displaySuggestions(event) {
  event.preventDefault();

  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }

  getSuggestions();
};

submit.addEventListener('click', displaySuggestions); // information to reach Rebrandly API

var apiKey = '195391943fc441c78d5d8d94474fab57';
var rebrandlyEndpoint = 'https://api.rebrandly.com/v1/links'; // element selector

var shortenButton = document.querySelector('#shorten'); // AJAX functions

var shortenUrl = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var urlToShorten, data, response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            urlToShorten = inputField.value;
            data = JSON.stringify({
              destination: urlToShorten
            });
            _context2.prev = 2;
            _context2.next = 5;
            return fetch(rebrandlyEndpoint, {
              method: 'POST',
              body: data,
              headers: {
                'Content-type': 'application/json',
                apikey: apiKey
              }
            });

          case 5:
            response = _context2.sent;

            if (!response.ok) {
              _context2.next = 11;
              break;
            }

            _context2.next = 9;
            return response.json();

          case 9:
            jsonResponse = _context2.sent;
            renderByteResponse(jsonResponse);

          case 11:
            _context2.next = 16;
            break;

          case 13:
            _context2.prev = 13;
            _context2.t0 = _context2["catch"](2);
            console.log(_context2.t0);

          case 16:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, null, [[2, 13]]);
  }));

  return function shortenUrl() {
    return _ref2.apply(this, arguments);
  };
}(); // Clear page and call AJAX functions


var displayShortUrl = function displayShortUrl(event) {
  event.preventDefault();

  while (responseField.firstChild) {
    responseField.removeChild(responseField.firstChild);
  }

  shortenUrl();
};

shortenButton.addEventListener('click', displayShortUrl);