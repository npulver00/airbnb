module.exports = { 
    preset: "ts-jest",
    testEnvironment: "node",
    testPathIgnorePatterns: ["/node_modules/", "tests/airbnbObject/"],
    testTimeout: 30000
  };