import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./" // Ваш корінь проєкту
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
    "\\.(css|less|scss|sass)$": "identity-obj-proxy"
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest"
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/pages/_app.tsx",
    "!src/pages/_document.tsx"
  ],
  coverageReporters: ["lcov", "text-summary"]
};

export default createJestConfig(customJestConfig);
