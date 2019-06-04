module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "semi": [0], // 不检测结尾分号
    "quotes": [0], // 不检测单双引号
    "space-before-function-paren": [0], // 不检测函数名和括号间的空格
    "camelcase": [0],
    "no-trailing-spaces": [0],
    "no-template-curly-in-string": [0],
    "indent": [0],
    "eol-last": [0],
    "space-in-parens": [0]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
