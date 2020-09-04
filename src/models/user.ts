export type UserResponse = {
  avatar_url?: string
  html_url: string
  bio?: string
  email?: string
  followers?: number
  following?: number
  login: string
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
