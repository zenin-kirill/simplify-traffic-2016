import * as gulp from 'gulp';
import * as gulpLoadPlugins from 'gulp-load-plugins';
import { join } from 'path';
import * as merge from 'merge-stream';

import {INLINE_TEMPLATES, TMP_DIR, TOOLS_DIR} from '../../config';
import { makeTsProject, templateLocals } from '../../utils';

const plugins = <any>gulpLoadPlugins();

const INLINE_OPTIONS = {
  base: TMP_DIR,
  useRelativePaths: true,
  removeLineBreaks: true
};

/**
 * Executes the build process, transpiling the TypeScript files for the production environment.
 */
function buildTS() {
  let tsProject = makeTsProject();
  let src = [
    'typings/index.d.ts',
    TOOLS_DIR + '/manual_typings/**/*.d.ts',
    join(TMP_DIR, '**/*.ts')
  ];
  let result = gulp.src(src)
    .pipe(plugins.plumber())
    .pipe(INLINE_TEMPLATES ? plugins.inlineNg2Template(INLINE_OPTIONS) : plugins.util.noop())
    .pipe(plugins.typescript(tsProject));

  return result.js
    .pipe(plugins.template(templateLocals()))
    .pipe(gulp.dest(TMP_DIR));
}

export = () => merge(buildTS());
