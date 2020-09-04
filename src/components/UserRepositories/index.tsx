import * as S from './styles'
import { UserRepositoriesResponse } from 'models/user'
import Link from 'next/link'

const UserRepositories = ({
  description,
  forks,
  html_url,
  name,
  stargazers_count,
  watchers
}: UserRepositoriesResponse) => {
  return (
    <S.Item>
      <Link href={html_url} passHref={true}>
        <a target="_blank" rel="noopener noreferrer">
          <h3>{name}</h3>
          {description ? (
            <p data-testid="repository-description">{description}</p>
          ) : null}
          <span>
            <S.Tags>Forks: {forks}</S.Tags>
            <S.Tags>Stars: {stargazers_count}</S.Tags>
            <S.Tags>Watchers: {watchers}</S.Tags>
          </span>
        </a>
      </Link>
    </S.Item>
  )
}

export default UserRepositories
