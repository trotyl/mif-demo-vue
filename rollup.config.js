import pkgInfo from '@mif/core/rollup/pkg-info'
import nodeResolve from 'rollup-plugin-node-resolve'
import replace from 'rollup-plugin-replace'
import packageJson from './package.json'

function repointVue() {
  return {
    name: 'repoint-vue',
    resolveId(importee) {
      if (importee === 'vue') {
        return 'node_modules/vue/dist/vue.esm.js'
      }
      return null
    }
  }
}

export default {
  input: './esm5/index.js',
  output: {
    file: './demo-vue.mif.js',
    format: 'system',
    name: 'mif',
  },
  external: ['moment'],
  plugins: [
    repointVue(),
    nodeResolve({
      jsnext: true,
      main: true
    }),
    replace({
      'process.env.NODE_ENV': `'dev'`
    }),
    pkgInfo(packageJson),
  ]
}
