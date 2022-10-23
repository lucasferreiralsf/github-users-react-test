import { theme } from '@styles'
import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { RepositoryCard } from './index'

describe('Molecule RepositoryCard tests', () => {
  it('show a repository card with name', () => {
    const name = 'Repo name'

    render(
      <ThemeProvider theme={theme}>
        <RepositoryCard name={name} />
      </ThemeProvider>,
    )

    const repository = screen.getByTestId('molecule-repository-card')

    expect(repository).toHaveTextContent(name)
  })

  it('show a repository card with description', () => {
    const description = 'Repo description'

    render(
      <ThemeProvider theme={theme}>
        <RepositoryCard description={description} />
      </ThemeProvider>,
    )

    const repositoryCard = screen.getByTestId('molecule-repository-card')

    expect(repositoryCard).toHaveTextContent(description)
  })

  it('show a repository card with name and description', () => {
    const name = 'Repo name'
    const description = 'Repo description'

    render(
      <ThemeProvider theme={theme}>
        <RepositoryCard description={description} name={name} />
      </ThemeProvider>,
    )

    const repositoryCard = screen.getByTestId('molecule-repository-card')

    expect(repositoryCard).toHaveTextContent(description)
    expect(repositoryCard).toHaveTextContent(name)
  })
})
