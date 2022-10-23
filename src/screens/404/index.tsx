import { Button } from '@components/atoms'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Subtitle, Title, Wrapper } from './styles'

const Error404: React.FC = () => {
  const navigate = useNavigate()

  const onGoBack = () => navigate(-1)

  return (
    <Wrapper data-testid="screen-404">
      <Title>Oops!</Title>
      <Subtitle>The page that you're requesting doesn't exist.</Subtitle>
      <Button text="GO BACK" size="large" variant="accent" onClick={onGoBack} />
    </Wrapper>
  )
}

export default Error404
