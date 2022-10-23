/* eslint-disable testing-library/no-node-access */
import { Routes } from '@navigation'
import { theme } from '@styles'
import { render, screen, waitFor, within } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import nock from 'nock'
import Home from './index'

const GITHUB_USER_GET_MOCK = [
  {
    login: 'lucasferreiralsf',
    id: 1,
    node_id: 'MDQ6VXNlcjE=',
    avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/lucasferreiralsf',
    html_url: 'https://github.com/lucasferreiralsf',
    followers_url: 'https://api.github.com/users/lucasferreiralsf/followers',
    following_url:
      'https://api.github.com/users/lucasferreiralsf/following{/other_user}',
    gists_url: 'https://api.github.com/users/lucasferreiralsf/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/lucasferreiralsf/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/lucasferreiralsf/subscriptions',
    organizations_url: 'https://api.github.com/users/lucasferreiralsf/orgs',
    repos_url: 'https://api.github.com/users/lucasferreiralsf/repos',
    events_url:
      'https://api.github.com/users/lucasferreiralsf/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/lucasferreiralsf/received_events',
    type: 'User',
    site_admin: false,
  },
]

describe('Screen Home tests', () => {
  beforeAll(() => {
    Object.defineProperty(window, 'matchMedia', {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: null,
        addListener: jest.fn(), // deprecated
        removeListener: jest.fn(), // deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    })
  })

  it('show the home page with a search input, search button and repositories', async () => {
    nock('https://api.github.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/users')
      .reply(200, GITHUB_USER_GET_MOCK)

    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[Routes.HOME]}>
          <Home />
        </MemoryRouter>
      </ThemeProvider>,
    )

    await waitFor(() => {
      const home = screen.getByTestId('screen-home')

      expect(
        within(home).getByTestId('atom-textfield').querySelector('input'),
      ).toHaveAttribute('name', 'search')
    })

    await waitFor(() => {
      const home = screen.getByTestId('screen-home')

      expect(within(home).getByRole('button')).toHaveTextContent('Search')
    })

    await waitFor(() => {
      const home = screen.getByTestId('screen-home')

      expect(
        within(home).getByTestId('molecule-profile-card'),
      ).toHaveTextContent(GITHUB_USER_GET_MOCK[0].login)
    })
  })
})
