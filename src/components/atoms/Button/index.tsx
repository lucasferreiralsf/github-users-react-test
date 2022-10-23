import React from 'react'
import { If } from '../If'
import { DefaultButton, DefaultButtonProps } from './styles'

interface Props
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    DefaultButtonProps {
  text?: string
  children?: React.ReactNode
}
export const Button: React.FC<Props> = ({
  children,
  text,
  fullwidth = false,
  variant,
  size,
  style,
  className,
  onClick,
}) => {
  return (
    <DefaultButton
      onClick={onClick}
      fullwidth={fullwidth}
      variant={variant}
      size={size}
      style={style}
      className={className}
      data-testid="atom-button"
    >
      <If condition={!!children}>{children}</If>
      <If condition={!!text}>{text}</If>
    </DefaultButton>
  )
}
