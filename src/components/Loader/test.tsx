import { renderWithTheme } from 'utils/tests/helpers'

import Loader from '.'

describe('<Loader />', () => {
  it('should render the loader properly', () => {
    const { container } = renderWithTheme(<Loader />)

    expect(container.firstChild).toMatchSnapshot()
  })
})
