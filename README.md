# Cypress course 2024
[Udemy. The Complete Cypress v12 Course-Automation Testing Bootcamp](https://www.udemy.com/share/103quk3@i6toJiWbKxehYhSyPOC-Xe0s9JYWUDjz6MvwyfQ0Zb6FKl8-RCRSrACFsHa-_XelNg==/)

## Run tests locally

- **install dependencies**
``` 
npm init
```
- **run all rests headlessly**
``` 
npx cypress run
```
- **run a specific rest headlessly**
``` 
npx cypress run --spec "cypress/e2e/my-spec.cy.js
```
- **open cypress app**
``` 
npx cypress open
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
- **[Chai assertion library](https://www.chaijs.com/)**
- **[Cypress doc, assertions](https://docs.cypress.io/guides/references/assertions)**