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
    margin: ${theme.spacings.medium} 0;
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
    if (!user && !userNotFound) {
      router.push('/')
    }
  }, [router, user, userNotFound])

  return (
    <Layout condensed>
      <>
        {loading.user ? <Loader isCenter /> : null}
        {user && Object.keys(user).length ? <UserInfo {...user} /> : null}
        {userNotFound ? (
          <Card>User not found! Try again or search for other.</Card>
        ) : null}
      </>
      <>
        {!userNotFound ? (
          <Repositories>
            <h2>User Repositories</h2>
            {loading.repositories ? <Loader isCenter /> : null}
            {userRepositories.length && !emptyRepositories ? (
              <ListRepositories>
                {userRepositories.map((repo: UserRepositoriesResponse) => (
                  <UserRepositories key={repo.id} {...repo} />
                ))}
              </ListRepositories>
            ) : null}
          </Repositories>
        ) : null}
        {emptyRepositories ? (
          <Card>
            Ops. We did not find a repository. Maybe the user does not have one.
          </Card>
        ) : null}
      </>
    </Layout>
  )
}

export default Results
