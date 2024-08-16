/// <reference types="cypress />

describe('Interacting with web elements', {
    // suite configs
  },
  () => {

  let testData
  beforeEach(()=> {
    cy.fixture('wd_test_data.json').then((data)=> {
      testData = data.data
    })
    cy.visit('https://webdriveruniversity.com')
  })

    it('Submit Contact Us form - positive case', {
      // spec config
    },
      ()=> {
        //By tag name
        // By attribute name and value
        // By id
        // By class
        // By multiple classes
        // By two different attributes
        // By xpath

      })

  })




