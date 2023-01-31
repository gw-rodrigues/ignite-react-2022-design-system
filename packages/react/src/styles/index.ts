import {
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  radii,
  space,
} from '@ignite-ui/tokens/dist'
import { createStitches, defaultThemeMap } from '@stitches/react'

/** Import from our created tokens configs */
/** defaultThemeMap = where we can use sizes values (2rem, etc), and we have defined that we can use for width and height the sizes values defined in tokes/spaces */

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  themeMap: { ...defaultThemeMap, height: 'space', width: 'space' },
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space,
  },
})
