import {
  GithubUserDataGET,
  GithubUserRepositoriesGET,
  GithubUsersGET,
} from '@types'
import api from './api'

export const githubServices = {
  getUsers,
  getUserByUsername,
  getUserRepositories,
}

async function getUsers() {
  const response = await api.get<GithubUsersGET[]>('/users')
  return response.data
}

async function getUserByUsername(username: string) {
  const response = await api.get<GithubUserDataGET>(`/users/${username}`)
  return response.data
}

async function getUserRepositories(username: string) {
  const response = await api.get<GithubUserRepositoriesGET[]>(
    `/users/${username}/repos`,
  )
  return response.data
}
