module.exports = {
  testEnvironment: 'node',
  collectCoverageFrom: ['src/orderByProps.js'],
  coverageThreshold: {
    global: {
      lines: 100,
      functions: 100,
      branches: 100,
      statements: 100,
    },
  },
};
