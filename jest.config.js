
module.exports = {
  testPathIgnorePatterns: [
    "<rootDir>/.next/", 
    "<rootDir>/node_modules/", 
    "<rootDir>/coverage/",
    "<rootDir>/coverage/lcov-report/"
  ],
  setupFilesAfterEnv: ["<rootDir>/setupTests.js"],
  transform: {
    "^.+\\.(js|jsx|ts|tsx)$": "<rootDir>/node_modules/babel-jest",
  },
  "moduleNameMapper": {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/__mocks__/fileMock.js",
    "\\.(css|scss|less|sass)$": "<rootDir>/__mocks__/styleMock.js"
  },
  "collectCoverageFrom": [
    "**/*.{js,jsx}",
  ]
};