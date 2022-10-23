import { css } from 'styled-components'
import { theme } from '../theme'

export default css`
  html,
  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.textPrimary};
    font-family: Roboto;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -webkit-tap-highlight-color: transparent;
    -moz-osx-font-smoothing: grayscale;
    position: fixed;
    bottom: 0;
    height: 100%;
    width: 100vw;
    overflow: auto;
  }
  * {
    box-sizing: border-box;
  }
  #root {
    height: 100%;
  }
`
