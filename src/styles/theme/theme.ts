import { DefaultTheme } from 'styled-components'

type Theme = DefaultTheme

export const theme: Theme = {
  breakpoints: ['40em', '52em', '64em'],
  space: [0, 4, 8, 12, 16, 20, 24, 28, 32],
  fontSizes: [8, 12, 16, 20, 24, 36, 48, 80, 96],
  fontWeights: [100, 200, 300, 400, 500, 600, 700, 800, 900],
  borders: [
    0,
    '1px solid',
    '2px solid',
    '4px solid',
    '8px solid',
    '16px solid',
    '32px solid',
  ],
  width: [16, 32, 64, 128, 256],
  heights: [16, 32, 64, 128, 256],
  maxWidths: [16, 32, 64, 128, 256, 512, 768, 1024, 1536],
  radius: {
    button: '7px',
    modal: '6px',
    card: '10px',
  },
  colors: {
    error: '#FF3F3F',
    primary: '#6366f1',
    accent: '#f97316',
    tertiary: '#F17B28',
    repproved: '#FF3F3F',
    background: '#312e81',
    white: '#ffffff',
    textPrimary: '#5A555B',
  },
}

export default theme
