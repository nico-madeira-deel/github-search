import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from '.'

const modifiers = {
  spaceBetween: (theme: DefaultTheme) => css`
    margin: ${theme.spacings.xsmall} 0;
  `
}

export const Wrapper = styled.div<InputProps>`
  display: flex;
  flex-direction: column;
  text-align: left;
  width: 100%;

  ${({ theme, spaceBetween }) => css`
    ${!!spaceBetween && modifiers.spaceBetween(theme)}
  `}
`

export const Input = styled.input<InputProps>`
  ${({ theme, size }) => css`
    background-color: transparent;
    border: 0.2rem solid ${theme.colors.white};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    height: ${!!size && size === 'small' ? '3rem' : '5rem'};
    padding-left: ${theme.spacings.xxsmall};
    transition: border-width ${theme.transitions.normal};
    outline: none;

    &:focus {
      border-width: 0.4rem;
    }
  `}
`

export const Label = styled.label`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.large};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
