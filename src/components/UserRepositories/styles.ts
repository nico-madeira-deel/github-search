import styled, { css } from 'styled-components'

export const Item = styled.li`
  cursor: pointer;
  list-style: none;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.darkBlue};
    margin-right: ${theme.spacings.xsmall};
    margin-bottom: ${theme.spacings.xsmall};
    padding: ${theme.spacings.xsmall} ${theme.spacings.xxsmall};
    transform: scale(1);
    transition: transform ${theme.transitions.fast};
    width: calc((100% / 3) - ${theme.spacings.xsmall});

    &:hover {
      transform: scale(1.025);
      transition: transform ${theme.transitions.fast};
    }

    &:nth-of-type(3n - 0),
    &:last-of-type {
      margin-right: 0;
    }

    h3 {
      font-size: ${theme.font.sizes.medium};
      word-break: break-word;
    }

    p {
      font-size: ${theme.font.sizes.small};
      margin: ${theme.spacings.xsmall} 0;
    }

    a {
      color: ${theme.colors.darkBlue};
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      height: 100%;
    }

    @media (max-width: ${theme.mediaQuery.mobile}px) {
      margin-right: 0;
      width: 100%;
    }
  `}
`

export const Tags = styled.span`
  --spacing-tag: 0.4rem;

  display: block;
  margin-top: var(--spacing-tag);

  ${({ theme }) => css`
    border-radius: ${theme.border.radius};
    font-size: ${theme.font.sizes.xsmall};
    font-weight: ${theme.font.bold};
    padding: var(--spacing-tag);

    &:nth-of-type(1) {
      background-color: ${theme.colors.pink};
    }

    &:nth-of-type(2) {
      background-color: ${theme.colors.lightBlue};
    }

    &:nth-of-type(3) {
      background-color: ${theme.colors.blue};
    }
  `}
`
