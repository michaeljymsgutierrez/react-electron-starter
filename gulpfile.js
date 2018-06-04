var gulp = require('gulp');
var shell = require('gulp-shell');

/* Build Tasks for Executable Binaries */
gulp.task('build-linux', shell.task([
    'electron-packager . --overwrite --platform=linux --arch=x64 --icon=img/icon.png --prune=true --out=release-builds'
]));

gulp.task('build-windows', shell.task([
    'electron-packager . --overwrite --asar=true --platform=win32 --arch=ia32 --icon=img/icon.ico --prune=true --out=release-builds --version-string.CompanyName=CE --version-string.FileDescription=CE'
]));

gulp.task('build-mac', shell.task([
    'electron-packager . --overwrite --platform=darwin --arch=x64 --icon=img/icon.icns --prune=true --out=release-builds'
]));

/* Server Electron */
gulp.task('serve:electron', shell.task([
    'electron main.js'
]));

/* Server Electron */
gulp.task('serve:react', shell.task([
    'npm start'
]));