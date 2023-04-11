describe('Navigate to Team member page', () => {
  it('passes', () => {
    cy.visit('/team')
    cy.get('div').contains('Black Neal').click()
    cy.url().should('include', '/team')
  })
})