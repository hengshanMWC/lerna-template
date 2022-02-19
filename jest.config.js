export default {
  testEnvironment: "node",
  transform: {
    "^.+\\.tsx?$": "ts-jest"
  },
  testMatch: [
    '<rootDir>/packages/**/__tests__/*.test.ts'
  ],
  transformIgnorePatterns: [
    "/add/"
  ],
}