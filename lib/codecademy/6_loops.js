function loops() {
  // the for loop
  for (let i = 5; i < 11; i++) {
    console.log(i);
  } // reverse looping


  for (let counter = 3; counter >= 0; counter--) {
    console.log(counter);
  } // looping through arrays


  const vacationSpots = ['Bali', 'Paris', 'Tulum'];

  for (let i = 0; i < vacationSpots.length; i++) {
    console.log('I would love to visit ' + vacationSpots[i]);
  } // nested loops


  const bobsFollowers = ['Dan', 'Liza', 'Pete', 'Jane'];
  const tinasFollowers = ['Dan', 'Tyler', 'Jane'];
  let mutualFollowers = [];

  for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
      if (tinasFollowers[j] === bobsFollowers[i]) {
        mutualFollowers.push(tinasFollowers[j]);
      }
    }
  }

  console.log(mutualFollowers); // while loops

  const cards = ['diamond', 'spade', 'heart', 'club', 'a', 'b', 'c'];
  let currentCard;

  while (currentCard != 'spade') {
    currentCard = cards[Math.floor(Math.random() * 8)];
    console.log(currentCard);
  } // do-while loops


  const cupsOfSugarNeeded = 7;
  let cupsAdded = 0;

  do {
    cupsAdded++;
    console.log(cupsAdded);
  } while (cupsAdded < cupsOfSugarNeeded); // the break keyword


  const rapperArray = ["Lil' Kim", 'Jay-Z', 'Notorious B.I.G.', 'Tupac'];

  for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
    if (rapperArray[i] === 'Notorious B.I.G.') break;
  }

  console.log("And if you don't know, now you know."); // review

  let groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']; // groceryList.forEach(element => (console.log(element)))

  for (let i = 0; i < groceryList.length; i++) {
    console.log(groceryList[i]);
    console.log(groceryList[i + 1]);
    i++;
  }
}

loops();