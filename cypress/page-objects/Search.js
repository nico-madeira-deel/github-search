module.exports = class Search {
  enterUser(user) {
    cy.get('#search').type(user, { delay: 100 })
    cy.get('[data-testid=button]').click()
  }
}
