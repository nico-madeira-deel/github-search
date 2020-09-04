import api from './api'
import { UserResponse, UserRepositoriesResponse } from 'models/user'

export function getUserData(username: string) {
  return api.get<UserResponse>(`/users/${username}`)
}

export function getUserRepositoriesData(username: string) {
  return api.get<UserRepositoriesResponse[]>(`/users/${username}/repos`)
}
