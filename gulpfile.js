var gulp = require('gulp'),
    handlebars = require('gulp-handlebars'),
    sass = require('gulp-sass');

gulp.task('templates', function() {
  gulp.src('./src/templates/*.hbs')
    .pipe(handlebars())
    .pipe(gulp.dest('build/js/'));
});

gulp.task('sass', function() {
  return gulp.src('./src/styles/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./public/css'));
});

gulp.task('default', ['sass']);
