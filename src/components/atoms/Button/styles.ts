import { darken, ifStyle } from '@helpers'
import styled, { css, DefaultTheme } from 'styled-components'

const fullwidth = ifStyle('fullwidth')

type ButtonVariant = 'default' | 'primary' | 'accent'
type ButtonSize = 'default' | 'small' | 'large'

export type DefaultButtonProps = {
  fullwidth?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}
export const DefaultButton = styled.button<DefaultButtonProps>`
  width: ${fullwidth('100%', 'fit-content')};
  height: fit-content;
  border: none;
  padding: ${({ theme, ...props }) =>
    `${theme.space[3]}px ${fullwidth(
      theme.space[3],
      theme.space[8],
    )(props)}px`};
  border-radius: ${({ theme }) => theme.radius.button};
  font-weight: ${({ theme }) => theme.fontWeights[5]};
  outline: none;
  cursor: pointer;
  position: relative;

  ${({ theme, variant = 'default' }) => resolveVariant(variant, theme)}
  ${({ theme, size = 'default' }) => resolveSize(size, theme)}
`

const resolveVariant = (variant: ButtonVariant, theme: DefaultTheme) => {
  switch (variant) {
    case 'primary':
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.primary};
        :hover {
          background-color: ${darken(theme.colors.primary, 20, 0.2)};
        }
        :active {
          background-color: ${darken(theme.colors.primary, 40, 0.2)};
        }
      `
    case 'accent':
      return css`
        color: ${theme.colors.white};
        background-color: ${theme.colors.accent};
        box-shadow: 0px 4px 26px -6px ${theme.colors.accent}80;
        :hover {
          background-color: ${darken(theme.colors.accent)};
        }
        :active {
          background-color: ${darken(theme.colors.accent, 20)};
        }
      `

    default:
      return css`
        color: ${theme.colors.white};
        background-color: transparent;
        :hover {
          background-color: ${darken(theme.colors.primary, 20, 0.2)};
        }
        :active {
          background-color: ${darken(theme.colors.primary, 40, 0.2)};
        }
      `
  }
}

const resolveSize = (size: ButtonSize, theme: DefaultTheme) => {
  switch (size) {
    case 'small':
      return css`
        padding: ${({ theme }) => `${theme.space[2]}px ${theme.space[3]}px`};
      `
    case 'large':
      return css`
        font-size: ${({ theme }) => theme.fontSizes[2]}px;
      `

    default:
      return css`
        font-size: ${({ theme }) => theme.fontSizes[1]}px;
      `
  }
}
