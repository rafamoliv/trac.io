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
