// MODULES  - Encapsulated code (only share minimum)
// Common JS, every file is module (by default)
const name = require('./4-name')
const sayHi = require('./5-utils')
const data = require('./6-alt.js')
require('./7-mind-grenade')// execute without export or evoke (auto evoke funstion)

console.log(data)

sayHi ('susan')
sayHi (name.john)
sayHi (name.peter)