/**
 * Convert px to rem unit
 * @param valuePx Value in px
 * @param base Base value for calcularion
 * @returns Value converted to rem
 *
 * @example
 * pxToRem(75)
 */

export const pxToRem = (valuePx: number, base = 16): string => {
  return `${valuePx / base}rem`
}

/**
 * Util to formate date to locale string
 *
 * @param {Date} DateToFormat
 * @returns '14/12/2022, 21:00:00'
 */

export const dateFormat = (DateToFormat: Date) => {
  if (!DateToFormat) return
  const date = new Date(DateToFormat)
  return date.toLocaleString()
}

/**
 * Util to return initial letters from name and lastname
 *
 * @param {string} name
 * @returns 'RO'
 */

export const initialLettersNameLastname = (name: string) => {
  if (!name) return
  return name
    .match(/(\b\S)?/g)
    .join('')
    .toUpperCase()
}
