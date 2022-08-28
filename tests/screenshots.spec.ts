import { expect, test } from "@playwright/test";

/* ** Test if screenshots are identical ** */

// To update screenshots: npx playwright test --update-snapshots
// https://playwright.dev/docs/test-snapshots
test("LoginPage Screenshots are identical", async ({ page }) => {
  await page.goto("/login");

  await page.waitForTimeout(5000);

  // Expect the Full Page Screenshot to be identical as the previous one
  await expect(page).toHaveScreenshot({
    fullPage: true,
    maxDiffPixels: 100,
    animations: "disabled", // Disable animations
  });
});
