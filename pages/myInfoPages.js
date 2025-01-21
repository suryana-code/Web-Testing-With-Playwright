//Contains representations of the pages in the application being tested, separating the logic of page interactions from the tests to make it more structured, organized, and maintainable
exports.EditMyInfo = class EditMyInfo {
  constructor(page) {
    this.page = page;
    // Field locators
    this.firstName_textbox = page.getByPlaceholder("First Name");
    this.middleName_textbox = page.getByPlaceholder("Middle Name");
    this.lastName_textbox = page.getByPlaceholder("Last Name");
    this.employeeId_textbox = page
      .locator("div")
      .filter({ hasText: /^Employee IdOther Id$/ })
      .getByRole("textbox")
      .first();
    this.otherId_textbox = page
      .locator("div")
      .filter({ hasText: /^Employee IdOther Id$/ })
      .getByRole("textbox")
      .nth(1);

    //Button locators
    this.MyInfo_siteBar = page.getByRole("link", { name: "My Info" });
    this.save_button = page
      .locator("form")
      .filter({ hasText: "Employee Full NameEmployee" })
      .getByRole("button");
  }

  async action({ firstName, middleName, lastName, employeeID, outherID }) {
    await this.MyInfo_siteBar.click();
    await this.firstName_textbox.click();
    await this.firstName_textbox.clear();
    await this.firstName_textbox.fill(firstName);
    await this.middleName_textbox.click();
    await this.middleName_textbox.clear();
    await this.middleName_textbox.fill(middleName);
    await this.lastName_textbox.click();
    await this.lastName_textbox.clear();
    await this.lastName_textbox.fill(lastName);
    await this.employeeId_textbox.click();
    await this.employeeId_textbox.clear();
    await this.employeeId_textbox.fill(employeeID);
    await this.otherId_textbox.click();
    await this.otherId_textbox.clear();
    await this.otherId_textbox.fill(outherID);
    await this.save_button.click();
  }
};
