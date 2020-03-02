module.exports = {
  'presets': [
    ['@babel/env', { 'modules': 'commonjs' }]
  ],
  'plugins': ['add-module-exports'],
  'env': {
    'test': {
      'plugins': ['istanbul']
    }
  }
}
// module.exports = {
//   'presets': [['@babel/env', { 'modules': false }]],
//   'env': {
//     'test': {
//       'plugins': ['istanbul']
//     }
//   }
// }
