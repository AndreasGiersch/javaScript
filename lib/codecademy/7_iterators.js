"use strict";

function iterators() {
  // the forEach method
  var fruits = ['mango', 'papaya', 'pineapple', 'apple'];
  fruits.forEach(function (element) {
    return console.log("I want to eat a ".concat(element));
  }); // the map method

  var animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];
  var secretMessage = animals.map(function (animal) {
    return animal.charAt(0);
  });
  console.log(secretMessage.join(''));
  var bigNumbers = [100, 200, 300, 400, 500];
  var smallNumbers = bigNumbers.map(function (number) {
    return number / 100;
  });
  console.log(smallNumbers);
  var randomNumbers = [375, 200, 3.14, 7, 13, 852];
  var rNumbers = randomNumbers.filter(function (number) {
    return number < 250;
  });
  console.log(rNumbers);
  var favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];
  var longFavoriteWords = favoriteWords.filter(function (word) {
    return word.length > 7;
  });
  console.log(longFavoriteWords); // findIndex method

  var anims = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];
  var foundAnimal = anims.findIndex(function (animal) {
    return animal === 'elephant';
  });
  var startsWithS = anims.findIndex(function (animal) {
    return animal.charAt(0) === 's';
  }); // the reduce method

  var newNumbers = [1, 3, 5, 7];
  var newSum = newNumbers.reduce(function (accumulator, currentValue) {
    console.log('The value of accumulator: ', accumulator);
    console.log('The value of currentValue: ', currentValue);
    return accumulator + currentValue;
  }, 10);
  console.log(newSum); // iterator documentation

  var words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];
  console.log(words.some(function (word) {
    return word.length < 6;
  }));
  var interestingWords = words.filter(function (word) {
    return word.length > 5;
  });
  console.log(interestingWords);
  console.log(interestingWords.every(function (word) {
    return word.length > 5;
  })); // choosing the right iterator

  var cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];
  var nums = [1, 50, 75, 200, 350, 525, 1000]; //  Choose a method that will return undefined

  cities.forEach(function (city) {
    return console.log('Have you visited ' + city + '?');
  }); // Choose a method that will return a new array

  var longCities = cities.filter(function (city) {
    return city.length > 7;
  }); // Choose a method that will return a single value

  var word = cities.reduce(function (acc, currVal) {
    return acc + currVal[0];
  }, 'C');
  console.log(word); // Choose a method that will return a new array

  var smallerNums = nums.map(function (num) {
    return num - 5;
  }); // Choose a method that will return a boolean value

  nums.some(function (num) {
    return num < 0;
  }); // review

  var callbackFunc = function callbackFunc(word) {
    if (word.includes('a')) return true;else return false;
  };

  var testArray = ['e', 'a', 'i', 'o', 'u'];
  var indexOfA = testArray.findIndex(callbackFunc);
  console.log(indexOfA);
  testArray.splice(indexOfA, indexOfA);
  console.log(testArray);
  var newIndexOfA = testArray.findIndex(callbackFunc);
  console.log(newIndexOfA);
  var iterChaining = testArray.map(function (word) {
    return word += 'test';
  }, 3).filter(function (word) {
    return word.includes('ot');
  });
  console.log(iterChaining);
  console.log(testArray.reduce(function (a, b) {
    return a + b;
  }));
}

iterators();