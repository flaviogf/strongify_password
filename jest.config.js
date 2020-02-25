module.exports = {
  bail: 1,
  collectCoverageFrom: ['src/index.js'],
  transform: {
    '.(js|jsx|ts|tsx)': '@sucrase/jest-plugin',
  },
}
