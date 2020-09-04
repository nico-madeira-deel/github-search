import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
  }

  html, body, #__next {
    height: 100%;
  }

  a:active,
  a:visited {
    color: inherit;
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
