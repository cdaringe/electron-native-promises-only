module.exports = {
  resolve() {
    return Promise.resolve('native promise resolve')
  },
  reject() {
    return Promise.reject('native project reject')
  }
}
