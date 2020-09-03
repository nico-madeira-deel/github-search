import api from './api'

export type UserResponse = {
  avatar_url?: string
  bio?: string
  email?: string
  followers?: number
  following?: number
  id: number
  name?: string
}

type OwnerUserRepositoriesResponse = {
  id: number
}

export type UserRepositoriesResponse = {
  description?: string
  forks: number
  html_url: string
  id: number
  name: string
  owner: OwnerUserRepositoriesResponse
  stargazers_count: number
  watchers: number
}

export function getUserData(username: string) {
  return api.get<UserResponse>(`/users/${username}`)
}

export function getUserRepositoriesData(username: string) {
  return api.get<UserRepositoriesResponse[]>(`/users/${username}/repos`)
}
