// var rollup = require('rollup').rollup;
// var commonjs = require('rollup-plugin-commonjs');
// var nodeResolve = require('rollup-plugin-node-resolve');
// var uglify = require ('rollup-plugin-uglify');
//
// import {
//   BOOTSTRAP_MODULE,
//   JS_PROD_APP_BUNDLE,
//   JS_DEST,
//   APP_SRC,
//   PROJECT_ROOT
// } from '../../config';
//
// /**
//  * Executes bundlig the JavaScript files using the Rollup bundler.
//  */
// export = () => {
//   rollup({
//     entry: `${APP_SRC}/${BOOTSTRAP_MODULE}`,
//     plugins: [
//       nodeResolve({jsnext: true, module: true}),
//       commonjs({
//         include: [`${PROJECT_ROOT}/app/**`, `${PROJECT_ROOT}/node_modules/**`, `${PROJECT_ROOT}/aot/**`]
//       }),
//       uglify()
//     ]
//   }).then(function (bundle: any) {
//     return bundle.write({
//       dest: `${JS_DEST}/${JS_PROD_APP_BUNDLE}`, // output a single application bundle
//       sourceMap: true,
//       format: 'iife',
//       moduleName: 'aot',
//     });
//   });
// };
