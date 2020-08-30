import { screen, fireEvent } from '@testing-library/react'

import Input from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const initialProps = {
  callbackInput: jest.fn()
}

describe('<Input />', () => {
  it('should render with normal size and label containing text search by default', () => {
    renderWithTheme(<Input {...initialProps} />)
    const input = screen.getByRole('textbox')

    expect(input).toBeInTheDocument()
    expect(screen.getByText(/search/i)).toBeInTheDocument()
    expect(input).toHaveStyle({ height: '5rem' })
  })

  it('should have height of 3rem when input size is small', () => {
    renderWithTheme(<Input {...initialProps} size="small" />)

    expect(screen.getByRole('textbox')).toHaveStyle({ height: '3rem' })
  })

  it('should call the callback function on blur', () => {
    const mockCallback = jest.fn()
    renderWithTheme(<Input callbackInput={mockCallback} name="search" />)
    const input = screen.getByLabelText('search')
    fireEvent.blur(input, mockCallback)
    expect(mockCallback).toHaveBeenCalledTimes(1)
  })
})
