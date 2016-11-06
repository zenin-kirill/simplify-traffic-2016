import * as gulp from 'gulp';
import {join} from 'path';

import {APP_SRC, PROD_DEST} from '../../config';


/**
 * Copy template files for the production environment if in LAZY TEMPLATE mode.
 */

function copyJS() {

  let result = gulp.src([join(APP_SRC, '**', '*.js')]);

  //if (INLINE_TEMPLATES) {
  //return result;
  //}

  return result.pipe(gulp.dest(join(PROD_DEST)));
}

function copyTemplates() {
  let result = gulp.src([join(APP_SRC, '**', '*.html')]);
  //if (INLINE_TEMPLATES) {
  //return result;
  //}

  return result.pipe(gulp.dest(join(PROD_DEST)));
}

export = () => copyTemplates();
