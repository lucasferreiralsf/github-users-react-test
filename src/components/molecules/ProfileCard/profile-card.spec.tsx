import { theme } from '@styles'
import { render, screen, within } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { ProfileCard } from './index'

describe('Molecule ProfileCard tests', () => {
  it('show a profile card with name', () => {
    const name = 'Lucas Ferreira'

    render(
      <ThemeProvider theme={theme}>
        <ProfileCard name={name} />
      </ThemeProvider>,
    )

    const profileCard = screen.getByTestId('molecule-profile-card')

    expect(profileCard).toHaveTextContent(name)
  })

  it('show a profile card with picture', () => {
    const pictureUrl = 'https://picsum.com/200'

    render(
      <ThemeProvider theme={theme}>
        <ProfileCard pictureUrl={pictureUrl} />
      </ThemeProvider>,
    )

    const profileCard = screen.getByTestId('molecule-profile-card')

    expect(
      within(within(profileCard).getByTestId('atom-profile')).getByRole('img'),
    ).toHaveAttribute('src', pictureUrl)
  })

  it('show a profile card with repositories count', () => {
    render(
      <ThemeProvider theme={theme}>
        <ProfileCard repositoriesCount={5} />
      </ThemeProvider>,
    )

    const profileCard = screen.getByTestId('molecule-profile-card')

    expect(profileCard).toHaveTextContent('Repositories: 5')
  })

  it('show a profile card with a button: see profile', () => {
    const pictureUrl = 'https://picsum.com/200'
    const name = 'Lucas Ferreira'

    render(
      <ThemeProvider theme={theme}>
        <ProfileCard
          name={name}
          pictureUrl={pictureUrl}
          repositoriesCount={5}
        />
      </ThemeProvider>,
    )

    const profileCard = screen.getByTestId('molecule-profile-card')

    expect(within(profileCard).getByRole('button')).toHaveTextContent(
      'See profile',
    )
  })
})
