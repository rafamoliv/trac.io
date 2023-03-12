import { colors } from './colors'

export const theme = {
  font: {
    family: 'Roboto, Arial',
    /** 300 */
    light: 300,
    /** 400 */
    regular: 400,
    /** 500 */
    medium: 500,
    /** 600 */
    semiBold: 600,
    /** 700 */
    bold: 700,
    sizes: {
      /** 10px */
      10: '0.625rem',
      /** 12px */
      12: '0.750rem',
      /** 14px */
      14: '0.875rem',
      /** 16px */
      base: '1rem',
      /** 20px */
      20: '1.250rem',
      /** 22px */
      22: '1.375rem',
      /** 24px */
      24: '1.5rem',
      /** 32px */
      32: '2rem',
      /** 40px */
      40: '2.5rem',
      /** 48px */
      48: '3.5rem'
    }
  },
  /** Breakpoints to media query */
  breakpoints: {
    /** 320px */
    tn: '20rem',
    /** 576px */
    xs: '36rem',
    /** 768px */
    sm: '48rem',
    /** 992px */
    md: '62rem',
    /** 1200px */
    lg: '75rem',
    /** 1400px */
    xl: '87.5rem',
    /** 2000px */
    hg: '125rem'
  },
  spacing: {
    /** 1px */
    px: '0.063rem',
    /** 0 */
    0: '0',
    /** 2px */
    0.25: '0.125rem',
    /** 4px */
    0.5: '0.250rem',
    /** 8px */
    1: '0.5rem',
    /** 16px */
    2: '1rem',
    /** 24px */
    3: '1.5rem',
    /** 32px */
    4: '2rem',
    /** 40px */
    5: '2.5rem',
    /** 48px */
    6: '3rem',
    /** 56px */
    7: '3.5rem',
    /** 64px */
    8: '4rem',
    /** 72px */
    9: '4.5rem',
    /** 80px */
    10: '5rem',
    /** 88px */
    11: '5.5rem',
    /** 96px */
    12: '6rem',
    /** 104px */
    13: '6.5rem',
    /** 112px */
    14: '7rem'
  },
  border: {
    /** 1px */
    px: '1px',
    /** 0 */
    0: 0,
    /** 2px */
    0.25: '0.125rem',
    /** 4px */
    0.5: '0.250rem',
    /** 8px */
    1: '0.5rem',
    radius: {
      /** 1px */
      px: '1px',
      /** 0 */
      0: 0,
      /** 4px */
      0.5: '0.250rem',
      /** 8px */
      1: '0.5rem',
      /** 16px */
      2: '1rem',
      /** 24px */
      3: '1.5em',
      circle: '9999px'
    }
  },
  boxShadow: {
    0: 'none',
    /** 0 2px 4px 0 */
    1: `0 0.125rem 0.250rem 0 rgba(58, 70, 79, 0.24)`,
    /** 0 6px 6px 0 */
    2: `0 0.375rem 0.375rem 0 rgba(0, 0, 0, .25)`
  },
  opacity: {
    0: 0,
    1: 0.08,
    2: 0.16,
    4: 0.32,
    8: 0.64,
    10: 0.8,
    100: 1
  },
  colors: {
    /** #111315 */
    black: colors.black,
    /** #ffffff */
    white: colors.white,
    primary: {
      /** #F0F5F9 */
      light: '#F0F5F9',
      /** #C9D6DF */
      medium: '#C9D6DF',
      /** #52616B */
      dark: '#52616B',
      /** #49565e */
      darkest: '#49565E'
    }
  }
}
