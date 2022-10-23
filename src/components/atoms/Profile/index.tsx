import React from 'react'
import { If } from '../If'
import { Image, ProfileWrapperProps, Title, Wrapper } from './styles'

export interface ProfileProps extends ProfileWrapperProps {
  url?: string
  name?: string
  style?: React.CSSProperties
  className?: string
}
export const Profile: React.FC<ProfileProps> = ({
  url,
  name,
  style,
  className,
  size = 'default',
  variant = 'default',
  shadow = false,
}) => {
  const renderInitials = (value?: string) => {
    if (value) {
      const splittedValue = value.split(' ')
      if (splittedValue.length > 1)
        return `${splittedValue[0][0]}${
          splittedValue[splittedValue.length - 1][0]
        }`.toUpperCase()

      return splittedValue[0][0].toUpperCase()
    }
  }
  return (
    <div>
      <Wrapper
        style={style}
        className={className}
        size={size}
        shadow={shadow}
        variant={variant}
        data-testid="atom-profile"
      >
        <If condition={!!url}>
          <Image src={url} />
        </If>
        <If condition={!url && !!name}>
          <Title>{renderInitials(name)}</Title>
        </If>
      </Wrapper>
    </div>
  )
}
