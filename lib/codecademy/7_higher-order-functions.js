"use strict";

function functions() {
  /**
   * 2. Functions as data
   */
  var checkThatTwoPlusTwoEqualsFourAMillionTimes = function checkThatTwoPlusTwoEqualsFourAMillionTimes() {
    for (var i = 1; i <= 1000000; i++) {
      if (2 + 2 != 4) {
        console.log('Something has gone very wrong :( ');
      }
    }
  };

  var is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
  is2p2();
  console.log(is2p2.name);
  /**
   * 3. Functions as parameters
   */

  var addTwo = function addTwo(num) {
    return num + 2;
  };

  var timeFuncRuntime = function timeFuncRuntime(funcParameter) {
    var t1 = Date.now();
    funcParameter();
    var t2 = Date.now();
    return t2 - t1;
  };

  var time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

  var checkConsistentOutput = function checkConsistentOutput(func, val) {
    var testFirst = func(val);
    var testSecond = func(val);

    if (testFirst === testSecond) {
      return testSecond;
    } else return 'This function returned inconsistent results';
  };

  console.log(checkConsistentOutput(addTwo, 2));
}

functions();