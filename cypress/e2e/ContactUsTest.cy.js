describe('Navigate to Contact page', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('button').contains('Contact Us').click()
    cy.url().should('include', '/contactus')
  })
})