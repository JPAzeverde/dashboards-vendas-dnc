describe('Check the homepage components ', () => {
  beforeEach(()=>{
    cy.login('meupanatuamao@xerreca.com', '@Piruzao12354')
    cy.visit('http://localhost:5173/home')
  })

  it('should dysplay total sales', () => {
    cy.get('#total-sales').should('be.visible')
  })

  it('should dysplay total meta mes', () => {
    cy.get('#metaaa-mes').should('be.visible')
  })

  it('should dysplay total leads', () => {
    cy.get('#total-leads').should('be.visible')
  })

  it('should dysplay mounth sales chart', () => {
    cy.get('#month-sales-chart').should('be.visible')
  })

  it('should dysplay sales stars', () => {
    cy.get('#sales-stars').should('be.visible')
  })

  it('should dysplay news', () => {
    cy.get('#news').should('be.visible')
  })

  it('should dysplay total sales year chart', () => {
    cy.get('#years-sales').should('be.visible')
  })

})