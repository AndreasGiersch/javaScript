"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * 2. constructor
 */
var Surgeon = function Surgeon(name, department) {
  _classCallCheck(this, Surgeon);

  this.name = name;
  this.department = department;
};
/**
 * 3. class instances
 */


var surgeonCurry = new Surgeon('Curry', 'Cardiovascular');
var surgeonDurant = new Surgeon('Durant', 'Orthopedics');
/**
 * 4. methods
 */

var SurgeonWithMethod = /*#__PURE__*/function () {
  function SurgeonWithMethod(name, department) {
    _classCallCheck(this, SurgeonWithMethod);

    this._name = name;
    this._department = department;
    this._remainingVacationDays = 20;
  }

  _createClass(SurgeonWithMethod, [{
    key: "takeVacationDays",
    value: function takeVacationDays(daysOff) {
      this._remainingVacationDays = this._remainingVacationDays - daysOff;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "department",
    get: function get() {
      return this._department;
    }
  }, {
    key: "remainingVacationDays",
    get: function get() {
      return this._remainingVacationDays;
    }
  }]);

  return SurgeonWithMethod;
}();

var surgeonCurryWM = new SurgeonWithMethod('Curry', 'Cardiovascular');
var surgeonDurantWM = new SurgeonWithMethod('Durant', 'Orthopedics');
/**
 * 5. method calls
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
 * 6. inheritance I
 */

var HospitalEmployee = /*#__PURE__*/function () {
  function HospitalEmployee(name) {
    _classCallCheck(this, HospitalEmployee);

    this._name = name;
    this._remainingVacationDays = 20;
  }

  _createClass(HospitalEmployee, [{
    key: "takeVacationDays",
    value: function takeVacationDays(daysOff) {
      this._remainingVacationDays = this._remainingVacationDays - daysOff;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "remainingVacationDays",
    get: function get() {
      return this._remainingVacationDays;
    }
  }]);

  return HospitalEmployee;
}();
/**
 * 8. inheritance III
 */


var HospitalEmployeeAsParent = /*#__PURE__*/function () {
  function HospitalEmployeeAsParent(name) {
    _classCallCheck(this, HospitalEmployeeAsParent);

    this._name = name;
    this._remainingVacationDays = 20;
  }

  _createClass(HospitalEmployeeAsParent, [{
    key: "takeVacationDays",
    value: function takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "remainingVacationDays",
    get: function get() {
      return this._remainingVacationDays;
    }
  }]);

  return HospitalEmployeeAsParent;
}();

var Nurse = /*#__PURE__*/function (_HospitalEmployeeAsPa) {
  _inherits(Nurse, _HospitalEmployeeAsPa);

  function Nurse(name, certifications) {
    var _this;

    _classCallCheck(this, Nurse);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Nurse).call(this, name));
    _this._certifications = certifications;
    return _this;
  }

  return Nurse;
}(HospitalEmployeeAsParent);

var nurseOlynyk = new Nurse('Olynyk', ['Trauma', 'Pediatrics']);
/**
 * 9. inheritance IV
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
 * 10. inheritance V
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

var NurseWithCerts = /*#__PURE__*/function (_HospitalEmployee) {
  _inherits(NurseWithCerts, _HospitalEmployee);

  function NurseWithCerts(name, certifications) {
    var _this2;

    _classCallCheck(this, NurseWithCerts);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(NurseWithCerts).call(this, name));
    _this2._certifications = certifications;
    return _this2;
  }

  _createClass(NurseWithCerts, [{
    key: "addCertification",
    value: function addCertification(newCertification) {
      this._certifications.push(newCertification);
    }
  }, {
    key: "certifications",
    get: function get() {
      return this._certifications;
    }
  }]);

  return NurseWithCerts;
}(HospitalEmployee);

var nurseOlynykWC = new NurseWithCerts('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynykWC.takeVacationDays(5);
console.log(nurseOlynykWC.remainingVacationDays);
nurseOlynykWC.addCertification('Genetics');
console.log(nurseOlynykWC.certifications);
/**
 * 11. static methods
 */

var HospitalEmployeeWithStatic = /*#__PURE__*/function () {
  function HospitalEmployeeWithStatic(name) {
    _classCallCheck(this, HospitalEmployeeWithStatic);

    this._name = name;
    this._remainingVacationDays = 20;
  }

  _createClass(HospitalEmployeeWithStatic, [{
    key: "takeVacationDays",
    value: function takeVacationDays(daysOff) {
      this._remainingVacationDays -= daysOff;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "remainingVacationDays",
    get: function get() {
      return this._remainingVacationDays;
    }
  }], [{
    key: "generatePassword",
    value: function generatePassword() {
      return Math.ceil(Math.random() * 10000);
    }
  }]);

  return HospitalEmployeeWithStatic;
}();

var NurseWithStatic = /*#__PURE__*/function (_HospitalEmployeeWith) {
  _inherits(NurseWithStatic, _HospitalEmployeeWith);

  function NurseWithStatic(name, certifications) {
    var _this3;

    _classCallCheck(this, NurseWithStatic);

    _this3 = _possibleConstructorReturn(this, _getPrototypeOf(NurseWithStatic).call(this, name));
    _this3._certifications = certifications;
    return _this3;
  }

  _createClass(NurseWithStatic, [{
    key: "addCertification",
    value: function addCertification(newCertification) {
      this.certifications.push(newCertification);
    }
  }, {
    key: "certifications",
    get: function get() {
      return this._certifications;
    }
  }]);

  return NurseWithStatic;
}(HospitalEmployeeWithStatic);

var nurseOlynykWS = new NurseWithStatic('Olynyk', ['Trauma', 'Pediatrics']);
nurseOlynykWS.takeVacationDays(5);
console.log(nurseOlynykWS.remainingVacationDays);
nurseOlynykWS.addCertification('Genetics');
console.log(nurseOlynykWS.certifications);
console.log(NurseWithStatic.generatePassword());
/**
 * 12. review
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

var Doctor = /*#__PURE__*/function (_HospitalEmployeeWith2) {
  _inherits(Doctor, _HospitalEmployeeWith2);

  function Doctor(name, insurance) {
    var _this4;

    _classCallCheck(this, Doctor);

    _this4 = _possibleConstructorReturn(this, _getPrototypeOf(Doctor).call(this, name));
    _this4._insurance = insurance;
    return _this4;
  }

  _createClass(Doctor, [{
    key: "updateInsurance",
    value: function updateInsurance(insurance) {
      this._insurance = insurance;
    }
  }, {
    key: "insurance",
    get: function get() {
      return this._insurance;
    }
  }]);

  return Doctor;
}(HospitalEmployeeWithStatic);

var doc = new Doctor('P', 'Privat');
doc.updateInsurance('3');
console.log(doc.insurance);