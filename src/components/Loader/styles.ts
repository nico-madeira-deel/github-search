import styled, { css } from 'styled-components'
import { LoaderProps } from '.'

export const Wrapper = styled.div<LoaderProps>`
  animation: spin 1s linear infinite;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  ${({ theme, isCenter }) => css`
    border: 5px solid ${theme.colors.blue};
    border-left-color: ${theme.colors.darkBlue};
    margin: ${theme.spacings.xsmall} ${isCenter ? 'auto' : '0'};
  `}
`
