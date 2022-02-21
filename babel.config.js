module.exports = function (api) {
  api.cache(true)
  return {
    "presets": [
      [
        "@babel/env"
      ],
    ],
    "plugins": [
      '@babel/proposal-class-properties'
    ],
    "ignore": [
      "node_modules/**"
    ],
    "env": {
      "test": {
        "presets": [
          "@babel/env",
        ],
        "plugins": [
          '@babel/proposal-class-properties',
          '@babel/transform-runtime'
        ],
      }
    }
  }
}