/* eslint-disable @typescript-eslint/no-unused-vars */
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import { mockUser } from 'utils/tests/mock'

import UserInfo from '.'

describe('<UserInfo />', () => {
  it('should render the user info', () => {
    const { container } = renderWithTheme(<UserInfo {...mockUser} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have user image if prop avatar_url is passed', () => {
    renderWithTheme(<UserInfo {...mockUser} />)

    expect(
      screen.getByRole('img', {
        name: `Avatar image for the user ${mockUser.login}`
      })
    ).toBeInTheDocument()
  })

  it('should display heading with user name if prop name its passed', () => {
    renderWithTheme(<UserInfo {...mockUser} />)

    expect(
      screen.getByRole('heading', {
        name: mockUser.name
      })
    ).toBeInTheDocument()
  })

  it('should display heading with user login if prop name itsnt passed', () => {
    const { name, ...propsWithoutName } = mockUser
    renderWithTheme(<UserInfo {...propsWithoutName} />)

    expect(
      screen.getByRole('heading', {
        name: mockUser.login
      })
    ).toBeInTheDocument()
  })

  it('should display user email if prop email its passed', () => {
    renderWithTheme(<UserInfo {...mockUser} />)

    expect(screen.getByText(mockUser.email)).toBeInTheDocument()
  })

  it('should display user bio if prop bio its passed', () => {
    renderWithTheme(<UserInfo {...mockUser} />)

    expect(screen.getByText(mockUser.bio)).toBeInTheDocument()
  })
})
