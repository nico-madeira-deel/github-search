/* eslint-disable @typescript-eslint/no-var-requires */
const AccessApplication = require('../page-objects/AccessApplication')
const Search = require('../page-objects/Search')

describe('Results', () => {
  beforeEach(() => {
    const accessApp = new AccessApplication()
    accessApp.goToResults()
  })

  it('Should display content when user its found', () => {
    cy.get('[data-testid=username]').should('contain', 'Nico Madeira')
    cy.get('[data-testid=followers]').should('exist')
    cy.get('[data-testid=following]').should('exist')
  })

  it('Should display user repositories when its found', () => {
    cy.get('[data-testid=list-repositories]')
      .find('li')
      .its('length')
      .should('be.gt', 0)
  })

  it('Should appear error message when user its not found', () => {
    cy.wait(2000)
    const search = new Search()
    search.enterUser('michaelgscotteeeeeee')
    cy.get('[data-testid=user-not-found]').should(
      'contain',
      'User not found! Try again or search for other.'
    )
  })

  it('Should appear error message when user doesnt have respositories', () => {
    const user = 'oloko'
    cy.wait(2000)
    const search = new Search()
    search.enterUser(user)
    cy.get('[data-testid=repositories-not-found]').should(
      'contain',
      'Ops. We did not find a repository. Maybe the user does not have one.'
    )
  })
})
