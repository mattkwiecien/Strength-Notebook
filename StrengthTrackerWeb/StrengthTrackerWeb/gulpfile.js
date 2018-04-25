var gulp = require('gulp');
var paths = {
    webroot: "./wwwroot/"
};
var itemsToCopy = {
    './node_modules/angular/angular*.js': paths.webroot + 'lib'
};
paths.js = paths.webroot + "js/**/*.js";
paths.minJs = paths.webroot + "js/**/*.min.js";


gulp.task('copy', function () {
    for (var src in itemsToCopy) {
        if (!itemsToCopy.hasOwnProperty(src)) continue;
        gulp.src(src)
            .pipe(gulp.dest(itemsToCopy[src]));
    }
});