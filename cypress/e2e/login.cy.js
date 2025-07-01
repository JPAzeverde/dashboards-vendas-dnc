describe('Login flow correct credentials', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })
  it('should dysplay login form', () => {
    cy.get('form').should('be.visible')
  })
  it('should login with valid credential', () => {
    cy.get('input[type="email"]').type('meupanatuamao@xerreca.com')
    cy.get('input[type="password"]').type('@Piruzao12354')
    cy.get('button[type="submit"]').click()
    cy.url().should('include','/home')
    cy.get('header').should('be.visible')
  })
})

describe('Login flow incorrect credentials', () => {
  beforeEach(()=>{
    cy.visit('http://localhost:5173/')
  })
  it('should dysplay login form', () => {
    cy.get('form').should('be.visible')
  })
  it('should login with invalid credential', () => {
    cy.get('input[type="email"]').type('meupanatuamaoasd@xerreeeca.com')
    cy.get('input[type="password"]').type('@Pzaasdo12354')
    cy.get('button[type="submit"]').click()
    cy.contains('Email ou senha inválido').should('be.visible')

  })
})