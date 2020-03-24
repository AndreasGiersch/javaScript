"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkAvailability = exports.shipOrder = exports.processPayment = exports.checkInventory = exports.checkInventoryInitial = exports.inventory = void 0;
var store = {
  sunglasses: {
    inventory: 817,
    cost: 9.99
  },
  pants: {
    inventory: 236,
    cost: 7.99
  },
  bags: {
    inventory: 17,
    cost: 12.99
  }
};
var inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344
};
exports.inventory = inventory;

var checkInventoryInitial = function checkInventoryInitial(order) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var inStock = order.every(function (item) {
        return inventory[item[0]] >= item[1];
      });

      if (inStock) {
        resolve("Thank you. Your order was successful.");
      } else {
        reject("We're sorry. Your order could not be completed because some items are sold out.");
      }
    }, 1000);
  });
};

exports.checkInventoryInitial = checkInventoryInitial;

var checkInventory = function checkInventory(order) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var itemsArr = order.items;
      var inStock = itemsArr.every(function (item) {
        return store[item[0]].inventory >= item[1];
      });

      if (inStock) {
        var total = 0;
        itemsArr.forEach(function (item) {
          total += item[1] * store[item[0]].cost;
        });
        console.log("All of the items are in stock. The total cost of the order is ".concat(total, "."));
        resolve([order, total]);
      } else {
        reject("The order could not be completed because some items are sold out.");
      }
    }, generateRandomDelay());
  });
};

exports.checkInventory = checkInventory;

var processPayment = function processPayment(responseArray) {
  var order = responseArray[0];
  var total = responseArray[1];
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      var hasEnoughMoney = order.giftcardBalance >= total; // For simplicity we've omited a lot of functionality
      // If we were making more realistic code, we would want to update the giftcardBalance and the inventory

      if (hasEnoughMoney) {
        console.log("Payment processed with giftcard. Generating shipping label.");
        var trackingNum = generateTrackingNumber();
        resolve([order, trackingNum]);
      } else {
        reject("Cannot process order: giftcard balance was insufficient.");
      }
    }, generateRandomDelay());
  });
};

exports.processPayment = processPayment;

var shipOrder = function shipOrder(responseArray) {
  var order = responseArray[0];
  var trackingNum = responseArray[1];
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("The order has been shipped. The tracking number is: ".concat(trackingNum, "."));
    }, generateRandomDelay());
  });
}; // This function generates a random number to serve as a "tracking number" on the shipping label. In real life this wouldn't be a random number


exports.shipOrder = shipOrder;

function generateTrackingNumber() {
  return Math.floor(Math.random() * 1000000);
} // This function generates a random number to serve as delay in a setTimeout() since real asynchrnous operations take variable amounts of time


function generateRandomDelay() {
  return Math.floor(Math.random() * 2000);
}

var checkAvailability = function checkAvailability(itemName, distributorName) {
  console.log("Checking availability of ".concat(itemName, " at ").concat(distributorName, "..."));
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (restockSuccess()) {
        console.log("".concat(itemName, " are in stock at ").concat(distributorName));
        resolve(itemName);
      } else {
        reject("Error: ".concat(itemName, " is unavailable from ").concat(distributorName, " at this time."));
      }
    }, 1000);
  });
}; // This is a function that returns true 80% of the time
// We're using it to simulate a request to the distributor being successful this often


exports.checkAvailability = checkAvailability;

function restockSuccess() {
  return Math.random() > 0.2;
}