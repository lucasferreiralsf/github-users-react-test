import { theme } from '@styles'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { EmptyState } from './index'

describe('Atom Empty State tests', () => {
  it("show a empty state with default text: Oh no. I didn't find anything with your search", () => {
    render(
      <ThemeProvider theme={theme}>
        <EmptyState />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('atom-empty-state')).toHaveTextContent(
      "Oh no. I didn't find anything with your search",
    )
  })
  it('show a empty state with custom text', () => {
    render(
      <ThemeProvider theme={theme}>
        <EmptyState title="Custom text" />
      </ThemeProvider>,
    )

    expect(screen.getByTestId('atom-empty-state')).toHaveTextContent(
      'Custom text',
    )
  })
})
