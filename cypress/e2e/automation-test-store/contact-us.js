/// <reference types="cypress />

describe('Test suite', {
  viewportWidth: 1280,
  viewportHeight: 720
  // suite config
}, ()=> {

  let userData

  beforeEach(()=> {
    cy.fixture("test_store_user_data.json").then((uData) => {
      userData = uData.user_data
    })
    cy.visit("/")
  })


  it('Test Contact Us from via Automation Test Store', ()=> {
    cy.xpath('//a[contains(text(), \'Contact Us\')]').click({force: true})
    cy.location('pathname').should('eq','/index.php')
    cy.get('#ContactUsFrm_first_name').type(userData.first_name)
    cy.get('#ContactUsFrm_email').type(userData.email)
    cy.get('#ContactUsFrm_enquiry').type(userData.description)
    cy.xpath('//button[@title="Submit"]').click({force: true})
    cy.location('search').should('eq','?rt=content/contact/success')
    cy.get('.contentpanel p').should('have.text','Your enquiry has been successfully sent to the store owner!')
  })

})