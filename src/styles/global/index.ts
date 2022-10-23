import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import base from './base'

const GlobalStyle = createGlobalStyle`
   ${reset}
   ${base}
`

export default GlobalStyle
