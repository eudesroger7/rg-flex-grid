'use strict';

var gulp = require('gulp');
var cssmin = require('gulp-cssmin');
var concat = require('gulp-concat');
var clean = require('gulp-clean');
var gulp = require('gulp');
var sass = require('gulp-sass');

var path = {
  styles: [
    'assets/scss/grid.scss'
  ]
}

gulp.task('clean', function () {
  return gulp.src('dist', { read: false, allowEmpty: true })
    .pipe(clean())
})

gulp.task('styles', function () {
  return gulp.src(path.styles)
    .pipe(sass())
    .pipe(concat('grid.min.css'))
    .pipe(cssmin())
    .pipe(gulp.dest('dist/css/'))
});

gulp.task('watch', function () {
  gulp.watch(path.styles, gulp.series('styles'));
});

gulp.task('default', gulp.series('clean', 'styles'));