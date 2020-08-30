import api from './api'

type UserResponse = {
  avatar_url?: string
  bio?: string
  email?: string
  followers?: number
  following?: number
  id: number
  name?: string
}

export function getUserData(username: string) {
  const response = api.get<UserResponse>(`/users/${username}`)

  return response
}
