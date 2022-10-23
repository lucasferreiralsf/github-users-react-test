import { theme } from '@styles'
import { render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { Profile } from './index'

describe('Atom Profile tests', () => {
  it('show a profile with image', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile url="https://picsum.com/200" />
      </ThemeProvider>,
    )

    const profile = screen.getByTestId('atom-profile')

    expect(within(profile).getByRole('img')).toHaveAttribute(
      'src',
      'https://picsum.com/200',
    )
  })
  it('show a profile with a image even if pass the name property', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile url="https://picsum.com/200" name="test" />
      </ThemeProvider>,
    )

    const profile = screen.getByTestId('atom-profile')

    expect(within(profile).getByRole('img')).toHaveAttribute(
      'src',
      'https://picsum.com/200',
    )
  })
  it('show a profile without a image but with a first name initial + last name initial, both uppercase', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile name="John Josep Smith" />
      </ThemeProvider>,
    )

    const profile = screen.getByTestId('atom-profile')

    expect(profile).toHaveTextContent('JS')
  })
  it('show a profile with default size', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile name="John Josep Smith" />
      </ThemeProvider>,
    )

    const profile = screen.getByTestId('atom-profile')

    expect(profile).toHaveStyle({
      width: '50px',
      height: '50px',
    })
  })
  it('show a profile with small size', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile name="John Josep Smith" size="small" />
      </ThemeProvider>,
    )

    const profile = screen.getByTestId('atom-profile')

    expect(profile).toHaveStyle({
      width: '30px',
      height: '30px',
    })
  })
  it('show a profile with large size', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile name="John Josep Smith" size="large" />
      </ThemeProvider>,
    )

    const profile = screen.getByTestId('atom-profile')

    expect(profile).toHaveStyle({
      width: '150px',
      height: '150px',
    })
  })
  it('show a circled profile', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile name="John Josep Smith" />
      </ThemeProvider>,
    )

    const profile = screen.getByTestId('atom-profile')

    expect(profile).toHaveStyle({
      borderRadius: '100%',
    })
  })
  it('show a rounded profile', () => {
    render(
      <ThemeProvider theme={theme}>
        <Profile name="John Josep Smith" variant="rounded" />
      </ThemeProvider>,
    )

    const profile = screen.getByTestId('atom-profile')

    expect(profile).toHaveStyle({
      borderRadius: theme.radius.card,
    })
  })
})
