import { screen, fireEvent } from '@testing-library/react'

import Button from '.'
import { renderWithTheme } from 'utils/tests/helpers'

const initialProps = {
  onClick: jest.fn()
}

describe('<Button />', () => {
  it('should render the button', () => {
    const { container } = renderWithTheme(
      <Button {...initialProps}>Button</Button>
    )

    expect(screen.getByRole('button', { name: /button/i })).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should have disabled attribute when prop disabled its true', () => {
    renderWithTheme(
      <Button {...initialProps} disabled={true}>
        Button disabled
      </Button>
    )

    expect(
      screen.getByRole('button', { name: /button disabled/i })
    ).toBeDisabled()
  })

  it('should call the onclick when button its clicked', () => {
    renderWithTheme(<Button {...initialProps}>Button clicked</Button>)
    const button = screen.getByRole('button', { name: /button clicked/i })

    fireEvent.click(button, initialProps.onClick)

    expect(initialProps.onClick).toHaveBeenCalledTimes(1)
  })
})
