var gulp = require('gulp'),
    gzip = require('gulp-gzip');

module.exports = function (cb) {
    gulp.src('dist/js/hijri-datepicker.min.js')
        .pipe(gzip())
        .pipe(gulp.dest('dist/'))
};

