describe('Check the homepage components ', () => {
  beforeEach(()=>{
    cy.login('meupanatuamao@xerreca.com', '@Piruzao12354')
    cy.visit('http://localhost:5173/profile')
  })

  it('should dysplay profile form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="tel"]').should('be.visible')
    cy.get('#update-profile').should('be.visible')
    cy.get('#delete-profile').should('be.visible')
  })

  it('should dysplay theme button', () => {
    cy.get('#button-theme').should('be.visible')
    cy.get('#button-logout').should('be.visible')
  })

  it('should dysplay theme and logout', () => {
    cy.get('#button-logout').click()
    cy.url().should('include','/')
  })



})