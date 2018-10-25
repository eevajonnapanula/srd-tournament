import siteConfig from '../site-config'

export const siteTheme = {
  global: {
    font: {
      family: siteConfig.font
    },
    colors: {
      brand: siteConfig.brandColor,
    },
    breakpoints: {
      narrow: 899
    }
  },
  heading: {
    font: {
      family: siteConfig.fontHeadings
    }
  }
}
