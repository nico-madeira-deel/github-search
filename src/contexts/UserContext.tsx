import { createContext, useContext, useMemo, useState } from 'react'
import { useRouter } from 'next/router'

import { getUserData } from 'services/user'

export type User = {
  avatar?: string
  bio?: string
  email?: string
  followers?: number
  following?: number
  id: number
  name?: string
}

type UserContextData = {
  user: User | null
  loading: boolean
}

type Props = {
  //eslint-disable-next-line @typescript-eslint/no-explicit-any
  children?: any
}

const initialState = {
  user: null,
  loading: false
}

const UserContext = createContext<UserContextData>({} as UserContextData)

const UserProvider = ({ children }: Props) => {
  const [state, setState] = useState<UserContextData>(initialState)
  const router = useRouter()

  const fetchUserData = async (username: string) => {
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
        return formattedUser
      }
    } catch (error) {
      console.log('error', error)
    }
  }

  const value = useMemo(() => {
    return {
      setState,
      state
    }
  }, [state])

  return (
    <UserContext.Provider
      value={{
        fetchUserData,
        loading: value.state.loading,
        user: value.state.user
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

function useUser() {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser must be used within an UserProvider')
  }

  return context
}

export { UserProvider, useUser }
