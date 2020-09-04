import styled, { css } from 'styled-components'

import { LogoProps } from '.'

export const Wrapper = styled.div<LogoProps>`
  ${({ theme, color, size }) => css`
    color: ${theme.colors[color!]};
    height: auto;
    width: ${!!size && size === 'small' ? '3rem' : '5rem'};
  `}
`
