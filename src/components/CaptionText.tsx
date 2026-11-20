import React from 'react'

const LINK = /\[([^\]]+)\]\(([^)\s]+)\)/g

// Image captions are written as plain strings (MDX attributes and frontmatter), so this turns
// Markdown-style [text](url) links into anchors. Returns the original string when there are none.
export const renderCaption = (caption?: string): React.ReactNode => {
  if (!caption || !caption.includes('](')) return caption
  const parts: React.ReactNode[] = []
  let last = 0
  for (const match of caption.matchAll(LINK)) {
    const index = match.index ?? 0
    if (index > last) parts.push(caption.slice(last, index))
    parts.push(
      <a key={index} href={match[2]} target='_blank' rel='noopener noreferrer'>
        {match[1]}
      </a>,
    )
    last = index + match[0].length
  }
  if (last < caption.length) parts.push(caption.slice(last))
  return parts
}
