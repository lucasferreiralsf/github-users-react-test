import styled from 'styled-components'
import {
  Profile as DefaultProfile,
  Button as DefaultButton,
} from '@components/atoms'
import { RepositoryCard as DefaultRepositoryCard } from '@components/molecules'

const defaultPageMargin = '3em'

export const Wrapper = styled.main`
  display: flex;
  height: 100%;
  width: 100%;
  align-items: center;
  flex-direction: column;
  padding-top: 2em;
`

export const Profile = styled(DefaultProfile).attrs({
  size: 'large',
  variant: 'rounded',
  shadow: true,
})``

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  color: ${({ theme }) => theme.colors.white};
  margin-top: ${({ theme }) => theme.space[8]}px;
  margin-bottom: ${({ theme }) => theme.space[8]}px;
`

export const ButtonWrapper = styled.div`
  align-self: flex-end;
  margin-bottom: ${({ theme }) => theme.space[8]}px;
  margin-right: ${defaultPageMargin};

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    position: fixed;
    width: 100%;
    padding: ${({ theme }) => theme.space[8]}px;
    margin: 0;
    align-self: center;
    justify-self: end;
    bottom: 0;
  }
`

export const Button = styled(DefaultButton).attrs({
  variant: 'accent',
  fullwidth: true,
})``

export const RepositoryCard = styled(DefaultRepositoryCard)``

export const RepositoriesWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  overflow: auto;
  width: 100%;

  padding: ${({ theme }) => `0 ${defaultPageMargin}`};
  padding-bottom: ${({ theme }) => theme.space[8]}px;
  gap: ${({ theme }) => theme.space[8]}px;
`
