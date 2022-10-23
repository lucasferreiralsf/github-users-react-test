import { darken, ifStyle } from '@helpers'
import styled, { css, DefaultTheme } from 'styled-components'

const shadow = ifStyle('shadow')

type ProfileSize = 'default' | 'small' | 'large'
type ProfileVariant = 'default' | 'rounded'

export type ProfileWrapperProps = {
  size?: ProfileSize
  variant?: ProfileVariant
  shadow?: boolean
}
export const Wrapper = styled.div<ProfileWrapperProps>`
  overflow: hidden;
  background-color: ${({ theme }) => darken(theme.colors.primary, 4, 0.5)};
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: ${({ theme, ...props }) =>
    shadow(
      `0px 10px 18px -2px ${darken(theme.colors.primary, 50, 0.4)}`,
      'none',
    )(props)};

  ${({ theme, size = 'default' }) => resolveSize(size, theme)}
  ${({ theme, variant = 'default' }) => resolveVariant(variant, theme)}
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  margin: 0 auto;
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  color: ${({ theme }) => theme.colors.white};
`

const resolveSize = (size: ProfileSize, theme: DefaultTheme) => {
  switch (size) {
    case 'small':
      return css`
        width: 30px;
        height: 30px;
      `
    case 'large':
      return css`
        width: 150px;
        height: 150px;
      `

    default:
      return css`
        width: 50px;
        height: 50px;
      `
  }
}

const resolveVariant = (variant: ProfileVariant, theme: DefaultTheme) => {
  switch (variant) {
    case 'rounded':
      return css`
        border-radius: ${theme.radius.card};
      `

    default:
      return css`
        border-radius: 100%;
      `
  }
}
