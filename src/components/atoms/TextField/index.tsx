import React, { useState } from 'react'
import { Control, Controller, ControllerProps } from 'react-hook-form'
import { Input, Wrapper } from './styles'

interface Props
  extends Omit<ControllerProps, 'render' | 'name' | 'defaultValue'>,
    React.InputHTMLAttributes<HTMLInputElement> {
  control?: Control<any, any>
  ref?: any
  error?: string
}

export const TextField: React.FC<Props> = ({
  control,
  name = '',
  placeholder,
  defaultValue = '',
  rules,
  error,
  style,
  className,
}) => {
  const [focused, setFocused] = useState(false)

  return (
    <Wrapper
      focused={focused}
      style={style}
      className={className}
      data-testid="atom-textfield"
    >
      <React.StrictMode>
        <Controller
          render={({ field }) => (
            <Input
              onFocus={() => setFocused(true)}
              onBlur={() => {
                setFocused(false)
                field.onBlur()
              }}
              error={!!error}
              placeholder={placeholder}
              value={field.value}
              onChange={field.onChange}
              name={field.name}
              ref={field.ref}
            />
          )}
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={rules}
        />
      </React.StrictMode>
    </Wrapper>
  )
}
