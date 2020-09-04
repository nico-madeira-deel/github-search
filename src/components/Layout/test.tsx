import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Layout from '.'

describe('<Layout />', () => {
  it('should render the layout properly', () => {
    const { container } = renderWithTheme(<Layout />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render the layout condensed when required', () => {
    const { container } = renderWithTheme(<Layout condensed={true} />)

    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have smaller height when condensed', () => {
    renderWithTheme(<Layout condensed={true} />)

    expect(screen.getByTestId('layout')).toHaveStyle({ height: 'auto' })
  })
})
