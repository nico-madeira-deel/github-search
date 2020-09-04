import Card from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Card />', () => {
  it('should render the heading', () => {
    const { container } = renderWithTheme(<Card />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
