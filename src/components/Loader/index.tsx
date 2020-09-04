import * as S from './styles'

export type LoaderProps = {
  isCenter?: boolean
}

const Loader = ({ isCenter = false }: LoaderProps) => (
  <S.Wrapper data-testid="loader" isCenter={isCenter} />
)

export default Loader
