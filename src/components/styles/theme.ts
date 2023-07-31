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

export type ThemeType = {
  breakpoints: { [key: string]: string }
  mediaQueries: { [key: string]: string }
  sizes: { [key: string]: string }
}

/**
 * [Styled System Theme Specification](https://styled-system.com/theme-specification)
 */
export const theme: ThemeType = {
  breakpoints,
  mediaQueries,
  sizes,
}
