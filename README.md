# Cypress course 2024
[Udemy. The Complete Cypress v12 Course-Automation Testing Bootcamp](https://www.udemy.com/share/103quk3@i6toJiWbKxehYhSyPOC-Xe0s9JYWUDjz6MvwyfQ0Zb6FKl8-RCRSrACFsHa-_XelNg==/)

## Run tests locally

- **install dependencies**
``` 
npm init
```
- **run all rests in a headless mode**
``` 
npx cypress run
```
- **run a specific rest in a headless mode**
``` 
npx cypress run --spec "cypress/e2e/my-spec.cy.js
```
- **open cypress app**
``` 
npx cypress open
```
### Alternative run

- **run test in a headless mode**
``` 
./node_modules/.bin/cypress run
```
- **run test in a headed mode**
``` 
./node_modules/.bin/cypress run --headed --browser chrome
```
- **run test in a headed mode on Chrome**
``` 
./node_modules/.bin/cypress run --headed 
```
- **run a specific test**
``` 
./node_modules/.bin/cypress run --spec cypress/e2e/webdriver-uni/contact-us.js
```
- **run a folder with tests**
``` 
./node_modules/.bin/cypress run --spec cypress/e2e/webdriver-uni/*
```
### Custom scripts
- **run all tests headless**
``` 
npm run triggerAllTests-headless
```
- **run all tests headed**
``` 
npm run triggerAllTests-headed
```
- **run all tests in Chrome**
``` 
npm run triggerAllTests-chrome
```
- **run all test using Cypress Dashboard**
``` 
npm run triggerAllTests-dashboard
```
- **record run on the Cypress Cloud.
Pass Project ID and Record Key in CLI**
``` 
export CYPRESS_PROJECT_ID={env var}
export CYPRESS_RECORD_KEY={env var}
npx cypress run --record
```
- **run with specific config file**
``` 
cypress run --env configFile=staging
```

## Useful  commands
- **install xpath plugin**
``` 
npm install --save-dev @cypress/xpath
```

## Useful  configurations
- **Test files to load, cypress.config.js**
``` 
specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx, feature}"
```

## Useful  links
- [Chai assertion library](https://www.chaijs.com/)
- [Cypress doc, assertions](https://docs.cypress.io/guides/references/assertions)
- [npm](https://docs.npmjs.com/about-npm)
- [mochawesome reporter](https://docs.npmjs.com/about-npm)