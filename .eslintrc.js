module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['standard-with-typescript', 'prettier'],
  rules: {
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external'],
        'newlines-between': 'never'
      }
    ]
  },
  parserOptions: {
    project: './packages/*/tsconfig.json'
  }
}
