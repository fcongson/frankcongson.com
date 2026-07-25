'use client'

import Link from 'next/link'
import React from 'react'

// lagom-ui's LinkButton (and similar components) accept a framework-specific
// `Component` prop typed as `{ to: string }` (matching Gatsby's Link). next/link
// uses `href` instead, so this adapts the prop name.
export const NextLinkAdapter: React.FunctionComponent<{
  to: string
  className?: string
  children?: React.ReactNode
}> = ({ to, ...rest }) => <Link href={to} {...rest} />
