/**
 * export modules
 */

const Airplane = {}
Airplane.myAirplane = 'StarJet'
module.exports = Airplane

/**
 * export modules II
 */

module.exports = {
    myAirplane: 'CloudJet',
    displayAirplane: function() {
        return this.myAirplane
    },
}
