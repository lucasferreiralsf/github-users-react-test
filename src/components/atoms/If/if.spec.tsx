import { theme } from '@styles'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { If } from './index'

describe('Atom If tests', () => {
  it('show a child component if the condition is true', () => {
    render(
      <ThemeProvider theme={theme}>
        <If condition={true}>
          <div data-testid="child" />
        </If>
      </ThemeProvider>,
    )

    const ifComp = screen.getByTestId('child')

    expect(ifComp).toBeVisible()
  })
  it('not show a child component if the condition is false', () => {
    render(
      <ThemeProvider theme={theme}>
        <If condition={false}>
          <div data-testid="child" />
        </If>
      </ThemeProvider>,
    )

    const ifComp = screen.queryByTestId('child')

    expect(ifComp).toBe(null)
  })
})
