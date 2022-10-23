import { darken } from '@helpers'
import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: ${({ theme }) => theme.space[4]}px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.radius.card};
  box-shadow: ${({ theme }) =>
    `0px 10px 18px -2px ${darken(theme.colors.primary, 50, 0.4)}`};
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    height: unset;
    flex-direction: column;
    align-items: center;
    padding: ${({ theme }) => `${theme.space[4]}px ${theme.space[1]}px`};
  }
`

export const ContentWrapper = styled.div`
  flex: 1;
  padding: ${({ theme }) => `${theme.space[1]}px ${theme.space[4]}px`};
  display: flex;
  flex-direction: column;

  @media (max-width: ${({ theme }) => theme.breakpoints[0]}) {
    align-items: center;
  }
`

export const Title = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[3]}px;
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`

export const Subtitle = styled.div`
  font-size: ${({ theme }) => theme.fontSizes[2]}px;
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  color: ${({ theme }) => theme.colors.white};
  margin-bottom: ${({ theme }) => theme.space[3]}px;
`
