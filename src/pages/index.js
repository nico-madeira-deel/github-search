import styled, { css } from 'styled-components'
import Input from 'components/Input'
import Logo from 'components/Logo'

const Wrapper = styled.main`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-width: 700px;
  margin: 0 auto;
  padding: 0 10px;
  text-align: center;
  width: 100%;
`

export const Title = styled.h1`
  color: white;
  font-size: 5rem;
  font-weight: bold;
  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

export const Description = styled.p`
  color: white;
  font-size: 1.6rem;
  margin: 0;
`

const Home = () => {
  return (
    <Wrapper>
      <Logo size="small" />
      <Title>Github Search</Title>
      <Description>
        An application for search users and users repositories in github
      </Description>
      <Input callbackInput={(value) => console.log(value)} spaceBetween />
    </Wrapper>
  )
}

export default Home
