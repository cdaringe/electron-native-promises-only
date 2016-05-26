const bluebird = require('bluebird')
module.exports = {
  resolve() {
    console.log('bluebird resolving...')
    return bluebird.resolve('bluebird promise resolved')
  },
  reject() {
    console.log('bluebird rejecting...')
    return bluebird.reject('bluebird promise rejected')
  }
}
