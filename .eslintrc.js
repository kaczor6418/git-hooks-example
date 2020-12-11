module.exports = {
  parserOptions: {
    createDefaultProgram: true,
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended' // Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    'no-eval': 2,
    'prefer-const': 2
  }
};
