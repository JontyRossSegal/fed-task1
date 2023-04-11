describe('Navigate to About page', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('[href="/about"] > .MuiButtonBase-root').click()
    cy.url().should('include', '/about')
  })
})