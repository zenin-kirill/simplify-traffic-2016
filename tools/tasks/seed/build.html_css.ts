import * as autoprefixer from 'autoprefixer';
import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import * as merge from 'merge-stream';
import { join } from 'path';

import {
  APP_DEST,
  APP_SRC,
  BROWSER_LIST,
  CSS_DEST,
  CSS_SRC,
  DEPENDENCIES,
  ENABLE_SCSS,
  TMP_DIR,
} from '../../config';

//todo: убрать лишние noop

const plugins = <any>gulpLoadPlugins();
const cleanCss = require('gulp-clean-css');

const processors = [
  autoprefixer({
    browsers: BROWSER_LIST
  })
];

/**
 * Copies all HTML files in `src/client` over to the `dist/tmp` directory.
 */
function prepareTemplates() {
  return gulp.src(join(APP_SRC, '**', '*.html'))
    .pipe(gulp.dest(TMP_DIR));
}

/**
 * Execute the appropriate component-stylesheet processing method based on user stylesheet preference.
 */
function processComponentStylesheets() {
  return ENABLE_SCSS ? processComponentScss() : processComponentCss();
}

/**
 * Process scss files referenced from Angular component `styleUrls` metadata
 */
function processComponentScss() {
  return gulp.src(join(APP_SRC, '**', '*.scss'))
    .pipe(plugins.util.noop())
    .pipe(plugins.util.noop())
    .pipe(plugins.sourcemaps.init())
    .pipe(plugins.sass({includePaths: ['./node_modules/']}).on('error', plugins.sass.logError))
    .pipe(plugins.postcss(processors))
    .pipe(plugins.sourcemaps.write(''))
    .pipe(gulp.dest(APP_DEST));
}

/**
 * Processes the CSS files within `src/client` excluding those in `src/client/assets` using `postcss` with the
 * configured processors.
 */
function processComponentCss() {
  return gulp.src([
    join(APP_SRC, '**', '*.css'),
    '!' + join(APP_SRC, 'assets', '**', '*.css')
  ])
    .pipe(plugins.util.noop())
    .pipe(plugins.postcss(processors))
    .pipe(gulp.dest(APP_DEST));
}

/**
 * Execute external-stylesheet processing method based on presence of --scss flag.
 */
function processExternalStylesheets() {
  return ENABLE_SCSS ? processAllExternalStylesheets() : processExternalCss();
}

/**
 * Process scss stylesheets located in `src/client/css` and any css dependencies specified in
 * the global project configuration.
 */
function processAllExternalStylesheets() {
  return merge(getExternalCssStream(), getExternalScssStream())
    .pipe(plugins.util.noop())
    .pipe(plugins.postcss(processors))
    .pipe(plugins.util.noop())
    .pipe(gulp.dest(CSS_DEST));
}

/**
 * Get a stream of external css files for subsequent processing.
 */
function getExternalCssStream() {
  return gulp.src(getExternalCss())
    .pipe(plugins.util.noop());
}

/**
 * Get an array of filenames referring to all external css stylesheets.
 */
function getExternalCss() {
  return DEPENDENCIES.filter(dep => /\.css$/.test(dep.src)).map(dep => dep.src);
}

/**
 * Get a stream of external scss files for subsequent processing.
 */
function getExternalScssStream() {
  return gulp.src(getExternalScss())
    .pipe(plugins.util.noop())
    .pipe(plugins.util.noop())
    .pipe(plugins.sass({includePaths: ['./node_modules/']}).on('error', plugins.sass.logError));
}

/**
 * Get an array of filenames referring to external scss stylesheets located in the global DEPENDENCIES
 * as well as in `src/css`.
 */
function getExternalScss() {
  return DEPENDENCIES.filter(dep => /\.scss$/.test(dep.src)).map(dep => dep.src)
    .concat([join(CSS_SRC, '**', '*.scss')]);
}

/**
 * Processes the external CSS files using `postcss` with the configured processors.
 */
function processExternalCss() {
  return getExternalCssStream()
    .pipe(plugins.postcss(processors))
    .pipe(plugins.util.noop())
    .pipe(plugins.util.noop())
    .pipe(gulp.dest(CSS_DEST));
}

/**
 * Executes the build process, processing the HTML and CSS files.
 */
export = () => merge(processComponentStylesheets(), prepareTemplates(), processExternalStylesheets());
