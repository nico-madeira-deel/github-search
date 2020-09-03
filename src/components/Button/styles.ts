import styled, { css } from 'styled-components'

export const Wrapper = styled.button`
  border: none;
  cursor: pointer;

  ${({ theme }) => css`
    background-color: ${theme.colors.pink};
    border-radius: ${theme.border.radius};
    color: ${theme.colors.darkBlue};
    font-size: ${theme.font.sizes.medium};
    font-weight: ${theme.font.bold};
    padding: ${theme.spacings.xxsmall} ${theme.spacings.small};
    transform: scale(1);
    transition: transform ${theme.transitions.fast};

    &:hover,
    &:focus {
      transform: scale(1.1);
      transition: transform ${theme.transitions.fast};
    }

    &:disabled {
      cursor: not-allowed;
      opacity: 0.5;
      transform: scale(1);
    }
  `}
`
