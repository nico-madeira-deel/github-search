import styled, { css, DefaultTheme } from 'styled-components'
import { InputProps } from '.'

const modifiers = {
  spaceBetween: (theme: DefaultTheme) => css`
    margin: ${theme.spacings.small} 0;
  `,
  small: (theme: DefautTheme) => css`
    height: 3rem;
    font-size: ${theme.font.sizes.medium};
  `,
  normal: (theme: DefaultTheme) => css`
    height: 5rem;
    font-size: ${theme.font.sizes.large};
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
    padding-left: ${theme.spacings.xxsmall};
    transition: border-width ${theme.transitions.normal};
    outline: none;

    &:focus {
      border-width: 0.4rem;
    }

    ${!!size && modifiers[size!](theme)}
  `}
`

export const Label = styled.label<InputProps>`
  ${({ theme, size }) => css`
    color: ${theme.colors.white};
    font-size: ${!!size && size === 'small'
      ? theme.font.sizes.medium
      : theme.font.sizes.large};
    margin-bottom: ${theme.spacings.xxsmall};
  `}
`
