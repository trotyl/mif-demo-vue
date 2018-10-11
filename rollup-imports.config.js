import pkgInfo from '@mif/core/rollup/pkg-info'
import nodeResolve from 'rollup-plugin-node-resolve'
import meta from './mif-meta.json'

export default meta.imports.map(i => {
  const packageJson = require(`./node_modules/${i}/package.json`)
  return {
    input: `./node_modules/${i}/${packageJson['jsnext:main'] || packageJson.module || packageJson.main}`,
    output: {
      file: `./auto-import-${i}.mif.js`,
      format: 'system',
      name: 'mif',
    },
    external: ['tslib'],
    plugins: [
      nodeResolve({
        jsnext: true,
        main: true,
        jail: `./node_modules/${i}/`
      }),
      pkgInfo(packageJson),
    ]
  }
})
