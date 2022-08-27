import { expect, test } from "@playwright/test";

/* ** Test if screenshots are identical ** */

// To update screenshots: npx playwright test --update-snapshots
test("LoginPage Screenshots are identical", async ({ page }) => {
  await page.goto("/login");

  // Wait for the animation to end
  await page.waitForTimeout(5000);

  await expect(page).toHaveScreenshot({
    maxDiffPixels: 100,
    animations: "disabled", // Disable animations
  });
});
