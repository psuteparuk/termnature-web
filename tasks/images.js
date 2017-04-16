// TODO: add hashing (see example in styles.js)

const config = require('./config');
const del = require('del');
const gulp = require('gulp');
const path = require('path');

const sourceDir = path.join(config.imagesPath.sourceDir, 'images');
const targetDir = path.join(config.imagesPath.staticDir, 'images');

gulp.task('clean:images', () => {
  del([path.join(targetDir, '**/*')], { force: true });
});

gulp.task('copy:images', ['clean:images'], () => {
  return gulp.src(path.join(sourceDir, '**/*'))
    .pipe(gulp.dest(targetDir));
});

gulp.task('watch:images', ['copy:images'], () => {
  gulp.watch('**/*', { cwd: sourceDir, interval: config.watchIntervals }, ['copy:images']);
});
