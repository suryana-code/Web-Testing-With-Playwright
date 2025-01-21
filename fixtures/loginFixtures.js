//To set up specific conditions or data required and ensure that testing can be performed in the correctly prepared environment
//Example: In myInfo.spec.js, in that spec.js we focus on editing user data. Before that is done, we need the login process. We store the login step in this file

import { test as baseTest } from "@playwright/test";
import { LoginPage } from "../pages/loginPages";
import { EditMyInfo } from "../pages/myInfoPages";

const credentialSet = require("../data/credentialsData");

function getCredential(dataSet) {
  return dataSet[0];
}

const test = baseTest.extend({
  loginAsAdmin: async ({ page }, use) => {
    const { username, password } = getCredential(credentialSet);
    const loginPage = new LoginPage(page);
    await loginPage.gotoLoginPage();
    await loginPage.login(username, password);
    await use(page);
  },

  editMyInfo: async ({ page }, use) => {
    const editMyInfoPage = new EditMyInfo(page);
    await use(editMyInfoPage);
  },
});

export { test };
``;
