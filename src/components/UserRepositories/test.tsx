import { screen } from '@testing-library/react'

import UserRepositories from '.'
import { renderWithTheme } from 'utils/tests/helpers'
import { mockRepository } from 'utils/tests/mock'

describe('<UserRepositories />', () => {
  it('should render properly', () => {
    const { container } = renderWithTheme(
      <UserRepositories {...mockRepository} />
    )

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should display description if passed by props', () => {
    renderWithTheme(<UserRepositories {...mockRepository} />)

    expect(screen.getByTestId('repository-description')).toBeInTheDocument()
  })
})
