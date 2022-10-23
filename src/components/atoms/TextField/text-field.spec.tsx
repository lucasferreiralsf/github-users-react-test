/* eslint-disable testing-library/no-node-access */
import { theme } from '@styles'
import { render, renderHook, screen } from '@testing-library/react'
import { useForm } from 'react-hook-form'
import { ThemeProvider } from 'styled-components'
import { TextField } from './index'

describe('Atom TextField tests', () => {
  it('show a text field component with name: search', () => {
    const { result } = renderHook(() => useForm())
    render(
      <ThemeProvider theme={theme}>
        <TextField control={result.current.control} name="search" />
      </ThemeProvider>,
    )

    const textfield = screen.getByTestId('atom-textfield')

    expect(textfield.querySelector('input')).toHaveAttribute('name', 'search')
  })
  it('show a text field component with placeholder: search', () => {
    const { result } = renderHook(() => useForm())
    render(
      <ThemeProvider theme={theme}>
        <TextField
          control={result.current.control}
          name="search"
          placeholder="search"
        />
      </ThemeProvider>,
    )

    const textfield = screen.getByTestId('atom-textfield')

    expect(textfield.querySelector('input')).toHaveAttribute(
      'placeholder',
      'search',
    )
  })
})
