import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    breakpoints: string[]
    space: number[]
    fontSizes: number[]
    fontWeights: number[]
    borders: (number | string)[]
    width: number[]
    maxWidths: number[]
    heights: number[]
    radius: {
      button: string
      modal: string
      card: string
    }
    colors: {
      error: string
      primary: string
      accent: string
      tertiary: string
      repproved: string
      background: string
      white: string
      textPrimary: string
    }
  }
}
