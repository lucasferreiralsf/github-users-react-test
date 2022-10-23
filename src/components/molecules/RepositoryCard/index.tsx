import React from 'react'
import { ContentWrapper, Subtitle, Title, Wrapper } from './styles'

type Props = {
  name?: string
  description?: string
  style?: React.CSSProperties
  className?: string
}

export const RepositoryCard: React.FC<Props> = ({
  name,
  description,
  style,
  className,
}) => {
  return (
    <Wrapper
      style={style}
      className={className}
      data-testid="molecule-repository-card"
    >
      <ContentWrapper>
        <Title>{name}</Title>
        <Subtitle>{description}</Subtitle>
      </ContentWrapper>
    </Wrapper>
  )
}
