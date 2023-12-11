# tap
TA Playwright

*********************************************

PLAYWRIGHT TEST PROJECT SETUP
1. Create new folder for playwright project tests on the PC
1. Open this folder in VC Code
1. Check installed versions of the
    1. node:
       
       `node -v`
    1. npm:
       
       `npm -version`

1. Install Playwright (e.g. [installation doc](https://playwright.dev/docs/intro)):

   `npm init playwright@latest` // (select JavaScript while installing - make a choice via up/down keys)

1. Add to package.json file a command for test running via console:
npm run test-all

1. Update playwright.config.js file according to lesson example (comment extra commands, select and set what is required for described test).

1. Add tests according to the selected architecture approach (e.g. src> pages, steps, tests with basePage and baseSteps, loginPage and loginStep, login test etc. There is no needs to add hooks and etc like in Selenium projects).

*********************************************

## Playwright powershell/bash useful commands notes:
### Run
Run the test (playwright project) and if add to .only for selected test, then only it will run:

`nmp run test-all`

To run specific file with test (put to request location and name for selected file):

`npx playwright test <selectedTest>` 

for example:

`npx playwright test <.tests/LoginPOM.spec.js`> 

Run test in UI mode:

`npx playwright test --ui`

### Reporter
To run test with availability to open html reporter for it by next command after run:

'npx playwright test --reporter=html'

To open test report result in the browser:

`npx playwright show-report`

Or you may uncomment string related to this in playwright.config.js file:

`reporter: 'html'`

### Trace zip
To view trace zip Content (put zip location to the command and on running it open trace result in browser):

`npx playwright show-trace tests/trace/trace.zip`

or

Open trace.zip from the browser (Optional). Navigate to https://trace.playwright.dev/ and then drag and drop the trace.zip folder.

### Verbose Logging in Powershell
Enable Verbose Logging in Powershell, if you need displayed detailed actions in console:

`$env:DEBUG="pw:api"
npx playwright test`

Disable Verbose Logging in Powershell:

`$env:DEBUG=""
npx playwright test`

*****
## PLAYWRIGHT useful methods:
Playwright Inspector (add to the test's code before action where you need to make a pause and run inspector):

`await page.pause();` 

Sleep between test actions can be added by:

`await page.waitForTimeout(3000);`
