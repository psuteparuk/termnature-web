const autoprefixer = require('gulp-autoprefixer');
const config = require('./config');
const del = require('del');
const gulp = require('gulp');
const hash = require('gulp-hash');
const path = require('path');
const sass = require('gulp-sass');

const dataDir = path.join(config.cssPath.dataDir, 'css');
const sourceDir = path.join(config.cssPath.sourceDir, 'css');
const targetDir = path.join(config.cssPath.staticDir, 'css');

gulp.task('clean:css', () => {
  del([path.join(targetDir, '**/*')], { force: true });
});

gulp.task('compile:css', ['clean:css'], () => {
  const autoprefixereOptions = {
    browsers: ['last 2 version', '> 1%', 'Firefox ESR'],
  };

  const sassOptions = {
    errLogToConsole: !config.IS_PROD,
    importer: (url, prev, done) => {
      if (url[0] === '~') url = path.resolve('node_modules', url.substr(1));
      else if (url[0] === '@') url = path.resolve('node_modules', url);
      return { file: url };
    },
    outputStyle: config.IS_PROD ? 'compressed' : 'expanded',
  };

  return gulp.src(path.join(sourceDir, 'main.scss'))
    .pipe(sass(sassOptions).on('error', sass.logError))
    .pipe(autoprefixer(autoprefixereOptions))
    .pipe(hash())
    .pipe(gulp.dest(targetDir))
    .pipe(hash.manifest('hash.json'))
    .pipe(gulp.dest(dataDir));
});

gulp.task('watch:css', ['compile:css'], () => {
  gulp.watch(path.join(sourceDir, '**/*.scss'), { interval: config.watchIntervals }, ['compile:css']);
});
