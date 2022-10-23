import { lighten } from '@helpers'
import styled, { css } from 'styled-components'

type WrapperProps = {
  focused?: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  position: relative;

  ::after {
    position: absolute;
    bottom: 0;
    left: 49%;
    z-index: 1;
    content: '';
    width: 2%;
    height: 2px;
    visibility: hidden;
    background-color: ${({ theme }) => lighten(theme.colors.primary)};
    transition-duration: 0.4s;
    transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  }

  ${(props) =>
    props.focused
      ? css`
          ::after {
            left: 0;
            width: 100%;
            visibility: visible;
          }
        `
      : ''}
`

type InputProps = {
  error?: boolean
}

export const Input = styled.input<InputProps>`
  display: block;
  width: 100%;
  padding: 8px 12px;
  color: ${({ theme }) => lighten(theme.colors.primary)};
  border: none;
  border-bottom: 2px solid ${({ theme }) => theme.colors.primary};
  background-color: transparent;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSizes[2]}px;

  :focus {
    outline: none;
  }

  ::placeholder {
    color: ${({ theme }) => lighten(theme.colors.primary, 10, 0.6)};
    text-align: center;
  }
`
