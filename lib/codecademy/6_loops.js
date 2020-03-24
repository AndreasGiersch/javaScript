"use strict";

function loops() {
  // the for loop
  for (var i = 5; i < 11; i++) {
    console.log(i);
  } // reverse looping


  for (var counter = 3; counter >= 0; counter--) {
    console.log(counter);
  } // looping through arrays


  var vacationSpots = ['Bali', 'Paris', 'Tulum'];

  for (var _i = 0; _i < vacationSpots.length; _i++) {
    console.log('I would love to visit ' + vacationSpots[_i]);
  } // nested loops


  var bobsFollowers = ['Dan', 'Liza', 'Pete', 'Jane'];
  var tinasFollowers = ['Dan', 'Tyler', 'Jane'];
  var mutualFollowers = [];

  for (var _i2 = 0; _i2 < bobsFollowers.length; _i2++) {
    for (var j = 0; j < tinasFollowers.length; j++) {
      if (tinasFollowers[j] === bobsFollowers[_i2]) {
        mutualFollowers.push(tinasFollowers[j]);
      }
    }
  }

  console.log(mutualFollowers); // while loops

  var cards = ['diamond', 'spade', 'heart', 'club', 'a', 'b', 'c'];
  var currentCard;

  while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 8)];
    console.log(currentCard);
  } // do-while loops


  var cupsOfSugarNeeded = 7;
  var cupsAdded = 0;

  do {
    cupsAdded++;
    console.log(cupsAdded);
  } while (cupsAdded < cupsOfSugarNeeded); // the break keyword


  var rapperArray = ["Lil' Kim", 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];

  for (var _i3 = 0; _i3 < rapperArray.length; _i3++) {
    console.log(rapperArray[_i3]);
    if (rapperArray[_i3] === 'Notorious B.I.G.') break;
  }

  console.log("And if you don't know, now you know."); // review

  var groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']; // groceryList.forEach(element => (console.log(element)))

  for (var _i4 = 0; _i4 < groceryList.length; _i4++) {
    console.log(groceryList[_i4]);
    console.log(groceryList[_i4 + 1]);
    _i4++;
  }
}

loops();