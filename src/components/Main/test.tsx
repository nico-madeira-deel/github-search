import { render, screen } from '@testing-library/react'

import Main from '.'

describe('<Main />', () => {
  it('should render the heading', () => {
    render(<Main />)

    expect(
      screen.getByRole('heading', { name: /github search/i })
    ).toBeInTheDocument()

    expect(
      screen.getByText(
        /an application for search users and users repositories in github/i
      )
    )
  })
})
