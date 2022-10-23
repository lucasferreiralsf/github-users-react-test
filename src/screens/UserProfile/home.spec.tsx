/* eslint-disable testing-library/no-node-access */
import { Routes } from '@navigation'
import { theme } from '@styles'
import { render, screen, waitFor, within } from '@testing-library/react'
import nock from 'nock'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import UserProfile from './index'

const GITHUB_USER_GET_MOCK = {
  login: 'lucasferreiralsf',
  id: 35882258,
  node_id: 'MDQ6VXNlcjM1ODgyMjU4',
  avatar_url: 'https://avatars.githubusercontent.com/u/35882258?v=4',
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
  events_url: 'https://api.github.com/users/lucasferreiralsf/events{/privacy}',
  received_events_url:
    'https://api.github.com/users/lucasferreiralsf/received_events',
  type: 'User',
  site_admin: false,
  name: 'Lucas Ferreira',
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: null,
  twitter_username: null,
  public_repos: 22,
  public_gists: 0,
  followers: 2,
  following: 2,
  created_at: '2018-01-28T01:49:54Z',
  updated_at: '2022-10-04T11:32:52Z',
}

const GITHUB_USER_REPOSITORIES_GET_MOCK = [
  {
    id: 204362912,
    node_id: 'MDEwOlJlcG9zaXRvcnkyMDQzNjI5MTI=',
    name: 'angular-components-library',
    full_name: 'lucasferreiralsf/angular-components-library',
    private: false,
    owner: {
      login: 'lucasferreiralsf',
      id: 35882258,
      node_id: 'MDQ6VXNlcjM1ODgyMjU4',
      avatar_url: 'https://avatars.githubusercontent.com/u/35882258?v=4',
      gravatar_id: '',
      url: 'https://api.github.com/users/lucasferreiralsf',
      html_url: 'https://github.com/lucasferreiralsf',
      followers_url: 'https://api.github.com/users/lucasferreiralsf/followers',
      following_url:
        'https://api.github.com/users/lucasferreiralsf/following{/other_user}',
      gists_url:
        'https://api.github.com/users/lucasferreiralsf/gists{/gist_id}',
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
    html_url: 'https://github.com/lucasferreiralsf/angular-components-library',
    description: null,
    fork: false,
    url: 'https://api.github.com/repos/lucasferreiralsf/angular-components-library',
    forks_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/forks',
    keys_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/keys{/key_id}',
    collaborators_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/collaborators{/collaborator}',
    teams_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/teams',
    hooks_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/hooks',
    issue_events_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/issues/events{/number}',
    events_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/events',
    assignees_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/assignees{/user}',
    branches_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/branches{/branch}',
    tags_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/tags',
    blobs_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/git/blobs{/sha}',
    git_tags_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/git/tags{/sha}',
    git_refs_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/git/refs{/sha}',
    trees_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/git/trees{/sha}',
    statuses_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/statuses/{sha}',
    languages_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/languages',
    stargazers_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/stargazers',
    contributors_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/contributors',
    subscribers_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/subscribers',
    subscription_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/subscription',
    commits_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/commits{/sha}',
    git_commits_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/git/commits{/sha}',
    comments_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/comments{/number}',
    issue_comment_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/issues/comments{/number}',
    contents_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/contents/{+path}',
    compare_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/compare/{base}...{head}',
    merges_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/merges',
    archive_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/{archive_format}{/ref}',
    downloads_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/downloads',
    issues_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/issues{/number}',
    pulls_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/pulls{/number}',
    milestones_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/milestones{/number}',
    notifications_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/notifications{?since,all,participating}',
    labels_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/labels{/name}',
    releases_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/releases{/id}',
    deployments_url:
      'https://api.github.com/repos/lucasferreiralsf/angular-components-library/deployments',
    created_at: '2019-08-25T23:48:24Z',
    updated_at: '2019-08-27T16:36:32Z',
    pushed_at: '2022-09-08T09:34:36Z',
    git_url: 'git://github.com/lucasferreiralsf/angular-components-library.git',
    ssh_url: 'git@github.com:lucasferreiralsf/angular-components-library.git',
    clone_url:
      'https://github.com/lucasferreiralsf/angular-components-library.git',
    svn_url: 'https://github.com/lucasferreiralsf/angular-components-library',
    homepage: null,
    size: 4733,
    stargazers_count: 0,
    watchers_count: 0,
    language: 'TypeScript',
    has_issues: true,
    has_projects: true,
    has_downloads: true,
    has_wiki: true,
    has_pages: false,
    forks_count: 0,
    mirror_url: null,
    archived: false,
    disabled: false,
    open_issues_count: 22,
    license: null,
    allow_forking: true,
    is_template: false,
    web_commit_signoff_required: false,
    topics: [],
    visibility: 'public',
    forks: 0,
    open_issues: 22,
    watchers: 0,
    default_branch: 'dev',
  },
]

describe('Screen UserProfile tests', () => {
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

  it('show the User Profile page with a picture, a back button and repositories', async () => {
    nock('https://api.github.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/users/lucasferreiralsf')
      .reply(200, GITHUB_USER_GET_MOCK)

    nock('https://api.github.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/users/lucasferreiralsf/repos')
      .reply(200, GITHUB_USER_REPOSITORIES_GET_MOCK)

    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter
          initialEntries={[`${Routes.USER_PROFILE}?username=lucasferreiralsf`]}
        >
          <UserProfile />
        </MemoryRouter>
      </ThemeProvider>,
    )

    await waitFor(() => {
      const home = screen.getByTestId('screen-user-profile')

      expect(
        within(within(home).getByTestId('atom-profile')).getByRole('img'),
      ).toHaveAttribute('src', GITHUB_USER_GET_MOCK.avatar_url)
    })

    await waitFor(() => {
      const home = screen.getByTestId('screen-user-profile')

      expect(within(home).getByRole('button')).toHaveTextContent('Go back')
    })

    await waitFor(() => {
      const home = screen.getByTestId('screen-user-profile')

      expect(
        within(home).getByTestId('molecule-repository-card'),
      ).toHaveTextContent(GITHUB_USER_REPOSITORIES_GET_MOCK[0].name)
    })
  })

  it('show the User Profile page with a not found search', async () => {
    nock('https://api.github.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/users/lucasferreiralsf')
      .reply(200, GITHUB_USER_GET_MOCK)

    nock('https://api.github.com')
      .defaultReplyHeaders({
        'access-control-allow-origin': '*',
      })
      .get('/users/lucasferreiralsf/repos')
      .reply(200, GITHUB_USER_REPOSITORIES_GET_MOCK)

    render(
      <ThemeProvider theme={theme}>
        <MemoryRouter initialEntries={[Routes.USER_PROFILE]}>
          <UserProfile />
        </MemoryRouter>
      </ThemeProvider>,
    )

    await waitFor(() => {
      const home = screen.getByTestId('screen-user-profile')

      expect(home).toHaveTextContent(
        "Oh no. I didn't find anything with your search",
      )
    })
  })
})
