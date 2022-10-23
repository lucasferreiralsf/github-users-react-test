import React from 'react'
import { Title, Wrapper } from './styles'

type Props = {
  title?: string
}
export const EmptyState: React.FC<Props> = ({
  title = "Oh no. I didn't find anything with your search",
}) => {
  return (
    <Wrapper data-testid="atom-empty-state">
      <Title>{title}</Title>
    </Wrapper>
  )
}
