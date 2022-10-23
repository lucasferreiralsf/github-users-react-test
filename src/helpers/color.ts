import tinycolor from 'tinycolor2'

export const darken = (color: string, amount = 10, alpha = 1) =>
  tinycolor(color).darken(amount).setAlpha(alpha).toPercentageRgbString()

export const lighten = (color: string, amount = 10, alpha = 1) =>
  tinycolor(color).lighten(amount).setAlpha(alpha).toPercentageRgbString()
