import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

import { getUserData, getUserRepositoriesData } from 'services/user'
import { UserResponse, UserRepositoriesResponse } from 'models/user'

type Loading = {
  user: boolean
  repositories: boolean
}

type UserContextData = {
  emptyRepositories: boolean
  fetchUserData: (username: string) => void
  user: UserResponse | null
  userRepositories: UserRepositoriesResponse[] | []
  loading: Loading
}

type Props = {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
  value: UserContextData
}

const UserContext = createContext<UserContextData>({} as UserContextData)

export default function UserProvider({ children }: Props) {
  const [loading, setLoading] = useState<Loading>({
    user: false,
    repositories: false
  })
  const [user, setUser] = useState<UserResponse | null>(null)
  const [userRepositories, setUserRepositories] = useState<
    UserRepositoriesResponse[]
  >([])
  const [emptyRepositories, setEmptyRepositories] = useState(false)
  const router = useRouter()

  const setterLoading = (value: string, loading: boolean) => {
    setLoading((prevState) => ({
      ...prevState,
      [value]: loading
    }))
  }

  const fetchUserData = async (username: string) => {
    setterLoading('user', true)
    setEmptyRepositories(false)
    try {
      const { data } = await getUserData(username)

      if (Object.keys(data).length) {
        const formattedUser = {
          ...(data?.avatar_url && { avatar_url: data.avatar_url }),
          ...(data?.bio && { bio: data.bio }),
          ...(data?.email && { email: data.email }),
          ...(data?.name && { name: data.name }),
          html_url: data.html_url,
          followers: data.followers,
          following: data.following,
          login: data.login
        }

        setUser(formattedUser)
        fetchUserRepositories(username)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      if (router.pathname === '/') {
        router.push('/results')
      }
      setterLoading('user', false)
    }
  }

  const fetchUserRepositories = async (username: string) => {
    setterLoading('repositories', true)
    try {
      const { data } = await getUserRepositoriesData(username)

      if (data.length) {
        const formattedRepositories = data
          .map((repo) => {
            return {
              ...(repo?.description && { description: repo.description }),
              forks: repo.forks,
              html_url: repo.html_url,
              id: repo.id,
              name: repo.name,
              stargazers_count: repo.stargazers_count,
              watchers: repo.watchers
            }
          })
          .sort((a, b) => b.stargazers_count - a.stargazers_count)

        setUserRepositories(formattedRepositories)
      } else {
        setEmptyRepositories(true)
      }
    } catch (error) {
      setEmptyRepositories(true)
    } finally {
      setterLoading('repositories', false)
    }
  }

  return (
    <UserContext.Provider
      value={{
        emptyRepositories,
        fetchUserData,
        loading,
        user,
        userRepositories
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within an UserProvider')
  }

  return context
}
