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

export type UserRepositoriesResponse = {
  description?: string
  forks: number
  html_url: string
  id: number
  name: string
  stargazers_count: number
  watchers: number
}
