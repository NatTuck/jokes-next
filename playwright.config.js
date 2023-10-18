import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '__tests__',
  testMatch: '*.spec.js',
});
