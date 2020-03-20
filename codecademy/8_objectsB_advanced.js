function objectsAdvanced() {
	/**
	 * the this keyword
	 */

	const robot = {
		model: '1E78V2',
		energyLevel: 100,
		provideInfo() {
			return `I am ${this.model} and my current energy level is ${this.energyLevel}`;
		}
	};

	console.log(robot.provideInfo());

	/**
	 * arrow functions and this
	 */

	const robot1 = {
		energyLevel: 100,
		checkEnergy() {
			console.log(`Energy is currently at ${this.energyLevel}%.`);
		}
	};

	robot1.checkEnergy();

	/**
	 * privacy
	 */

	const robot2 = {
		_energyLevel: 100,
		recharge() {
			this._energyLevel += 30;
			console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`);
		}
	};

	robot2._energyLevel = 'high';
	robot2.recharge();

	/**
	 * getters
	 */

	const robot3 = {
		_model: '1E78V2',
		_energyLevel: 100,
		get energyLevel() {
			if (typeof this._energyLevel === 'number') {
				return `My current energy level is ${this._energyLevel}`;
			} else {
				return 'System malfunction: cannot retrieve energy level';
			}
		}
	};

	console.log(robot3.energyLevel);

	/**
	 * setters
	 */

	const robot4 = {
		_model: '1E78V2',
		_energyLevel: 100,
		get energyLevel() {
			if (typeof this._energyLevel === 'number') {
				return `My current energy level is ${this._energyLevel}`;
			} else {
				return 'System malfunction: cannot retrieve energy level';
			}
		}
	};

	console.log(robot4.energyLevel);

	/**
	 * factory functions
	 */

	const robotFactory = (model, mobile) => {
		return {
			model: model,
			mobile: mobile,
			beep() {
				console.log(`Beep Boop! I am ${this.model}!`);
			}
		};
	};

	const tinCan = robotFactory('P-500', true);
	tinCan.beep();
	console.log(tinCan.mobile ? 'I am mobile' : 'I am immobile');

	/**
	 * property value shorthands
	 */

	function robotFactory2(model, mobile) {
		return {
			model,
			mobile,
			beep() {
				console.log('Beep Boop');
			}
		};
	}

	// To check that the property value shorthand technique worked:
	const newRobot = robotFactory2('P-501', false);
	console.log(newRobot.model);
	console.log(newRobot.mobile);

	/**
	 * Destructuring (destruct)
	 */

	const robot5 = {
		model: '1E78V2',
		energyLevel: 100,
		functionality: {
			beep() {
				console.log('Beep Boop');
			},
			fireLaser() {
				console.log('Pew Pew');
			}
		}
	};

	const { functionality } = robot5;
	functionality.beep();

	/**
	 * built-in object methods
	 */

	const robot6 = {
		model: 'SAL-1000',
		mobile: true,
		sentient: false,
		armor: 'Steel-plated',
		energyLevel: 75
	};

	// What is missing in the following method call?
	const robotKeys = Object.keys(robot6);

	console.log(robotKeys);

	// Declare robotEntries below this line:
	const robotEntries = Object.entries(robot6);

	console.log(robotEntries);

	// Declare newRobot below this line:
	newProps = { laserBlaster: true, voiceRecognition: true };
	const newRobot2 = Object.assign(newProps, robot6);

	console.log(newRobot2);

	/**
	 * review
	 */

	const testObject = {
		_name: 'testa',
		_value: 17,

		get name() {
			return this._name;
		},

		set name(newName) {
			this._name = newName;
		},
		testThis() {
			function bla() {
				console.log(this);
			}
			bla();
		}
	};

	testObject.testThis();
	console.log(testObject.name);

	const dogFactory = (race, shoulderHeight, cuteness) => {
		return {
			race,
			shoulderHeight,
			cuteness
		};
	};

	const django = dogFactory('bordador', '55cm', 'maximum');

	console.log(django);
	console.log(Object.keys(django));
	console.log(Object.entries(django));

	const otherCriteria = {
		favoriteFood: 'cheese',
		favoriteToy: 'ball',
		cuteness: 'supermaximum'
	};

	const detailedDjango = Object.assign(django, otherCriteria);
	console.log(detailedDjango);
}

objectsAdvanced();
