const bb = require('bluebird')
module.exports = {
  resolve() {
    return bluebird.resolve('bluebird promise resolved')
  },
  reject() {
    return bluebird.resolve('bluebird promise rejected')
  }
}
