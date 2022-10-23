import styled from 'styled-components'

export const Wrapper = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 3em;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: 3em;
  font-weight: ${({ theme }) => theme.fontWeights[4]};
  text-align: center;
`

export const Subtitle = styled.h3`
  color: ${({ theme }) => theme.colors.white};
  font-size: 2em;
  font-weight: ${({ theme }) => theme.fontWeights[3]};
  margin-top: ${({ theme }) => theme.space[6]}px;
  margin-bottom: ${({ theme }) => theme.space[8] * 2}px;
  text-align: center;
`
