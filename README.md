# <img width="30px" height="30px" src="./asset/playwright-logo.svg"/> Playwright Automation Testing Prototype

<br>
<p align="center">
  <img src="./asset/run login.spec.js & run with tag.gif"/>
</p>
<br>

## Overview

This is a prototype project created for demonstrating automated testing using Playwright. It utilizes Data-Driven Testing (DDT) and Page Object Model (POM) to ensure a clean, scalable, and maintainable test structure. This prototype is designed to help teams or individuals looking to get hands-on experience with Playwright for web application testing.

## What I Learned

This prototype project provides a practical learning opportunity for understanding and implementing effective testing strategies using Playwright.

1. Core Testing Principles

- Data-Driven Testing (DDT)
  - Learn how to structure tests to run the same scenarios with multiple data sets.
  - Understand how to separate test logic from test data, improving reusability and adaptability.
  - Gain experience in dynamically injecting external data into tests for flexible test execution.
- Page Object Model (POM)
  - Understand the benefits of organizing code by separating test logic from UI interactions.
  - Learn how to create and manage page classes to abstract UI interactions, making test cases cleaner and easier to maintain.

2. Coding Best Practices

- Learn to implement modular and reusable code
  - Store test data in external files (`/data`) for better organization and easier updates.
  - Centralize common actions (e.g., login, navigation) in reusable fixtures (`/fixtures`), reducing code duplication.
  - Keep test files (`/tests`) concise by delegating UI interaction details to page objects (`/pages`).
- Understand how to design scalable and maintainable test automation projects:
  - Use consistent folder and naming conventions.
  - Isolate responsibilities within the project (e.g., test data, test logic, and UI interactions).

3. Playwright-Specific Knowledge

- Gain hands-on experience with Playwright, including
  - Writing test cases using Playwright's APIs for interacting with web applications.
    Handling asynchronous operations effectively (e.g., waiting for elements, managing timeouts).
    Using Playwright’s built-in test runner and debugging features (e.g., screenshots, tracing).
- Learn how to utilize Playwright fixtures to set up consistent test environments across multiple test cases.

4. Practical Testing Skills

- Learn how to validate different application states, such as checking for success messages or UI updates after actions.
- Understand how to structure tests to focus on assertions while delegating repetitive actions to reusable methods or fixtures.
- Discover techniques for managing test data to simulate various user scenarios and edge cases.

5. Project Management Skills

- Understand how to structure an automation testing project to make it understandable for teams and scalable for future needs.
- Learn how to document a project effectively (as seen in the README file), making it easy for others to clone, explore, and use.

## Key Features

- Data-Driven Testing (DDT): The project implements DDT to run tests with multiple sets of data. This ensures that the same test case is executed with different data inputs, promoting reusability and reducing redundancy. The data used in the tests is stored in external files for easy management and modification.

- Page Object Model (POM): The tests follow the Page Object Model design pattern, which helps in organizing the test code. This structure separates the interaction with the UI elements (the pages) from the test logic, improving maintainability and readability of the test scripts.

## Folder Structure

- **/data**: Contains files with test data used in the project. The data is structured in such a way that it can be dynamically injected into the test cases, allowing for easy modification and addition of new data sets.
- **/fixtures**: Includes common setup and teardown operations, such as login actions and reusable test setups. Fixtures ensure that tests run in a consistent environment without duplicating code in each test file.
- **/pages**: Implements the Page Object Model. Each page of the application being tested has a corresponding class that abstracts the interactions with the elements of that page. This allows tests to focus on what needs to be tested, while the details of page interactions are encapsulated.
- **/tests**: Contains the actual test specifications (.spec.js files). Each test file contains one or more test cases. The tests are organized based on the functionality being tested.

## How to Use

1. **Clone the repository:**

```
git clone git@github.com:suryana-code/Web-Testing-With-Playwright.git
```

2. Install dependencies: Navigate to the project directory and install the required dependencies:

```
cd Web-Testing-With-Playwright
npm install
```

3. Run the tests: You can run the tests using the following command:

```
npx playwright test
```

4. Edit test data: If you want to update or add new test data, simply modify the files in the /data directory. New test data can be added to the corresponding test case to enhance the test coverage.

## System requirements

- Node.js 18+
- Windows 10+, Windows Server 2016+ or Windows Subsystem for Linux (WSL).
- macOS 13 Ventura, or later.
- Debian 12, Ubuntu 22.04, Ubuntu 24.04, on x86-64 and arm64 architecture.
- For more Playwright details, you can check https://playwright.dev/docs/intro

## Example of Data-Driven Test

Here’s a brief example of how data-driven tests are implemented:

```javascript
const employeeDataSet = require("../data/employeeData");

test.each(employeeDataSet)(
  "should edit employee info for %s",
  async (employeeData, { page }) => {
    // Use employeeData to run the test dynamically
    await page.goto("your-app-url");
    // Interactions and assertions
  }
);
```

In this example, each set of employeeData will drive the test, ensuring that the functionality is tested across multiple data sets.

## Contributing

Feel free to fork the repository and submit pull requests if you'd like to contribute. Whether you want to improve the existing tests, add new test cases, or just explore Playwright’s capabilities, this repository serves as a great starting point.

🛎️ If you have any difficulties or just want to discuss, please give me your feedback at msuryana45@gmail.com or send message on My [LinkedIn](https://www.linkedin.com/in/muhamad-suryana/)
