describe('Navigate to Blog page', () => {
  it('passes', () => {
    cy.visit('/')
    cy.get('button').contains('Blog').click()
    cy.url().should('include', '/blog')
  })
})