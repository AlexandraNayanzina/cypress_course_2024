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
      cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        //By tag name
        cy.get('h2').should('have.text','CONTACT US')
        // By attribute name and value
        cy.get('input[name="first_name"]').type(testData.first_name)
        // By id
        cy.get('#contact_form').find('input[name="last_name"]').type(testData.last_name)
        // By class
        cy.get('.feedback-input').eq(2).type(testData.email)
        // By multiple classes
        cy.get('.row').find('.feedback-input').eq(3).type(testData.comment)
        // By two different attributes
        cy.get('[type="reset"][value="RESET"]').should('be.visible')
        // By xpath
        cy.xpath('//input[@value="SUBMIT"]').click({force: true})
      })
  })




