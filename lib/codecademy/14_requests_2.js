"use strict";

var _requests_lib = require("./14_requests_lib");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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
// Information to reach API

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
    (0, _requests_lib.renderResponseWordSmith)(jsonResponse);
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
/**
 * 8. fetch() POST requests III
 */
// Information to reach API

var apiKey = '195391943fc441c78d5d8d94474fab57';
var urlC = 'https://api.rebrandly.com/v1/links'; // Some page elements

var inputFieldC = document.querySelector('#input');
var shortenButtonC = document.querySelector('#shorten');
var responseFieldC = document.querySelector('#responseField'); // AJAX functions

var shortenUrl = function shortenUrl() {
  var urlToShorten = inputFieldC.value;
  var data = JSON.stringify({
    destination: urlToShorten
  });
  fetch(urlC, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      apikey: apiKey
    },
    body: data
  });
}; // Clear page and call AJAX functions


var displayShortUrl = function displayShortUrl(event) {
  event.preventDefault();

  while (responseFieldC.firstChild) {
    responseFieldC.removeChild(responseFieldC.firstChild);
  }

  shortenUrl();
};

shortenButtonC.addEventListener('click', displayShortUrl);
/**
 * 9. fetch() POST request IV
 */

var shortenUrlB = function shortenUrlB() {
  var urlToShorten = inputField.value;
  var data = JSON.stringify({
    destination: urlToShorten
  });
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      apikey: apiKey
    },
    body: data
  }).then(function (response) {
    if (response.ok) {
      return response.json();
    }

    throw new Error('Request failed!');
  }, function (networkError) {
    console.log(networkError.message);
  });
};
/**
 * 10. fetch() POST requests V
 */


var shortenUrlC = function shortenUrlC() {
  var urlToShorten = inputField.value;
  var data = JSON.stringify({
    destination: urlToShorten
  });
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
      apikey: apiKey
    },
    body: data
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
};
/**
 * 12. async GET requests II
 */


var getData = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return fetch('https://api-to-call.com/endpoint');

          case 3:
            response = _context.sent;

            if (!response.ok) {
              _context.next = 9;
              break;
            }

            _context.next = 7;
            return response.json();

          case 7:
            jsonResponse = _context.sent;
            return _context.abrupt("return", jsonResponse);

          case 9:
            throw new Error('Request failed!');

          case 12:
            _context.prev = 12;
            _context.t0 = _context["catch"](0);
            console.log(_context.t0);

          case 15:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[0, 12]]);
  }));

  return function getData() {
    return _ref.apply(this, arguments);
  };
}();
/**
 * 13. async GET requests III
 */
// Information to reach API


var urlD = 'https://api.datamuse.com/words?';
var queryParamsD = 'rel_jja='; // Selecting page elements

var inputFieldD = document.querySelector('#input');
var submitD = document.querySelector('#submit');
var responseFieldD = document.querySelector('#responseField'); // AJAX function
// Code goes here

var getSuggestionsD = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var wordQueryD, endpointD, response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            wordQueryD = inputFieldD.value;
            endpointD = "".concat(urlD).concat(queryParamsD).concat(wordQueryD);
            _context2.prev = 2;
            _context2.next = 5;
            return fetch(endpointD, {
              cache: 'no-cache'
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
            renderResponse(jsonResponse);

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

  return function getSuggestionsD() {
    return _ref2.apply(this, arguments);
  };
}(); // Clear previous results and display results to webpage


var displaySuggestionsD = function displaySuggestionsD(event) {
  event.preventDefault();

  while (responseFieldD.firstChild) {
    responseFieldD.removeChild(responseFieldD.firstChild);
  }

  getSuggestionsD();
};

submitD.addEventListener('click', displaySuggestionsD);
/**
 * 15. async POST requests II
 */

var getDataB = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            _context3.next = 3;
            return fetch('https://api-to-call.com/endpoint', {
              method: 'POST',
              body: JSON.stringify({
                id: 200
              })
            });

          case 3:
            response = _context3.sent;

            if (!response.ok) {
              _context3.next = 9;
              break;
            }

            _context3.next = 7;
            return response.json();

          case 7:
            jsonResponse = _context3.sent;
            return _context3.abrupt("return", jsonResponse);

          case 9:
            throw new Error('Request failed!');

          case 12:
            _context3.prev = 12;
            _context3.t0 = _context3["catch"](0);
            console.log(_context3.t0);

          case 15:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, null, [[0, 12]]);
  }));

  return function getDataB() {
    return _ref3.apply(this, arguments);
  };
}();
/**
 * 16. async POST requests III
 */
// information to reach API


var urlE = 'https://api.rebrandly.com/v1/links'; // Some page elements

var inputFieldE = document.querySelector('#input');
var shortenButtonE = document.querySelector('#shorten');
var responseFieldE = document.querySelector('#responseField'); // AJAX functions

var shortenUrlE = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var urlToShortenE, dataE, response, jsonResponse;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            urlToShortenE = inputFieldE.value;
            dataE = JSON.stringify({
              destination: urlToShortenE
            });
            _context4.prev = 2;
            _context4.next = 5;
            return fetch(urlE, {
              method: 'POST',
              body: dataE,
              headers: {
                'Content-type': 'application/json',
                apikey: apiKey
              }
            });

          case 5:
            response = _context4.sent;

            if (!response.ok) {
              _context4.next = 11;
              break;
            }

            _context4.next = 9;
            return response.json();

          case 9:
            jsonResponse = _context4.sent;
            renderResponse(jsonResponse);

          case 11:
            _context4.next = 16;
            break;

          case 13:
            _context4.prev = 13;
            _context4.t0 = _context4["catch"](2);
            console.log(_context4.t0);

          case 16:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4, null, [[2, 13]]);
  }));

  return function shortenUrlE() {
    return _ref4.apply(this, arguments);
  };
}(); // Code goes here
// Clear page and call AJAX functions


var displayShortUrlE = function displayShortUrlE(event) {
  event.preventDefault();

  while (responseFieldE.firstChild) {
    responseFieldE.removeChild(responseFieldE.firstChild);
  }

  shortenUrlE();
};

shortenButtonE.addEventListener('click', displayShortUrlE);
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