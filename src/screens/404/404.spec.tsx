import { theme } from '@styles'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import Error404 from './index'

describe('Screen 404 tests', () => {
  it('show a Error 404 page', () => {
    render(
      <ThemeProvider theme={theme}>
        <Error404 />
      </ThemeProvider>,
      { wrapper: BrowserRouter },
    )

    const error404 = screen.getByTestId('screen-404')

    expect(error404).toHaveTextContent(
      "The page that you're requesting doesn't exist.",
    )
  })
})
