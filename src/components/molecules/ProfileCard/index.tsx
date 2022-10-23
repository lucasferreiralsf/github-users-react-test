import { Button, If } from '@components/atoms'
import React from 'react'
import {
  ButtonWrapper,
  ContentWrapper,
  Profile,
  Subtitle,
  Title,
  Wrapper,
} from './styles'

type Props = {
  pictureUrl?: string
  name?: string
  repositoriesCount?: number
  onProfileClick?(): void
  style?: React.CSSProperties
  className?: string
}

export const ProfileCard: React.FC<Props> = ({
  pictureUrl,
  name,
  repositoriesCount,
  style,
  className,
  onProfileClick,
}) => {
  return (
    <Wrapper
      onClick={onProfileClick}
      style={style}
      className={className}
      data-testid="molecule-profile-card"
    >
      <If condition={!!pictureUrl || !!name}>
        <Profile url={pictureUrl} name={name} />
      </If>
      <ContentWrapper>
        <Title>{name}</Title>
        <If condition={!!repositoriesCount}>
          <Subtitle>Repositories: {repositoriesCount}</Subtitle>
        </If>
      </ContentWrapper>
      <ButtonWrapper>
        <Button text="See profile" />
      </ButtonWrapper>
    </Wrapper>
  )
}
