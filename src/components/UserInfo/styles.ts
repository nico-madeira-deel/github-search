import styled, { css } from 'styled-components'

export const Card = styled.section`
  width: 100%;

  ${({ theme }) => css`
    background-color: ${theme.colors.white};
    color: ${theme.colors.darkBlue};
    border-radius: ${theme.border.radius};
    margin: ${theme.spacings.medium} 0;
    padding: ${theme.spacings.small};

    h2 {
      margin-bottom: ${theme.spacings.xxsmall};
    }

    p {
      font-size: ${theme.font.sizes.small};
    }
  `}
`

export const Wrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 300px;
  text-align: center;
`

export const Picture = styled.picture`
  border-radius: 100%;
  display: block;
  height: 12rem;
  overflow: hidden;
  width: 12rem;

  img {
    height: auto;
    max-width: 100%;
  }

  ${({ theme }) => css`
    border: 4px solid ${theme.colors.darkBlue};
    margin-bottom: ${theme.spacings.xsmall};
  `}
`

export const Followers = styled.div`
  display: flex;

  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};

    a {
      background-color: ${theme.colors.pink};
      border-radius: ${theme.border.radius};
      color: ${theme.colors.darkBlue};
      font-size: ${theme.font.sizes.xsmall};
      font-weight: ${theme.font.bold};
      padding: ${theme.spacings.xxsmall};

      &:first-child {
        margin-right: ${theme.spacings.xxsmall};
      }
    }
  `}
`
