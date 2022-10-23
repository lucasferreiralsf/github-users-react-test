import React from 'react'
import { Title, Wrapper } from './styles'

type Props = {
  title?: string
}
export const Loading: React.FC<Props> = ({ title = 'Loading data...' }) => {
  return (
    <Wrapper data-testid="atom-loading">
      <Title>{title}</Title>
    </Wrapper>
  )
}
