/**
 * Imports
 */

var inherit = require('component-inherit')
var devices = require('ev3-js-devices')
var Device = require('ev3-js-device')

/**
 * Expose ColorSensor
 */

module.exports = USSensor['default'] = USSensor

/**
 * TouchSensor Device
 * @param {Number} port number of touch sensor port
 */
function USSensor (port) {
  if (!(this instanceof USSensor)) {
    return new USSensor(port)
  }
  Device.call(this, devices(port))
}

inherit(USSensor, Device)

Object.defineProperties(USSensor.prototype, {
  inches: {
    get: getInches
  },
  cm: {
    get: getCM
  }
})

/**
 * use touch sensor to get a value
 * @return {string} state value of 0 or 1
 */
function getInches () {
  this.write('mode', 'US-DIST-CM')
  return Number(this.read('value0'))
}

function getCM () {
  this.write('mode', 'US-DIST-IN')
  return Number(this.read('value0'))
}
