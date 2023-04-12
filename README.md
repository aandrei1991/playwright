# Installation
---
For installing the project locally you need the latest Node.js version (currently: `v19.6.0`) and using Git you can clone the environment.
```
git clone https://github.com/aandrei1991/spriteCloud.git
```

# Running tests locally
After cloning the project you can build and run the tests:
```
npm install
npm init playwright/latest
```
For any issue with configuring Playwright please consult their documentation: https://playwright.dev/docs/intro

After the project is built, tests can be run using `npm run tests:all`

# Running tests in CI/CD
Tests are being ran in CI/CD currently at CircleCI https://app.circleci.com/pipelines/github/aandrei1991/spriteCloud/8/workflows/cdb9423a-2e5b-4922-a2b5-dd780b2f5cf8/jobs/7

In order run it in different environments (Jenkins, TeamCity, etc.) additional configuration is needed per platform, however, the tests can be ran easily from the CLI, after installing all dependencies. A Jenkins server was configured using the following script:
```
npm install
npx playwright install --with-deps 
npm run tests:all
```
# What I used to select the scenarios
- For e2e tests I've used the most interesting scenarios which can be also encountered on a daily work load.
- For api tests I've used the happy path flow of the application that would have real-life usage
  
# Why are they the most important
- The e2e tests are important because they can hone the skills of a QA Automation Engineer as well as be encountered during different projects
- On the api side I've chosen the happy path because otherwise the application cannot be used even as an MVP.
  
# What could be the next steps for the project
- The next step would be to automate and scale and the project as it can be used either for sharing the framework with peers or even to evaluate and build from it for different client needs.
