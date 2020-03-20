function objects() {
	/**
	 *  creating object literals
	 */
	// Write your fasterShip object literal below
	const fasterShip = {
		color: 'silver',
		'Fuel Type': 'Turbo Fuel'
	};

	/**
	 * accessing properties
	 */

	let spaceship = {
		homePlanet: 'Earth',
		color: 'silver',
		'Fuel Type': 'Turbo Fuel',
		numCrew: 5,
		flightPath: ['Venus', 'Mars', 'Saturn']
	};

	const crewCount = spaceship.numCrew;
	const planetArray = spaceship.flightPath;

	/**
	 * bracket notation
	 */
	let ship = {
		'Fuel Type': 'Turbo Fuel',
		'Active Mission': true,
		homePlanet: 'Earth',
		numCrew: 5
	};

	let propName = 'Active Mission';

	// Write your code below
	const isActive = ship[propName];
	console.log(isActive);

	/**
	 * property assignment
	 */

	let shuttle = {
		'Fuel Type': 'Turbo Fuel',
		homePlanet: 'Earth',
		color: 'silver',
		'Secret Mission': 'Discover life outside of Earth.'
	};

	// Write your code below
	shuttle.color = 'glorious gold';
	shuttle.numEngines = 6;
	delete shuttle['Secret Mission'];

	/**
	 * methods
	 */

	let retreatMessage =
		'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

	// Write your code below
	const alienShip = {
		retreat() {
			console.log(retreatMessage);
		},
		takeOff() {
			console.log('Spim... Borp... Glix... Blastoff!');
		}
	};

	alienShip.retreat();
	alienShip.takeOff();

	/**
	 * nested objects
	 */

	let spaceship1 = {
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
				encourageTeam() {
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

	const capFave = spaceship1.crew.captain['favorite foods'][0];

	spaceship1.passengers = [{ name: 'Terry' }, { name: ' Sandra' }];

	const firstPassenger = spaceship1.passengers[0];

	/**
	 * pass by reference
	 */

	let spaceship2 = {
		'Fuel Type': 'Turbo Fuel',
		homePlanet: 'Earth'
	};

	// Write your code below
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

	let spaceship3 = {
		crew: {
			captain: {
				name: 'Lily',
				degree: 'Computer Engineering',
				cheerTeam() {
					console.log('You got this!');
				}
			},
			'chief officer': {
				name: 'Dan',
				degree: 'Aerospace Engineering',
				agree() {
					console.log('I agree, captain!');
				}
			},
			medic: {
				name: 'Clementine',
				degree: 'Physics',
				announce() {
					console.log(`Jets on!`);
				}
			},
			translator: {
				name: 'Shauna',
				degree: 'Conservation Science',
				powerFuel() {
					console.log('The tank is full!');
				}
			}
		}
	};

	// Write your code below
	for (let crewMember in spaceship3.crew) {
		console.log(`${crewMember}: ${spaceship3.crew[crewMember].name}`);
	}

	for (let crewMember in spaceship3.crew) {
		console.log(
			`${spaceship3.crew[crewMember].name}: ${spaceship3.crew[crewMember].degree}`
		);
	}
}

objects();
