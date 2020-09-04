import { useEffect } from 'react'
import { useRouter } from 'next/router'
import styled, { css } from 'styled-components'
import { useUser } from 'contexts/UserContext'
import Layout from 'components/Layout'
import UserInfo from 'components/UserInfo'
import UserRepositories from 'components/UserRepositories'
import { UserRepositoriesResponse } from 'models/user'
import Card from 'components/Card'
import Loader from 'components/Loader'

const Repositories = styled.div`
  width: 100%;
`
const ListRepositories = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  ${({ theme }) => css`
    margin: ${theme.spacings.small} 0;
  `}
`

const Wrapper = styled.div`
  text-align: center;

  ${({ theme }) => css`
    h2 {
      margin-top: ${theme.spacings.small};
    }
  `}
`

const Results = () => {
  const {
    emptyRepositories,
    loading,
    user,
    userNotFound,
    userRepositories
  } = useUser()
  const router = useRouter()

  useEffect(() => {
    if (loading && !loading.user && !user && !userNotFound) {
      router.push('/')
    }
  }, [router, loading, user, userNotFound])

  return (
    <Layout condensed>
      <Wrapper>
        <h2>User</h2>
        {loading.user ? <Loader isCenter /> : null}
        {user && Object.keys(user).length ? <UserInfo {...user} /> : null}
        {userNotFound ? (
          <Card>
            <p data-testid="user-not-found">
              User not found! Try again or search for other.
            </p>
          </Card>
        ) : null}
      </Wrapper>
      <>
        {!userNotFound ? (
          <Repositories>
            <h2>User Repositories</h2>
            {loading.repositories ? <Loader isCenter /> : null}
            {userRepositories.length && !emptyRepositories ? (
              <ListRepositories data-testid="list-repositories">
                {(userRepositories as UserRepositoriesResponse[]).map(
                  (repo: UserRepositoriesResponse) => (
                    <UserRepositories key={repo.id} {...repo} />
                  )
                )}
              </ListRepositories>
            ) : null}
          </Repositories>
        ) : null}
        {emptyRepositories ? (
          <Card>
            <p data-testid="repositories-not-found">
              Ops. We did not find a repository. Maybe the user does not have
              one.
            </p>
          </Card>
        ) : null}
      </>
    </Layout>
  )
}

export default Results
