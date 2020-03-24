"use strict";

function objectsAdvanced() {
  /**
   * 2. the this keyword
   */
  var robot = {
    model: '1E78V2',
    energyLevel: 100,
    provideInfo: function provideInfo() {
      return "I am ".concat(this.model, " and my current energy level is ").concat(this.energyLevel);
    }
  };
  console.log(robot.provideInfo());
  /**
   * 3. arrow functions and this
   */

  var robot1 = {
    energyLevel: 100,
    checkEnergy: function checkEnergy() {
      console.log("Energy is currently at ".concat(this.energyLevel, "%."));
    }
  };
  robot1.checkEnergy();
  /**
   * 4. privacy
   */

  var robot2 = {
    _energyLevel: 100,
    recharge: function recharge() {
      this._energyLevel += 30;
      console.log("Recharged! Energy is currently at ".concat(this._energyLevel, "%."));
    }
  };
  robot2._energyLevel = 'high';
  robot2.recharge();
  /**
   * 5. getters
   */

  var robot3 = {
    _model: '1E78V2',
    _energyLevel: 100,

    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return "My current energy level is ".concat(this._energyLevel);
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }

  };
  console.log(robot3.energyLevel);
  /**
   * 6. setters
   */

  var robot4 = {
    _model: '1E78V2',
    _energyLevel: 100,

    get energyLevel() {
      if (typeof this._energyLevel === 'number') {
        return "My current energy level is ".concat(this._energyLevel);
      } else {
        return 'System malfunction: cannot retrieve energy level';
      }
    }

  };
  console.log(robot4.energyLevel);
  /**
   * 7. factory functions
   */

  var robotFactory = function robotFactory(model, mobile) {
    return {
      model: model,
      mobile: mobile,
      beep: function beep() {
        console.log("Beep Boop! I am ".concat(this.model, "!"));
      }
    };
  };

  var tinCan = robotFactory('P-500', true);
  tinCan.beep();
  console.log(tinCan.mobile ? 'I am mobile' : 'I am immobile');
  /**
   * 8. property value shorthands
   */

  function robotFactory2(model, mobile) {
    return {
      model: model,
      mobile: mobile,
      beep: function beep() {
        console.log('Beep Boop');
      }
    };
  } // To check that the property value shorthand technique worked:


  var newRobot = robotFactory2('P-501', false);
  console.log(newRobot.model);
  console.log(newRobot.mobile);
  /**
   * 9. Destructuring (destruct)
   */

  var robot5 = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep: function beep() {
        console.log('Beep Boop');
      },
      fireLaser: function fireLaser() {
        console.log('Pew Pew');
      }
    }
  };
  var functionality = robot5.functionality;
  functionality.beep();
  /**
   * 10. built-in object methods
   */

  var robot6 = {
    model: 'SAL-1000',
    mobile: true,
    sentient: false,
    armor: 'Steel-plated',
    energyLevel: 75
  }; // What is missing in the following method call?

  var robotKeys = Object.keys(robot6);
  console.log(robotKeys); // Declare robotEntries below this line:

  var robotEntries = Object.entries(robot6);
  console.log(robotEntries); // Declare newRobot below this line:

  newProps = {
    laserBlaster: true,
    voiceRecognition: true
  };
  var newRobot2 = Object.assign(newProps, robot6);
  console.log(newRobot2);
  /**
   * 11. review
   */

  var testObject = {
    _name: 'testa',
    _value: 17,

    get name() {
      return this._name;
    },

    set name(newName) {
      this._name = newName;
    },

    testThis: function testThis() {
      function bla() {
        console.log(this);
      }

      bla();
    }
  };
  testObject.testThis();
  console.log(testObject.name);

  var dogFactory = function dogFactory(race, shoulderHeight, cuteness) {
    return {
      race: race,
      shoulderHeight: shoulderHeight,
      cuteness: cuteness
    };
  };

  var django = dogFactory('bordador', '55cm', 'maximum');
  console.log(django);
  console.log(Object.keys(django));
  console.log(Object.entries(django));
  var otherCriteria = {
    favoriteFood: 'cheese',
    favoriteToy: 'ball',
    cuteness: 'supermaximum'
  };
  var detailedDjango = Object.assign(django, otherCriteria);
  console.log(detailedDjango);
}

objectsAdvanced();