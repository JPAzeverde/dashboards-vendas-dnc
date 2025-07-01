describe('Check if create profile page renders the correct components', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/registration')
  })
  it('Should step 1 and 2 works', () => {
    cy.get('input[type="text"]').type(' Campo de nome')
    cy.get('input[type="email"]').type('asdnbdshaslksjdf@email.com')
    cy.get('input[type="tel"]').type('0095462012')
    cy.get('button[type="submit"]').click()
      cy.get('input[type="password"]').type('@Pizao12354')
    cy.get('button[type="submit"]').should('be.visible')
  })
})
