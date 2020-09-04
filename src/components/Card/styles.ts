import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkBlue};
    border-radius: ${theme.border.radius};
    margin: ${theme.spacings.medium} 0;
    padding: ${theme.spacings.small};
  `}
`
