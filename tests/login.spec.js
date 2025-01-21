//Contains test code that defines the scenarios or test cases to be executed on the application being tested.
import { expect } from "@playwright/test";
import { LoginPage } from "../pages/loginPages";
import { test } from "../fixtures/loginFixtures";

test.describe("Login Tests", () => {
  test("With Valid Credential @positive", async ({ loginAsAdmin }) => {
    await expect(
      loginAsAdmin.getByRole("heading", { name: "Dashboard" })
    ).toBeVisible();
  });

  test("With Invalid Credentials (username only)", async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login("wrong", "admin123");
    await expect(
      page.getByRole("heading", { name: "Dashboard" })
    ).not.toBeVisible();
    await expect(page.locator(".oxd-alert-content")).toHaveText(
      "Invalid credentials"
    );
  });

  test("With Invalid Credentials (password only)", async ({ page }) => {
    const Login = new LoginPage(page);

    await Login.gotoLoginPage();
    await Login.login("Admin", "wrongPassword");
    await expect(
      page.getByRole("heading", { name: "Dashboard" })
    ).not.toBeVisible();
    await expect(page.locator(".oxd-alert-content")).toHaveText(
      "Invalid credentials"
    );
  });

  test("With Invalid Credentials (username & password)", async ({ page }) => {
    const Login = new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login("wrong", "wrongPassword");
    await expect(
      page.getByRole("heading", { name: "Dashboard" })
    ).not.toBeVisible();
    await expect(page.locator(".oxd-alert-content")).toHaveText(
      "Invalid credentials"
    );
  });
});
