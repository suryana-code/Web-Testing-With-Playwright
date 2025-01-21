import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/login";
import { EditMyInfo } from "../pages/myInfo";

// Import dataset
const employeeDataSet = require("../data/employeeData");

test.describe("Edit My Info", () => {
  employeeDataSet.forEach((employeeData) => {
    test(`should edit employee info for ${employeeData.firstName}`, async ({
      page,
    }) => {
      // Login first
      const Login = new LoginPage(page);
      await Login.gotoLoginPage();
      await Login.login("Admin", "admin123");

      // Edit page
      const editMyInfoPage = new EditMyInfo(page);
      await editMyInfoPage.action(employeeData);

      // Validation
      await page
        .locator("text=Successfully Updated")
        .waitFor({ timeout: 10000 });
      await expect(page.locator("text=Successfully Updated")).toBeVisible();
    });
  });
});
