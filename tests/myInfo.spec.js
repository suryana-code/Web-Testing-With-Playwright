//Contains test code that defines the scenarios or test cases to be executed on the application being tested.
import { expect } from "@playwright/test";
import { test } from "../fixtures/loginFixtures";

const employeeDataSet = require("../data/employeeData");

function getRandomData(dataSet) {
  const randomIndex = Math.floor(Math.random() * dataSet.length);
  return dataSet[randomIndex];
}
test.describe("Edit My Info Tests", () => {
  test("Edit My Info With Random Data", async ({
    page,
    editMyInfo,
    loginAsAdmin,
  }) => {
    const randomEmployeeData = getRandomData(employeeDataSet);

    //Edit page
    await editMyInfo.action(randomEmployeeData);

    //Validation
    await page.locator("text=Successfully Updated").waitFor({ timeout: 10000 });
    await expect(page.locator("text=Successfully Updated")).toBeVisible();
  });
});
