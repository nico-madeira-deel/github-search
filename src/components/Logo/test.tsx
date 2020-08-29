import { renderWithTheme } from 'utils/tests/helpers'
import { screen } from '@testing-library/react'

import Logo from '.'

describe('<Logo />', () => {
  it('should render in white by default', () => {
    renderWithTheme(<Logo />)

    expect(screen.getByLabelText(/github/i).parentElement).toHaveStyle({
      color: '#faf9f9'
    })
  })

  it('should render in dark blue when color is passed', () => {
    renderWithTheme(<Logo color="darkBlue" />)

    expect(screen.getByLabelText(/github/i).parentElement).toHaveStyle({
      color: '#555b6e'
    })
  })

  it('should render a normal size by default', () => {
    renderWithTheme(<Logo size="small" />)

    expect(screen.getByLabelText(/github/i).parentElement).toHaveStyle({
      width: '5rem'
    })
  })

  it('should render a small size when prop is passed', () => {
    renderWithTheme(<Logo size="small" />)

    expect(screen.getByLabelText(/github/i).parentElement).toHaveStyle({
      width: '5rem'
    })
  })
})
