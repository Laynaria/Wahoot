const config = {
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
    // this line is optional and the tilde shortcut
    // will not be used in this tutorial
    "^~/(.*)$": "<rootDir>/$1",
  },
  transform: {
    "^.+\\.ts?$": "ts-jest",
    "^.+\\.vue$": "@vue/vue3-jest",
  },
  moduleFileExtensions: ["ts", "js", "vue", "json"],

  testEnvironment: "jsdom",
  testEnvironmentOptions: {
    customExportConditions: ["node", "node-addons"],
  },

  collectCoverageFrom: [
    "components/**/*.vue",
    "layouts/**/*.vue",
    "pages/**/*.vue",
    "lib/**/*.ts",
    "plugins/**/*.ts",
    "store/**/*.ts",
  ],
};

export default config;
