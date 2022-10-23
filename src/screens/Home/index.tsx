import { Routes } from '@navigation'
import { githubServices } from '@services'
import { GithubUsersGET } from '@types'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { createSearchParams, useNavigate } from 'react-router-dom'
import {
  ContentWrapper,
  ProfileCard,
  SearchButton,
  SearchWrapper,
  TextField,
  Wrapper,
} from './styles'

type HomeForm = {
  search?: string
}

const Home: React.FC = () => {
  const navigate = useNavigate()
  const { control, handleSubmit } = useForm<HomeForm>()
  const [users, setUsers] = useState<GithubUsersGET[]>([])

  const fetchUsers = async () => {
    const data = await githubServices.getUsers()
    setUsers(data)
  }

  const handleUserProfile = (username?: string) => {
    if (username)
      navigate({
        pathname: Routes.USER_PROFILE,
        search: createSearchParams({ username }).toString(),
      })
  }

  const onSearchUser = ({ search }: HomeForm) => {
    handleUserProfile(search)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  return (
    <Wrapper data-testid="screen-home">
      <ContentWrapper>
        <SearchWrapper onSubmit={handleSubmit(onSearchUser)}>
          <TextField
            control={control}
            name="search"
            placeholder="Search user"
          />
          <SearchButton text="Search" />
        </SearchWrapper>
        {users.map((user) => (
          <ProfileCard
            key={user.login}
            pictureUrl={user.avatar_url}
            name={user.login}
            onProfileClick={() => handleUserProfile(user.login)}
          />
        ))}
      </ContentWrapper>
    </Wrapper>
  )
}

export default Home
