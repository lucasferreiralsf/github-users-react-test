import { theme } from '@styles'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Loading } from './index'

describe('Atom Loading tests', () => {
  it('show a loading component with default text: Loading data...', () => {
    render(
      <ThemeProvider theme={theme}>
        <Loading />
      </ThemeProvider>,
    )

    const loading = screen.getByTestId('atom-loading')

    expect(loading).toHaveTextContent('Loading data...')
  })
  it('show a loading component with custom text', () => {
    render(
      <ThemeProvider theme={theme}>
        <Loading title="Custom text" />
      </ThemeProvider>,
    )

    const loading = screen.getByTestId('atom-loading')

    expect(loading).toHaveTextContent('Custom text')
  })
})
