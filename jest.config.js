// jest.config.js
import nextJest from "next/jest";

const createJestConfig = nextJest({
  dir: "./" // Ваш корінь проєкту
});

const customJestConfig = {
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // Якщо є файл з налаштуваннями для тестів
  testEnvironment: "jest-environment-jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Маппінг для ваших псевдонімів шляхів
    "\\.(css|less|scss|sass)$": "identity-obj-proxy" // Для маппінгу стилів
  },
  transform: {
    "^.+\\.(ts|tsx)$": "babel-jest" // Використання babel для трансформації TypeScript та JSX
  },
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}", // Включення всіх TypeScript файлів в покриття
    "!src/pages/_app.tsx", // Не брати ці файли до покриття
    "!src/pages/_document.tsx"
  ],
  coverageReporters: ["lcov", "text-summary"] // Формати покриття
};

export default createJestConfig(customJestConfig);
