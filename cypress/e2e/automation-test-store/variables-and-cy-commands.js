describe('Verifying variables, cypress commands, and jquery commands',() => {


  beforeEach(()=> {

    cy.visit('/')

  })

  it('Navigate to specific product page', ()=> {

    const categories = ['Makeup', 'Skincare']

    for (let i = 0; i <categories.length ; i++) {
      const linkToMakeup = cy.get('.categorymenu').contains(categories[i])
      linkToMakeup.click({force: true})
      const categoryTitleMakeUp = cy.get('.maintext')
      categoryTitleMakeUp.should($item=> {
        expect($item.text()).contains(categories[i])
      })
      categoryTitleMakeUp.then(item=> {
        cy.log(`The category is: ${item.text()}`)
      })
    }
  })

  it.only('Validate the properties of the Contact Us page',()=> {
    cy.visit('/index.php?rt=content/contact')

    //Uses cypress command and chaining
    cy.contains('#ContactUsFrm','First name').find('#field_11').should('contain','First name')

    //JQuery approach
    cy.contains('#ContactUsFrm','First name').then(elem=> {
      const firstNameText = elem.find('#field_11').text()
      expect(firstNameText).to.contains('First name')
    })

    //Embedded commands(Closures)
    cy.get('#field_11').then(fnText=> {
      cy.log(fnText.text())
      cy.log(fnText)
    })
  })
})