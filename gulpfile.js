const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() {
    return gulp.src('./src/styles/main.scss')
    .pipe(sass({style: 'compressed'}))
    .pipe(gulp.dest('./build/styles'));
}



exports.watch = function () {
    return gulp.watch('./src/styles/*.scss', styles);
}

exports.default = styles;
