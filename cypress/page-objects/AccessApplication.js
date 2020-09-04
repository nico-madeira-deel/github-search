/* eslint-disable @typescript-eslint/no-var-requires */
const Search = require('../page-objects/Search')

module.exports = class AccessApplication {
  go() {
    cy.visit(Cypress.env('baseURL'))
  }

  goToResults() {
    this.go()
    const search = new Search()
    search.enterUser('nicomadeira')
  }
}
