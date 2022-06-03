module.exports = {
  testEnvironment: "node",
  reporters: ["default"],
  testMatch: ["**/*.spec.js"],
  haste: {
    enableSymlinks: true,
  },
  collectCoverage: true,
  moduleNameMapper: {
    "coverage_test/(.*)": "<rootDir>/$1",
  },
};
