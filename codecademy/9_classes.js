/**
 * constructor
 */

class Surgeon {
	constructor(name, department) {
		this.name = name;
		this.department = department;
	}
}

/**
 * class instances
 */

const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');

const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

/**
 * methods
 */

class SurgeonWithMethod {
	constructor(name, department) {
		this._name = name;
		this._department = department;
		this._remainingVacationDays = 20;
	}

	get name() {
		return this._name;
	}

	get department() {
		return this._department;
	}

	get remainingVacationDays() {
		return this._remainingVacationDays;
	}

	takeVacationDays(daysOff) {
		this._remainingVacationDays = this._remainingVacationDays - daysOff;
	}
}

const surgeonCurryWM = new SurgeonWithMethod('Curry', 'Cardiovascular');
const surgeonDurantWM = new SurgeonWithMethod('Durant', 'Orthopedics');

/**
 * method calls
 */

// class Surgeon {
// 	constructor(name, department) {
// 		this._name = name;
// 		this._department = department;
// 		this._remainingVacationDays = 20;
// 	}

// 	get name() {
// 		return this._name;
// 	}

// 	get department() {
// 		return this._department;
// 	}

// 	get remainingVacationDays() {
// 		return this._remainingVacationDays;
// 	}

// 	takeVacationDays(daysOff) {
// 		this._remainingVacationDays = this._remainingVacationDays - daysOff;
// 	}
// }

// const surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
// const surgeonDurant = new Surgeon('Durant', 'Orthopedics');

console.log(surgeonCurryWM.name);
surgeonCurryWM.takeVacationDays(3);
console.log(surgeonCurryWM.remainingVacationDays);

/**
 * inheritance I
 */

class HospitalEmployee {
	constructor(name) {
		this._name = name;
		this._remainingVacationDays = 20;
	}

	get name() {
		return this._name;
	}

	get remainingVacationDays() {
		return this._remainingVacationDays;
	}

	takeVacationDays(daysOff) {
		this._remainingVacationDays = this._remainingVacationDays - daysOff;
	}
}

/**
 * inheritance III
 */

class HospitalEmployeeAsParent {
	constructor(name) {
		this._name = name;
		this._remainingVacationDays = 20;
	}

	get name() {
		return this._name;
	}

	get remainingVacationDays() {
		return this._remainingVacationDays;
	}

	takeVacationDays(daysOff) {
		this._remainingVacationDays -= daysOff;
	}
}

class Nurse extends HospitalEmployeeAsParent {
	constructor(name, certifications) {
		super(name);
		this._certifications = certifications;
	}
}

const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

/**
 * inheritance IV
 */

// class HospitalEmployee {
// 	constructor(name) {
// 		this._name = name;
// 		this._remainingVacationDays = 20;
// 	}

// 	get name() {
// 		return this._name;
// 	}

// 	get remainingVacationDays() {
// 		return this._remainingVacationDays;
// 	}

// 	takeVacationDays(daysOff) {
// 		this._remainingVacationDays -= daysOff;
// 	}
// }

// class Nurse extends HospitalEmployee {
// 	constructor(name, certifications) {
// 		super(name);
// 		this._certifications = certifications;
// 	}
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);

nurseOlynyk.takeVacationDays(5);
console.log(nurseOlynyk.remainingVacationDays);

/**
 * inheritance V
 */

// class HospitalEmployee {
// 	constructor(name) {
// 		this._name = name;
// 		this._remainingVacationDays = 20;
// 	}

// 	get name() {
// 		return this._name;
// 	}

// 	get remainingVacationDays() {
// 		return this._remainingVacationDays;
// 	}

// 	takeVacationDays(daysOff) {
// 		this._remainingVacationDays -= daysOff;
// 	}
// }

class NurseWithCerts extends HospitalEmployee {
	constructor(name, certifications) {
		super(name);
		this._certifications = certifications;
	}

	get certifications() {
		return this._certifications;
	}

	addCertification(newCertification) {
		this._certifications.push(newCertification);
	}
}

const nurseOlynykWC = new NurseWithCerts('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynykWC.takeVacationDays(5);
console.log(nurseOlynykWC.remainingVacationDays);

nurseOlynykWC.addCertification('Genetics');

console.log(nurseOlynykWC.certifications);

/**
 * static methods
 */

class HospitalEmployeeWithStatic {
	constructor(name) {
		this._name = name;
		this._remainingVacationDays = 20;
	}

	get name() {
		return this._name;
	}

	get remainingVacationDays() {
		return this._remainingVacationDays;
	}

	takeVacationDays(daysOff) {
		this._remainingVacationDays -= daysOff;
	}

	static generatePassword() {
		return Math.ceil(Math.random() * 10000);
	}
}

class NurseWithStatic extends HospitalEmployeeWithStatic {
	constructor(name, certifications) {
		super(name);
		this._certifications = certifications;
	}

	get certifications() {
		return this._certifications;
	}

	addCertification(newCertification) {
		this.certifications.push(newCertification);
	}
}

const nurseOlynykWS = new NurseWithStatic('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynykWS.takeVacationDays(5);
console.log(nurseOlynykWS.remainingVacationDays);
nurseOlynykWS.addCertification('Genetics');
console.log(nurseOlynykWS.certifications);
console.log(NurseWithStatic.generatePassword());

/**
 * review
 */

// class HospitalEmployee {
// 	constructor(name) {
// 		this._name = name;
// 		this._remainingVacationDays = 20;
// 	}

// 	get name() {
// 		return this._name;
// 	}

// 	get remainingVacationDays() {
// 		return this._remainingVacationDays;
// 	}

// 	takeVacationDays(daysOff) {
// 		this._remainingVacationDays -= daysOff;
// 	}

// 	static generatePassword() {
// 		return Math.ceil(Math.random() * 10000);
// 	}
// }

// class Nurse extends HospitalEmployee {
// 	constructor(name, certifications) {
// 		super(name);
// 		this._certifications = certifications;
// 	}

// 	get certifications() {
// 		return this._certifications;
// 	}

// 	addCertification(newCertification) {
// 		this.certifications.push(newCertification);
// 	}
// }

// const nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
// nurseOlynyk.takeVacationDays(5);
// console.log(nurseOlynyk.remainingVacationDays);
// nurseOlynyk.addCertification('Genetics');
// console.log(nurseOlynyk.certifications);

class Doctor extends HospitalEmployeeWithStatic {
	constructor(name, insurance) {
		super(name);
		this._insurance = insurance;
	}

	get insurance() {
		return this._insurance;
	}

	updateInsurance(insurance) {
		this._insurance = insurance;
	}
}

const doc = new Doctor('P', 'Privat');
doc.updateInsurance('3');
console.log(doc.insurance);
