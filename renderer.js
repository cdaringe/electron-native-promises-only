const app = require('electron').remote.app

window.resolveBluebird = () => {
  app.bluebird.resolve().then((val) => console.log(val))
}
window.resolveNative = () => {
  app.native.resolve().then((val) => console.log(val))
}

window.rejectBluebird = () => {
  app.bluebird.reject().catch((err) => console.error(err))
}
window.rejectNative = () => {
  app.native.reject().catch((err) => console.error(err))
}
