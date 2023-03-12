import { ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './global'
import { theme } from './theme'

export const MyThemeProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}