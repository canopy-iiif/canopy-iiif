// Add any custom config to be passed to Jest
/** @type {import('jest').Config} */
const config = {
  // Add more setup options before each test is run
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],

  moduleNameMapper: {
    // Handle module aliases
    "^@/(.*)$": "<rootDir>/$1",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@config/(.*)$": "<rootDir>/config/$1",
    "^@context/(.*)$": "<rootDir>/src/context/$1",
    "^@hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^@lib/(.*)$": "<rootDir>/src/lib/$1",
    "^@mocks/(.*)$": "<rootDir>/src/mocks/$1",
    "^@pages/(.*)$": "<rootDir>/src/pages/$1",
    "^@styles/(.*)$": "<rootDir>/src/styles/$1",
    "^@types/(.*)$": "<rootDir>/src/types/$1",

    // Mock next/font
    "next/font": "<rootDir>/src/mocks/next-font.ts",
  },
  testEnvironment: "jest-environment-jsdom",
};

export default config;
