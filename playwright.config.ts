/* eslint-disable import/no-default-export */

import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";
import {} from "dotenv/config"; // Used for Playwright - Environment variables are located in .env file (not Next.js env.local file)

/**
 * See https://playwright.dev/docs/test-configuration.
 */

const config: PlaywrightTestConfig = {
  // In order to run Playwright tests without having to run a starting script (eg: npm run dev)
  webServer: {
    command: "npm run build && npm run start",
    /* Base URL to use in actions like `await page.goto("/")`. */
    url: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",
    timeout: 120 * 1000,
  },

  testDir: "./tests",
  /* Maximum time one test can run for. */
  timeout: 30 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: "html",
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto("/")`. */
    baseURL: process.env.PLAYWRIGHT_TEST_BASE_URL || "http://localhost:3000",

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on",
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: {
        ...devices["Desktop Chrome"],
      },
    },

    /* {
      name: "firefox",
      use: {
        ...devices["Desktop Firefox"],
      },
    },

    {
      name: "webkit",
      use: {
        ...devices["Desktop Safari"],
      },
    }, */
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  outputDir: ".tests/tests-results/",
};

export default config;
