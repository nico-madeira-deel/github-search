module.exports = class AccessApplication {
  go() {
    cy.visit(Cypress.env('baseURL'))
    this.waitInterval = 6000
  }
}
