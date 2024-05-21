import { expect, test } from "@playwright/test";

const accountMailTest = process.env.ACCOUNT_MAIL_TEST as string;
const accountPasswordTest = process.env.ACCOUNT_PASSWORD_TEST as string;

test("Login and Logout process", async ({ page }) => {
  // Go to the HomePage
  await page.goto("/");

  // Redirect to LoginPage
  await expect(page).toHaveURL("/login");

  await page.locator("data-test=login-mail-input").fill(accountMailTest);
  await page
    .locator("data-test=login-password-input")
    .fill(accountPasswordTest);
  await page.locator("data-test=login-form-button").click();

  // Redirect to HomePage after login
  await expect(page).toHaveURL("/", { timeout: 10000 });

  // Expect HomePage to have H1 and logout Button
  const titleH1 = page.locator("h1");
  await expect(titleH1).toHaveText("Mes mots");
  const logoutButton = page.locator("data-test=logout-button");
  expect(logoutButton).toBeTruthy();

  // Navigate to AllWordsPage
  await page.locator("a:has-text('Tous mes mots')").click();
  await expect(page).toHaveURL("/all-words", { timeout: 10000 });

  // Logout and redirection to LoginPage
  await page.locator("[data-test='logout-button']").click();
  await page.waitForURL("/login");
  await expect(page).toHaveURL("/login");
});
