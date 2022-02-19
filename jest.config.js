export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    '<rootDir>/packages/**/__tests__/*.test.ts'
  ],
  preset: "ts-jest/presets/default-esm",
  transformIgnorePatterns: [
    "node_modules/(?!(ts-invariant)/)"
  ]
}