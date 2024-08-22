/// <reference types="Cypress"  />

describe('Inspect items using chaining commands',()=> {

  let testData

  beforeEach(()=> {
    cy.visit('https://automationteststore.com/')
    cy.fixture('test_store_user_data.json').then((uData)=>{
      testData = uData.user_data
    })
  })


  it('Inspect the first item on the Home page', ()=> {
    cy.get('.prdocutname')
      .first()
      .should('have.text','Skinsheen Bronzer Stick')
    cy.get('.thumbnail')
      .find('.pricetag > .productcart')
      .eq(0)
      .should('have.attr','title','Add to Cart')
    cy.get('.thumbnail')
      .find('.pricetag > .productcart')
      .first()
      .should('have.attr','title','Add to Cart')
  })
})