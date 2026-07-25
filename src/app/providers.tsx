'use client'

import { ThemeProvider } from '@fcongson/lagom-ui'
import React from 'react'

// Mirrors Gatsby's `wrapRootElement` (gatsby-browser.js): establishes a
// ThemeProvider around the whole app so that `useTheme()` works even in
// page components that call it before rendering <Layout> (which nests its
// own ThemeProvider further down). Nesting two ThemeProviders is harmless
// since lagom-ui merges theme objects.
export const RootProviders: React.FunctionComponent<{ children?: React.ReactNode }> = ({ children }) => (
  <ThemeProvider>{children}</ThemeProvider>
)
