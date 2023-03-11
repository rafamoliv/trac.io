export const dateFormat = (DateToFormat: Date) => {
  if (!DateToFormat) return
  const date = new Date(DateToFormat)
  return date.toLocaleString()
}
