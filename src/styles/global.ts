import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body, html, #__next {
    height: 100%;
  }

  ${({ theme }) => css`
    html {
      font-size: 62.5%;
    }

    body {
      background-color: ${theme.colors.darkBlue};
      color: ${theme.colors.white};
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
