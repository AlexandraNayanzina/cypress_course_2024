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
        cy.get('input[name="first_name"]')
          .should('have.attr','name','first_name')
          .type(testData.first_name)
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
        cy.location('href').should('eq','https://webdriveruniversity.com/Contact-Us/contact-form-thank-you.html')
        cy.get('h1').should('have.text','Thank You for your Message!')
        cy.contains(/^Thank/i)
        cy.get('#fountainG').should('be.visible')
      })

    it('Submit Contact Us form - negative case - submit empty form', {
        // spec config
      },
      ()=> {
      const errorMessage = '\n\n\n Error: all fields are required\n Error: Invalid email address\n\n\n'
        cy.visit('https://webdriveruniversity.com/Contact-Us/contactus.html')
        cy.xpath('//input[@value="SUBMIT"]').click({force: true})
        cy.location('href').should('eq','https://webdriveruniversity.com/Contact-Us/contact_us.php')
        cy.contains('Error: all fields are required').should('be.visible')
        cy.contains('Error: Invalid email address').should('be.visible')
        cy.get('body').first().should('have.text', errorMessage)

      })
  })




