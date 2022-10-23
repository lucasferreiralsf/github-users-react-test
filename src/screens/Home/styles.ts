import { ProfileCard as DefaultProfileCard } from '@components/molecules'
import { Button, TextField as DefaultTextField } from '@components/atoms'
import styled from 'styled-components'
import { useMediaQuery } from '@hooks'

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 3em;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    padding: 2em 1em;
  }
`

export const SearchWrapper = styled.form`
  width: 100%;
  display: flex;
  gap: 20px;
  margin-bottom: ${({ theme }) => theme.space[8]}px;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    flex-direction: column;
  }
`

export const SearchButton = styled(Button).attrs((props) => {
  const isMobile = useMediaQuery(`(max-width: ${props.theme.breakpoints[0]})`)
  return {
    variant: 'accent',
    size: isMobile ? 'default' : 'small',
    fullwidth: isMobile,
  }
})``

export const ContentWrapper = styled.div`
  min-width: 35em;
  max-width: 50em;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    width: 100%;
    min-width: unset;
    max-width: unset;
  }
`

export const TextField = styled(DefaultTextField)`
  flex: 1;
`

export const ProfileCard = styled(DefaultProfileCard)`
  margin-bottom: ${({ theme }) => theme.space[4]}px;
`
