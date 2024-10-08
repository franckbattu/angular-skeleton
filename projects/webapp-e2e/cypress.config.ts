import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4200',
    experimentalRunAllSpecs: true,
  },
  env: {},
  viewportWidth: 1920,
  viewportHeight: 1080,
});
