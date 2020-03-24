"use strict";

function objects() {
  /**
   *  creating object literals
   */
  // Write your fasterShip object literal below
  var fasterShip = {
    color: 'silver',
    'Fuel Type': 'Turbo Fuel'
  };
  /**
   * accessing properties
   */

  var spaceship = {
    homePlanet: 'Earth',
    color: 'silver',
    'Fuel Type': 'Turbo Fuel',
    numCrew: 5,
    flightPath: ['Venus', 'Mars', 'Saturn']
  };
  var crewCount = spaceship.numCrew;
  var planetArray = spaceship.flightPath;
  /**
   * bracket notation
   */

  var ship = {
    'Fuel Type': 'Turbo Fuel',
    'Active Mission': true,
    homePlanet: 'Earth',
    numCrew: 5
  };
  var propName = 'Active Mission'; // Write your code below

  var isActive = ship[propName];
  console.log(isActive);
  /**
   * property assignment
   */

  var shuttle = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth',
    color: 'silver',
    'Secret Mission': 'Discover life outside of Earth.'
  }; // Write your code below

  shuttle.color = 'glorious gold';
  shuttle.numEngines = 6;
  delete shuttle['Secret Mission'];
  /**
   * methods
   */

  var retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.'; // Write your code below

  var alienShip = {
    retreat: function retreat() {
      console.log(retreatMessage);
    },
    takeOff: function takeOff() {
      console.log('Spim... Borp... Glix... Blastoff!');
    }
  };
  alienShip.retreat();
  alienShip.takeOff();
  /**
   * nested objects
   */

  var spaceship1 = {
    passengers: null,
    telescope: {
      yearBuilt: 2018,
      model: '91031-XLT',
      focalLength: 2032
    },
    crew: {
      captain: {
        name: 'Sandra',
        degree: 'Computer Engineering',
        encourageTeam: function encourageTeam() {
          console.log('We got this!');
        },
        'favorite foods': ['cookies', 'cakes', 'candy', 'spinach']
      }
    },
    engine: {
      model: 'Nimbus2000'
    },
    nanoelectronics: {
      computer: {
        terabytes: 100,
        monitors: 'HD'
      },
      'back-up': {
        battery: 'Lithium',
        terabytes: 50
      }
    }
  };
  var capFave = spaceship1.crew.captain['favorite foods'][0];
  spaceship1.passengers = [{
    name: 'Terry'
  }, {
    name: ' Sandra'
  }];
  var firstPassenger = spaceship1.passengers[0];
  /**
   * pass by reference
   */

  var spaceship2 = {
    'Fuel Type': 'Turbo Fuel',
    homePlanet: 'Earth'
  }; // Write your code below

  function greenEnergy(object) {
    object['Fuel Type'] = 'avocado oil';
  }

  function remotelyDisable(object) {
    object.disabled = true;
  }

  greenEnergy(spaceship2);
  remotelyDisable(spaceship2);
  console.log(spaceship2);
  /**
   * looping through objects
   */

  var spaceship3 = {
    crew: {
      captain: {
        name: 'Lily',
        degree: 'Computer Engineering',
        cheerTeam: function cheerTeam() {
          console.log('You got this!');
        }
      },
      'chief officer': {
        name: 'Dan',
        degree: 'Aerospace Engineering',
        agree: function agree() {
          console.log('I agree, captain!');
        }
      },
      medic: {
        name: 'Clementine',
        degree: 'Physics',
        announce: function announce() {
          console.log("Jets on!");
        }
      },
      translator: {
        name: 'Shauna',
        degree: 'Conservation Science',
        powerFuel: function powerFuel() {
          console.log('The tank is full!');
        }
      }
    }
  }; // Write your code below

  for (var crewMember in spaceship3.crew) {
    console.log("".concat(crewMember, ": ").concat(spaceship3.crew[crewMember].name));
  }

  for (var _crewMember in spaceship3.crew) {
    console.log("".concat(spaceship3.crew[_crewMember].name, ": ").concat(spaceship3.crew[_crewMember].degree));
  }
}

objects();