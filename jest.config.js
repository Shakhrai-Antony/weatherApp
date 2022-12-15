/** @type {import('ts-jest').JestConfigWithTsJest} */
const { pathsToModuleNameMapper } = require('ts-jest');
const { compilerOptions } = require('./tsconfig.paths.json');
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/src',
  }),
  transform: {
    '^.+\\.test.ts?$': ['ts-jest'],
    '.+\\.(css|scss|png|jpg|svg)$': 'jest-transform-stub',
    'node_modules/variables/.+\\.(j|t)sx?$': 'ts-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!variables/.*)',
    '<rootDir>/node_modules',
  ],
};
