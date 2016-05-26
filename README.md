# ISSUE RESOLVED

Fixed in electron 1.2.0.  See [ref](https://github.com/electron/electron/commit/32073fa079c26400cb805a12e8f1b6feb54d0c32)

<img src="https://raw.githubusercontent.com/cdaringe/electron-native-promises-only/master/img/electron-promises-1.2.0.mov.gif" />


# electron-native-promises-only
demonstration exhibiting electrons limited support for native promises only

## issue

electron supports _native_ promises only.  this is great, but restricting.

## run demonstration

- `npm install` this cloned repo
- `node_modules/.bin/electron main.js`

(IMAGE REMOVED)
^^ sorry for killing your data-plan ;)

click the two buttons! watch that native promise button work, and the bluebird promise button tank.

## solution

promise support was added back [2391](https://github.com/electron/electron/pull/2391/files).  it would be great to extend that PR to add [detection of non-native Promises](http://stackoverflow.com/a/27746324/1438908) and handle them accordingly!
