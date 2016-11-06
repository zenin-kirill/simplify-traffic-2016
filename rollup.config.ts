import nodeResolve from 'rollup-plugin-node-resolve'
import commonjs    from 'rollup-plugin-commonjs';
import uglify      from 'rollup-plugin-uglify'

export default {
  entry: 'app/main.aot.js',
  dest: 'dist/prod/js/app.js',
  sourceMap: true,
  moduleName: 'aot',
  format: 'iife',
  plugins: [
    nodeResolve({jsnext: true, module: true}),
    commonjs({
      include: ['./node_modules/rxjs/**', './app/**', './node_modules/**', './aot/**']
    }),
    uglify()
  ]
}
