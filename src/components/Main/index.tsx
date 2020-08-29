import * as S from './styles'

const Main = ({
  title = 'Spectrum boilerplate',
  description = 'Starter project with Next, React and Typescript!'
}) => (
  <S.Wrapper>
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
  </S.Wrapper>
)

export default Main
