import { EmptyState, If, Loading } from '@components/atoms'
import { Routes } from '@navigation'
import { githubServices } from '@services'
import { GithubUserDataGET, GithubUserRepositoriesGET } from '@types'
import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import {
  Button,
  ButtonWrapper,
  Profile,
  RepositoriesWrapper,
  RepositoryCard,
  Title,
  Wrapper,
} from './styles'

const UserProfile: React.FC = () => {
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const username = searchParams.get('username')

  const [userRepositories, setUserRepositories] = useState<
    GithubUserRepositoriesGET[]
  >([])
  const [user, setUser] = useState<GithubUserDataGET>()
  const [loading, setLoading] = useState(false)

  const onGoBack = () => navigate(Routes.HOME, { replace: true })

  const getUserInfo = async () => {
    if (username) {
      const data = await githubServices.getUserByUsername(username)
      setUser(data)
    }
  }

  const getUserRepositories = async () => {
    if (username) {
      const data = await githubServices.getUserRepositories(username)
      setUserRepositories(data)
    }
  }

  const getUserData = async () => {
    try {
      setLoading(true)
      await getUserInfo()
      await getUserRepositories()
    } catch (error) {
      console.log({ error })
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getUserData()
  }, [])

  return (
    <Wrapper data-testid="screen-user-profile">
      <ButtonWrapper>
        <Button text="< Go back" onClick={onGoBack} />
      </ButtonWrapper>
      <If condition={!!user?.avatar_url}>
        <Profile url={user?.avatar_url} />
      </If>
      <Title>@{username}</Title>
      <If condition={userRepositories.length > 0}>
        <RepositoriesWrapper>
          {userRepositories.length > 0 &&
            userRepositories.map((repo) => (
              <RepositoryCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
              />
            ))}
        </RepositoriesWrapper>
      </If>

      <If condition={userRepositories.length === 0 && !loading}>
        <EmptyState />
      </If>

      <If condition={loading}>
        <Loading />
      </If>
    </Wrapper>
  )
}

export default UserProfile
