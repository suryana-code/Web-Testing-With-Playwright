//Contains representations of the pages in the application being tested, separating the logic of page interactions from the tests to make it more structured, organized, and maintainable
exports.LoginPage = class LoginPage {
  constructor(page) {
    this.page = page;
    this.username_textbox = page.locator('input[placeholder="Username"]');
    this.password_textbox = page.locator('input[placeholder="Password"]');
    this.login_button = page.locator('button:has-text("Login")');
  }

  async gotoLoginPage() {
    await this.page.goto("https://opensource-demo.orangehrmlive.com/");
    await this.page.waitForSelector('input[placeholder="Username"]');
  }

  async login(username, password) {
    console.log("Username:", username, "Password:", password);
    if (typeof username !== "string" || typeof password !== "string") {
      throw new Error("Username and password must be strings");
    }
    await this.username_textbox.fill(username);
    await this.password_textbox.fill(password);
    await this.login_button.click();
  }
};
