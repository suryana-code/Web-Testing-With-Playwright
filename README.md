![Playwright banner](tutorial/images/playwright-banner.jpeg)

# Playwright Automation Testing Prototype

## Overview

This is a prototype project created for demonstrating automated testing using Playwright. It utilizes Data-Driven Testing (DDT) and Page Object Model (POM) to ensure a clean, scalable, and maintainable test structure. This prototype is designed to help teams or individuals looking to get hands-on experience with Playwright for web application testing.

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

🛎️ If you have any difficulties or just want to discuss, please give me your feedback at msuryana45@gmail.com
