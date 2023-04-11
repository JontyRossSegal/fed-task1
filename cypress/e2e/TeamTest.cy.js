describe('Navigate to Team page', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('button').contains('Team').click()
    cy.url().should('include', '/team')
  })
})