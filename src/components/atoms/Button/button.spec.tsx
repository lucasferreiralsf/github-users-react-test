import { theme } from '@styles'
import { render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Button } from './index'

describe('Atom Button tests', () => {
  it('show a button with a text Click me', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button text="Click me" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('atom-button')).toHaveTextContent('Click me')
  })

  it('show a button with a children component', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button text="Click me">
          <div data-testid="children-component"></div>
        </Button>
      </ThemeProvider>,
    )
    const button = screen.getByTestId('atom-button')
    expect(within(button).getByTestId('children-component')).toBeVisible()
  })

  it('show a button with width 100% by pass fullwidth property', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button text="Click me" fullwidth />
      </ThemeProvider>,
    )
    const button = screen.getByTestId('atom-button')
    expect(button).toHaveStyle({ width: '100%' })
  })
})
