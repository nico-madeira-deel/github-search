import * as S from './styles'

const Main = ({
  title = 'Github Search',
  description = 'An application for search users and users repositories in github'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
