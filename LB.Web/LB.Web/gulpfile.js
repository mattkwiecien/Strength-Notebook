﻿/// <binding BeforeBuild='scripts' ProjectOpened='copy' />
var gulp = require('gulp');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');

var paths = {
    webroot: './wwwroot/'
};
//script paths
var jsFiles = [
    './Content/js/_app.js',
    './Content/js/!(_app)*.js'
];
var itemsToCopy = {
    './node_modules/angular/angular*.js': paths.webroot + 'lib',
};
paths.js = paths.webroot + 'js/**/*.js';
paths.minJs = paths.webroot + 'js/**/*.min.js';

gulp.task('scripts', function () {
    return gulp.src(jsFiles)
        .pipe(concat('scripts.js'))
        .pipe(gulp.dest(paths.webroot + 'js'))
        .pipe(rename('scripts.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest(paths.webroot + 'js'))
});

gulp.task('copy', function () {
    for (var src in itemsToCopy) {
        if (!itemsToCopy.hasOwnProperty(src)) continue;
        gulp.src(src)
            .pipe(gulp.dest(itemsToCopy[src]));
    }
});