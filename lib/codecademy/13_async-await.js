"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

require('regenerator-runtime/runtime');
/**
 * 2. the async keyword
 */


function withConstructor(num) {
  return new Promise(function (resolve, reject) {
    if (num === 0) {
      resolve('zero');
    } else {
      resolve('not zero');
    }
  });
}

withConstructor(0).then(function (resolveValue) {
  console.log(" withConstructor(0) returned a promise which resolved to: ".concat(resolveValue, "."));
}); // Write your code below:

function withAsync(_x) {
  return _withAsync.apply(this, arguments);
} // Leave this commented out until step 3:


function _withAsync() {
  _withAsync = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(num) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(num === 0)) {
              _context.next = 4;
              break;
            }

            return _context.abrupt("return", 'zero');

          case 4:
            return _context.abrupt("return", 'not zero');

          case 5:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _withAsync.apply(this, arguments);
}

withAsync(100).then(function (resolveValue) {
  console.log(" withAsync(100) returned a promise which resolved to: ".concat(resolveValue, "."));
});
/**
 * 3. The await operator
 */
// this is the brainstormDinner function. It's a little silly. It returns a promise
// that uses a series of setTimeout() functions to simulate a time-consuming asynchronous
// action. It's a good example of "callback hell" or "the pyramid of doom," two ways
// people describe how confusing a bunch of nested callback functions can become.

var brainstormDinner = function brainstormDinner() {
  return new Promise(function (resolve, reject) {
    console.log("I have to decide what's for dinner...");
    setTimeout(function () {
      console.log('Should I make salad...?');
      setTimeout(function () {
        console.log('Should I make ramen...?');
        setTimeout(function () {
          console.log('Should I make eggs...?');
          setTimeout(function () {
            console.log('Should I make chicken...?');
            resolve('beans');
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  });
}; // Native promise version:


function nativePromiseDinner() {
  brainstormDinner().then(function (meal) {
    console.log("I'm going to make ".concat(meal, " for dinner."));
  });
} // async/await version:


function announceDinner() {
  return _announceDinner.apply(this, arguments);
}

function _announceDinner() {
  _announceDinner = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
    var result;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return brainstormDinner();

          case 2:
            result = _context2.sent;
            console.log("I'm going to make ".concat(result, " for dinner."));

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));
  return _announceDinner.apply(this, arguments);
}

announceDinner();
/**
 * 4. writing async functions
 */
// This is the shopForBeans function. It uses a setTimeout() function to simulate a
// time-consuming asynchronous action. The function returns a promise with a resolved
//  value of a string representing a type of bean. It settles on a random beanType
//  from the beanTypes array using Math.random().

var shopForBeans = function shopForBeans() {
  return new Promise(function (resolve, reject) {
    var beanTypes = ['kidney', 'fava', 'pinto', 'black', 'garbanzo'];
    setTimeout(function () {
      var randomIndex = Math.floor(Math.random() * 5);
      var beanType = beanTypes[randomIndex];
      console.log("2. I bought ".concat(beanType, " beans because they were on sale."));
      resolve(beanType);
    }, 1000);
  });
};

function getBeans() {
  return _getBeans.apply(this, arguments);
}

function _getBeans() {
  _getBeans = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
    var value;
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            console.log("1. Heading to the store to buy beans...");
            _context3.next = 3;
            return shopForBeans();

          case 3:
            value = _context3.sent;
            console.log("3. Great! I'm making ".concat(value, " beans for dinner tonight!"));

          case 5:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));
  return _getBeans.apply(this, arguments);
}

getBeans();
/**
 * 5. Handling dependent promises
 */

var soakTheBeans = function soakTheBeans(beanType) {
  return new Promise(function (resolve, reject) {
    console.log('Time to soak the beans.');
    setTimeout(function () {
      console.log("... The ".concat(beanType, " beans are softened."));
      resolve(true);
    }, 1000);
  });
};

var cookTheBeans = function cookTheBeans(isSoftened) {
  return new Promise(function (resolve, reject) {
    console.log('Time to cook the beans.');
    setTimeout(function () {
      if (isSoftened) {
        console.log('... The beans are cooked!');
        resolve('\n\nDinner is served!');
      }
    }, 1000);
  });
}; // Write your code below:


function makeBeans() {
  return _makeBeans.apply(this, arguments);
}

function _makeBeans() {
  _makeBeans = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
    var type, isSoft, dinner;
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return shopForBeans();

          case 2:
            type = _context4.sent;
            _context4.next = 5;
            return soakTheBeans(type);

          case 5:
            isSoft = _context4.sent;
            _context4.next = 8;
            return cookTheBeans(isSoft);

          case 8:
            dinner = _context4.sent;
            console.log(dinner);

          case 10:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));
  return _makeBeans.apply(this, arguments);
}

makeBeans();
/**
 * 6. Handle errors
 */
//This function returns true 50% of the time.

var randomSuccess = function randomSuccess() {
  var num = Math.random();

  if (num < 0.5) {
    return true;
  } else {
    return false;
  }
}; //This function returns a promise that resolves half of the time and rejects half of the time


var cookBeanSouffle = function cookBeanSouffle() {
  return new Promise(function (resolve, reject) {
    console.log('Fingers crossed... Putting the Bean Souffle in the oven');
    setTimeout(function () {
      var success = randomSuccess();

      if (success) {
        resolve('Bean Souffle');
      } else {
        reject('Dinner is ruined!');
      }
    }, 1000);
  });
}; // Write your code below:


function hostDinnerParty() {
  return _hostDinnerParty.apply(this, arguments);
}

function _hostDinnerParty() {
  _hostDinnerParty = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
    var result;
    return regeneratorRuntime.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.prev = 0;
            _context5.next = 3;
            return cookBeanSouffle();

          case 3:
            result = _context5.sent;
            console.log("".concat(result, " is served!"));
            _context5.next = 11;
            break;

          case 7:
            _context5.prev = 7;
            _context5.t0 = _context5["catch"](0);
            console.log(_context5.t0);
            console.log('Ordering a pizza!');

          case 11:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return _hostDinnerParty.apply(this, arguments);
}

hostDinnerParty();
/**
 * 7. Handling independent promises
 */

var cookBeans = function cookBeans() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('beans');
    }, 1000);
  });
};

var steamBroccoli = function steamBroccoli() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('broccoli');
    }, 1000);
  });
};

var cookRice = function cookRice() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('rice');
    }, 1000);
  });
};

var bakeChicken = function bakeChicken() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('chicken');
    }, 1000);
  });
}; // Write your code below:


function serveDinner() {
  return _serveDinner.apply(this, arguments);
}

function _serveDinner() {
  _serveDinner = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
    var vegetablePromise, starchPromise, proteinPromise, sidePromise;
    return regeneratorRuntime.wrap(function _callee6$(_context6) {
      while (1) {
        switch (_context6.prev = _context6.next) {
          case 0:
            vegetablePromise = steamBroccoli();
            starchPromise = cookRice();
            proteinPromise = bakeChicken();
            sidePromise = cookBeans();
            _context6.t0 = console;
            _context6.t4 = "Dinner is served. We're having ";
            _context6.next = 8;
            return vegetablePromise;

          case 8:
            _context6.t5 = _context6.sent;
            _context6.t3 = _context6.t4.concat.call(_context6.t4, _context6.t5, ", ");
            _context6.next = 12;
            return starchPromise;

          case 12:
            _context6.t6 = _context6.sent;
            _context6.t2 = _context6.t3.concat.call(_context6.t3, _context6.t6, ", ");
            _context6.next = 16;
            return proteinPromise;

          case 16:
            _context6.t7 = _context6.sent;
            _context6.t1 = _context6.t2.concat.call(_context6.t2, _context6.t7, ", and ");
            _context6.next = 20;
            return sidePromise;

          case 20:
            _context6.t8 = _context6.sent;
            _context6.t9 = _context6.t1.concat.call(_context6.t1, _context6.t8, ".");

            _context6.t0.log.call(_context6.t0, _context6.t9);

          case 23:
          case "end":
            return _context6.stop();
        }
      }
    }, _callee6);
  }));
  return _serveDinner.apply(this, arguments);
}

serveDinner();
/**
 * 8. Await Promise.all()
 */
// Write your code below:

function serveDinnerAgain() {
  return _serveDinnerAgain.apply(this, arguments);
}

function _serveDinnerAgain() {
  _serveDinnerAgain = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
    var foodArray;
    return regeneratorRuntime.wrap(function _callee7$(_context7) {
      while (1) {
        switch (_context7.prev = _context7.next) {
          case 0:
            _context7.next = 2;
            return Promise.all([steamBroccoli(), cookRice(), bakeChicken(), cookBeans()]);

          case 2:
            foodArray = _context7.sent;
            console.log("Dinner is served. We're having ".concat(foodArray[0], ", ").concat(foodArray[1], ", ").concat(foodArray[2], ", and ").concat(foodArray[3], "."));

          case 4:
          case "end":
            return _context7.stop();
        }
      }
    }, _callee7);
  }));
  return _serveDinnerAgain.apply(this, arguments);
}

serveDinnerAgain();
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