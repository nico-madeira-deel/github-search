import styled, { css, DefaultTheme } from 'styled-components'
import { LayoutProps } from '.'

const modifiers = {
  condensed: {
    wrapper: (theme: DefaultTheme) => css`
      height: auto;

      & > div {
        display: flex;
        justify-content: space-between;
      }

      header {
        flex-direction: row;

        h1 {
          font-size: ${theme.font.sizes.large};
          margin-left: ${theme.spacings.xsmall};
        }
      }

      .row {
        display: flex;
        align-items: flex-end;
        justify-content: center;

        button {
          margin-left: ${theme.spacings.xxsmall};
        }
      }
    `
  }
}

export const Main = styled.main`
  width: 100%;
`

export const Wrapper = styled.div<LayoutProps>`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  width: 100%;

  ${({ condensed, theme }) => css`
    transition: all ${theme.transitions.fast};
    padding: 0 ${theme.spacings.xsmall};
    padding-top: ${theme.spacings.xsmall};
    ${condensed && modifiers.condensed.wrapper(theme)}
  `}
`

export const Header = styled.header`
  align-items: center;
  display: flex;
  flex-direction: column;
`

export const Title = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    font-weight: ${theme.font.bold};
    margin: ${theme.spacings.small} 0;
  `}
`

export const Description = styled.p`
  margin: 0;
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
  `}
`
