const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
})

// Add any custom config to be passed to Jest
const customJestConfig = {
  setupFilesAfterEnv: ['./src/jest.setup.ts'],
  moduleNameMapper: {
    '^@/components/(.*)$': './src/components/$1',
    '^@/app/(.*)$': './src/app/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)