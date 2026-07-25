import { ThemeProvider } from '@fcongson/lagom-ui'
import React from 'react'

export const wrapRootElement = ({ element }) => {
  return <ThemeProvider>{element}</ThemeProvider>
}
