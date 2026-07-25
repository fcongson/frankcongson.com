'use client'

import { useServerInsertedHTML } from 'next/navigation'
import React, { useState } from 'react'
import { ServerStyleSheet, StyleSheetManager } from 'styled-components'

// Official styled-components pattern for the Next.js App Router:
// https://styled-components.com/docs/faqs#nextjs
export function StyledComponentsRegistry({ children }: { children: React.ReactNode }) {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet())

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement()
    styledComponentsStyleSheet.instance.clearTag()
    return <>{styles}</>
  })

  if (typeof window !== 'undefined') return <>{children}</>

  return <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>{children}</StyleSheetManager>
}
