/* eslint-disable @typescript-eslint/no-var-requires */
const AccessApplication = require('../page-objects/AccessApplication')
const Search = require('../page-objects/Search')

describe('Home', () => {
  beforeEach(() => {
    const accessApp = new AccessApplication()
    accessApp.go()
  })

  it('Display content when application loads', () => {
    cy.get('[data-testid=main-title]').should('contain', 'Github Search')
    cy.get('[data-testid=main-description]').should(
      'contain',
      'An application for search users and users repositories in github'
    )
  })

  it('Button should init disabled', () => {
    cy.get('[data-testid=button]').should('be.disabled')
  })

  it('Searching for user must redirect to results page', () => {
    const search = new Search()
    search.enterUser('nicomadeira')
    cy.location().should((location) => {
      expect(location.pathname).to.eq('/results')
    })
  })
})
