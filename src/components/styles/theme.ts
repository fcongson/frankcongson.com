const MAX_WIDTH_CONTAINER = 1120
const sizes: { [key: string]: string } = {
  maxWidthSection: '1800px',
  maxWidthContainer: `${MAX_WIDTH_CONTAINER}px`,
  minWidthEmph: `${MAX_WIDTH_CONTAINER * 1.3}px`,
  maxWidthContent: '800px',
}

// @ts-ignore for styled-system usage
const breakpoints: { [key: string]: string } = ['320px', '568px', '768px', '992px']
breakpoints.mobilePortrait = breakpoints[0]
breakpoints.mobileLandscape = breakpoints[1]
breakpoints.tabletPortrait = breakpoints[2]
breakpoints.tabletLandscape = breakpoints[3]

const mediaQueries: { [key: string]: string } = {
  xsmall: `@media screen and (max-width: ${breakpoints.mobilePortrait})`,
  small: `@media screen and (max-width: ${breakpoints.mobileLandscape})`,
  medium: `@media screen and (max-width: ${breakpoints.tabletPortrait})`,
  large: `@media screen and (max-width: ${breakpoints.tabletLandscape})`,
  emphasized: `@media screen and (min-width: ${sizes.minWidthEmph})`,
}

const colors: { [key: string]: string | string[] } = {
  white: '#ffffff',
  black: '#111111',
  greys: ['#222222', '#545454', '#878787', '#bababa', '#ededed'],
  honeys: ['#dcae1d', '#edcf73', '#f8eecd'],
  olives: ['#626e60', '#94a092', '#cacfc9'],
  navys: ['#394e6f', '#617eae', '#a4b5d0'],
  violets: ['#442c45', '#815483', '#b289b3'],
}
colors.grey = colors.greys[2]
colors.honey = colors.honeys[0]
colors.olive = colors.olives[0]
colors.navy = colors.navys[0]
colors.violet = colors.violets[0]

const fonts: { [key: string]: string } = {
  sansSerif: `'Montserrat', sans-serif`,
  serif: `'Domine', serif`,
  monospace: `'silkamono', monospace`,
}

// @ts-ignore for styled-system usage
const fontSizes: { [key: string]: string } = [12, 14, 16, 20, 24, 36, 54, 81, 121.5]
fontSizes.body = fontSizes[2]

// @ts-ignore for styled-system usage
const fontWeights: { [key: string]: string } = [400, 600, 700]
fontWeights.body = fontWeights[0]
fontWeights.header = fontWeights[2]
fontWeights.link = fontWeights[1]

// @ts-ignore for styled-system usage
const lineHeights: { [key: string]: number } = ['15px', '17px', '20px', '24px', '29px', '44px', '66px', '99px', '148px']
lineHeights.body = 1.7

const space = [0, 4, 8, 16, 32, 64, 128]

export type ThemeType = {
  breakpoints: { [key: string]: string }
  mediaQueries: { [key: string]: string }
  colors: { [key: string]: string | string[] }
  fonts: { [key: string]: string }
  fontSizes: { [key: string]: string }
  fontWeights: { [key: string]: string }
  lineHeights: { [key: string]: number }
  space: number[]
  sizes: { [key: string]: string }
}

/**
 * [Styled System Theme Specification](https://styled-system.com/theme-specification)
 */
export const theme: ThemeType = {
  breakpoints,
  mediaQueries,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  sizes,
}
