describe('Navigate to specific blog page', () => {

  const testData = [
    "Delgado Kinney"
  ]

  testData.forEach(element => {
    it(`passes blog: ${element}`, () => {
      cy.visit('/blog')
      cy.get('div').contains(element).click()
      cy.url().should('include', '/blog/')
    })
  });

})