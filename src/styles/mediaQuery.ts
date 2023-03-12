import { theme } from './theme'
/**
 * Mediaquery values in min-width format
 *
 */
export const minDevice = {
  /** min-width: 320px */
  mobileTn: `(min-width: ${theme.breakpoints.tn})`,
  /** min-width: 576px */
  mobileXs: `(min-width: ${theme.breakpoints.xs})`,
  /** min-width: 768px */
  mobileSm: `(min-width: ${theme.breakpoints.sm})`,
  /** min-width: 992px */
  tablet: `(min-width: ${theme.breakpoints.md})`,
  /** min-width: 1200px */
  desktopLg: `(min-width: ${theme.breakpoints.lg})`,
  /** min-width: 1400px */
  desktopXl: `(min-width: ${theme.breakpoints.xl})`,
  /** min-width: 2000px */
  desktopHg: `(min-width: ${theme.breakpoints.hg})`
}
