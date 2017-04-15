const gulp = require('gulp');
const gutil = require('gulp-util');
const requireDir = require('require-dir');

requireDir('./tasks');

gulp.task('default', ['build:src']);

gulp.task('watch:src', ['watch:css', 'watch:images'], () => {
  gutil.log('Watch for changes to src folder ...');
});

gulp.task('build:src', ['compile:css', 'copy:images']);
