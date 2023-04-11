describe('Test contact page inputs', () => {
  it('passes', () => {
    cy.visit('/contactus')
    //Test Name

    cy.get('[data-testid="namefield"]').type('Testy McTesterson')
    cy.get('[data-testid="namefield"]').should('have.value', 'Testy McTesterson')

    //Test Email

    cy.get('input').contains('Email Address').type('test@test.test')
    cy.get('input').contains('Email Address').should('have.value', 'test@test.test')

    //Test Phone

    cy.get('input').contains('Phone Number').type('0123456789')
    cy.get('input').contains('Phone Number').should('have.value', '0123456789')

    //Test Area of Interest

    cy.get('div').contains('Area of Interest').select('2')
    cy.get('div').contains('Area of Interest').should('have.value', '2')

    //Test Topic Information

    cy.get('textarea').contains('Topic Information').type('I am just here to test this, dont mind me')
    cy.get('textarea').contains('Topic Information').should('have.value', 'I am just here to test this, dont mind me')

    //Check URL

    cy.url().should('include', '/contactus/')
  })
})