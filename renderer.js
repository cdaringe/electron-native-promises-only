const app = require('electron').remote.app

window.remoteBluebird = () => {
  app.bluebird().then((val) => console.log(val))
}
window.remoteNative = () => {
  app.native().then((val) => console.log(val))
}
