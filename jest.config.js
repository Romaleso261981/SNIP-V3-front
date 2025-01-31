// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextJest = require("next/jest");

const createJestConfig = nextJest({
  dir: "./" // вказуємо корінь проєкту
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // якщо є налаштування для тестів
  testEnvironment: "jest-environment-jsdom", // для використання jsdom як середовища тестування
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // маппінг для псевдонімів
    "\\.(css|less|scss|sass)$": "identity-obj-proxy" // для роботи з CSS модулями
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest" // для роботи з TypeScript
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/pages/_app.tsx", // виключити ці файли з покриття
    "!src/pages/_document.tsx"
  ],
  coverageReporters: ["lcov", "text-summary"] // формат покриття
};

module.exports = createJestConfig(customJestConfig); // використовуємо CommonJS для експорту
