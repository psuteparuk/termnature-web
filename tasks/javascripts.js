const babelify = require('babelify');
const browserify = require('browserify');
const config = require('./config');
const del = require('del');
const gulp = require('gulp');
const hash = require('gulp-hash');
const uglify = require('gulp-uglify');
const path = require('path');
const buffer = require('vinyl-buffer');
const source = require('vinyl-source-stream');

const dataDir = path.join(config.jsPath.dataDir, 'js');
const sourceDir = path.join(config.jsPath.sourceDir, 'js');
const targetDir = path.join(config.jsPath.staticDir, 'js');
const mainFile = 'main.js';
const bundleFile = 'bundle.js';
const hashFile = 'hash.json';

gulp.task('clean:js', () => {
  del([path.join(targetDir, '**/*')], { force: true });
});

gulp.task('build:js', ['clean:js'], () => {
  const browserifyOptions = {
    entries: path.join(sourceDir, mainFile),
    transform: [babelify],
  };

  const uglifyOptions = { 
    preserveComments: 'license',
  };

  return browserify(browserifyOptions)
    .bundle()
    .pipe(source(bundleFile))
    .pipe(buffer())
    .pipe(uglify(uglifyOptions))
    .pipe(hash())
    .pipe(gulp.dest(targetDir))
    .pipe(hash.manifest(hashFile))
    .pipe(gulp.dest(dataDir))
    .on('error', (err) => {
      console.error('Error running build:js task! ', err.message);
      throw(err);
    });
});

gulp.task('watch:js', ['build:js'], () => {
  gulp.watch('**/*.js', { cwd: sourceDir, interval: config.watchIntervals }, ['build:js']);
});
