"use strict";

function arrays() {
  /**
   * 2. Creating arrays
   */
  var hobbies = ['one', 'two', 'three'];
  console.log(hobbies);
  /**
   * 3. Accessing elements
   */

  var famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
  var listItem = famousSayings[0];
  console.log(listItem);
  console.log(famousSayings[2]);
  console.log(famousSayings[3]);
  var testString = 'Kraubio';
  console.log(testString[2] === 'a' ? 'Yes' : 'fail');
  /**
   * 4. Updating elements
   */

  var ingredients = ['bread', 'tomatoes', 'milk'];
  ingredients[1] = 'avocados';
  /**
   * 5. Arrays with let and const
   */

  var condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];
  var utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];
  condiments[0] = 'Mayo';
  console.log(condiments);
  condiments = ['Mayo'];
  console.log(condiments);
  utensils[3] = 'Spoon';
  console.log(utensils);
  /**
   * 6. The length prop
   */

  var objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];
  console.log(objectives.length);
  /**
   * 7. The push() method
   */

  var chores = ['wash dishes', 'do laundry', 'take out trash'];
  chores.push('feed baby', 'walk the dog');
  console.log(chores);
  console.log(chores.push('blabla chore'));
  /**
   * 8. The pop() method
   */

  var tasks = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];
  tasks.pop();
  console.log(tasks);
  console.log(tasks.pop());
  /**
   * 9. More array methods
   */

  var groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];
  groceryList.shift();
  console.log(groceryList);
  groceryList.unshift('popcorn');
  console.log(groceryList);
  console.log(groceryList.slice(1, 4));
  console.log(groceryList);
  var pastaIndex = groceryList.indexOf('pasta');
  console.log(pastaIndex);
  /**
   * 10. Arrays and functions
   */

  var concept = ['arrays', 'can', 'be', 'mutated'];

  function changeArr(arr) {
    arr[3] = 'MUTATED';
  }

  changeArr(concept);
  console.log(concept);

  function removeElement(newArr) {
    newArr.pop();
  }

  removeElement(concept);
  console.log(concept);
  /**
   * 11. Nested Arrays
   */

  var numberClusters = [[1, 2], [3, 4], [5, 6]];
  var target = numberClusters[2][1];
  console.log(target);
  /**
   * 12. Review
   */

  var test = [1, 2, 3, 4, 5, 6, 7];
  var lastEl = test[test.length - 1];
  console.log(lastEl);
  var textArr = ['test', 'test1', 'test2'];
  var arrString = '';
  textArr.forEach(function (element) {
    return arrString += element;
  });
  console.log(arrString);
  console.log(textArr.push(12));
  var pushReturn = textArr.push(1000);
  console.log('push returns ' + pushReturn);
  var nestArray = [['a', 'b'], [1, 2], [true, false]];
  console.log(nestArray[0][1] + ' is ' + nestArray[1][1] + ' ' + nestArray[2][0]);
}

arrays();