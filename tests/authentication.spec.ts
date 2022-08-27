import { expect, test } from "@playwright/test";

const gitHubAccountUsernameTest = process.env
  .GH_ACCOUNT_USERNAME_TEST as string;

const gitHubAccountPasswordTest = process.env
  .GH_ACCOUNT_PASSWORD_TEST as string;

const gitHubLoginURL = "https://github.com/login";

test("Login and Logout process", async ({ page }) => {
  // Log In to GitHub Account
  await page.goto(gitHubLoginURL);
  await page.locator("input[name='login']").fill(gitHubAccountUsernameTest);
  await page.locator("input[name='password']").fill(gitHubAccountPasswordTest);
  await page.locator("input:has-text('Sign in')").click();

  // Redirect to GitHub.com after login
  await expect(page).toHaveURL("https://github.com/");

  // Go to localhost
  await page.goto("/");
  await page.locator("data-test=github-login-button").click();

  // Wait for GitHub Redirection to localhost
  await page.waitForURL("/");

  // Expect HomePage to have H1 and logout Button
  const titleH1 = page.locator("h1");
  await expect(titleH1).toHaveText("Mes mots");
  const logoutButton = page.locator("data-test=logout-button");
  expect(logoutButton).toBeTruthy();

  // Navigate to AllWordsPage
  await page.locator("a:has-text('Tous mes mots')").click();
  await expect(page).toHaveURL("/all-words");

  // Logout and redirection to LoginPage
  await page.locator("[data-test='logout-button']").click();
  await page.waitForURL("/login");
  await expect(page).toHaveURL("/login");
});
