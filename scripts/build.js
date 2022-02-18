import config from '../configs/rollup.config.settings.js'
const _fn = function (moduleName) {
  return {
    'es': {
      entry: 'src/index.js',
      // 当文件名包含 .min 时将会自动启用 terser 进行压缩
      dest: `dist/${moduleName}.esm.js`,
      format: 'es'
    },
    'cjs': {
      entry: 'src/index.js',
      // 当文件名包含 .min 时将会自动启用 terser 进行压缩
      dest: `dist/${moduleName}.cjs.js`,
      format: 'cjs'
    },
    'iife': {
      entry: 'src/index.js',
      // 当文件名包含 .min 时将会自动启用 terser 进行压缩
      dest: `dist/${moduleName}.js`,
      format: 'iife'
    }
  }
}
export default function build (fn = _fn) {
  config(fn)
}