import { createContext, useContext, useState } from 'react'
import { useRouter } from 'next/router'

import {
  getUserData,
  getUserRepositoriesData,
  UserResponse,
  UserRepositoriesResponse
} from 'services/user'

type Loading = {
  user: boolean
  repositories: boolean
}

type UserContextData = {
  fetchUserData: (username: string) => void
  user: UserResponse | null
  userRepositories: UserRepositoriesResponse[] | []
  loading: Loading
}

type Props = {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
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
  const router = useRouter()

  const setterLoading = (value: string, loading: boolean) => {
    setLoading((prevState) => ({
      ...prevState,
      [value]: loading
    }))
  }

  const fetchUserData = async (username: string) => {
    setterLoading('user', true)
    try {
      const { data } = await getUserData(username)

      if (Object.keys(data).length) {
        const formattedUser = {
          ...(data?.avatar_url && { avatar: data.avatar_url }),
          ...(data?.bio && { bio: data.bio }),
          ...(data?.email && { email: data.email }),
          ...(data?.followers && { followers: data.followers }),
          ...(data?.following && { following: data.following }),
          ...(data?.name && { name: data.name }),
          id: data.id
        }

        router.push(`/?username=${username}`, undefined, { shallow: true })
        setUser(formattedUser)
        fetchUserRepositories(username)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
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
              owner: repo.owner,
              stargazers_count: repo.stargazers_count,
              watchers: repo.watchers
            }
          })
          .sort((a, b) => b.stargazers_count - a.stargazers_count)

        setUserRepositories(formattedRepositories)
      }
    } catch (error) {
      console.log('error', error)
    } finally {
      setterLoading('repositories', false)
    }
  }

  return (
    <UserContext.Provider
      value={{
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
