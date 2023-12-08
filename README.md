# tap
TA Playwright

*********************************************

PLAYWRIGHT TEST PROJECT SETUP
1. Create new folder for playwright project tests on the PC
2. Open this folder in VC Code
3. Check installed versions for
node
 node -v
npm
 npm -version

4. Install Playwright (e.g. installation doc https://playwright.dev/docs/intro )
npm init playwright@latest

4.1 (select JavaScript while installing - make a choice via up/down keys)

5. Add to package.json file a command for test running via console:
npm run test-all

6. Update playwright.config.js file according to lesson example (comment extra commands, select and set what is required for described test).

7. Add tests from the lesson according to the learned architecture approach (src> pages, steps, tests with basePage and baseSteps, loginPage and loginStep, login test etc. There is no needs to add hooks and etc like in Selenium projects).

*********************************************

Playwright powershell/bash useful commands notes:
nmp run test-all
//run the test (playwright project) and if add to .only for selected test, then only it will run.

or
npx playwright test .tests/LoginPOM.spec.js
//to run specific file with test (put to request location and name for selected file)

or
npx playwright test --reporter=html
//to run test with availability to open html reporter for it by next command after run
npx playwright show-report
//to open test report result in the browser
//or you may uncomment string related to this in playwright.config.js file – reporter: 'html'


npx playwright test --ui
//run test in UI mode

npx playwright show-trace tests/trace/trace.zip
//to view trace zip Content (put zip location to the command and on running it open trace result in browser):
//OR
//Open trace.zip from the browser (Optional). Navigate to https://trace.playwright.dev/ and then drag and drop the trace.zip folder

$env:DEBUG="pw:api"
npx playwright test
//If you need displayed detailed actions in console, then enable Verbose Logging in Powershell:

$env:DEBUG=""
npx playwright test
//Disable Verbose Logging in Powershell


*****
PLAYWRIGHT useful methods:
//await page.pause();   // Playwright Inspector

//await page.waitForTimeout(3000); // sleep
