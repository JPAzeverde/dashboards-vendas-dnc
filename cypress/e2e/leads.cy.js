describe('Check the homepage components ', () => {
  beforeEach(()=>{
    cy.login('meupanatuamao@xerreca.com', '@Piruzao12354')
    cy.visit('http://localhost:5173/leads')
  })

  it('should dysplay leads table', () => {
    cy.get('#leads-title').should('be.visible')
  })

  it('should dysplay leads form', () => {
    cy.get('form').should('be.visible')
    cy.get('input[type="text"]').should('be.visible')
    cy.get('input[type="email"]').should('be.visible')
    cy.get('input[type="tel"]').should('be.visible')
    cy.get('button[type="submit"]').should('be.visible')
  })


})