// Client-safe image helpers. Kept separate from content.ts (which reads the
// filesystem) so client components can import these without pulling `fs`
// into the browser bundle.

// Turns any of Gatsby's historical image reference shapes
// ('../../images/foo.jpg', '/content/images/foo.jpg', 'foo.jpg')
// into a root-relative public path served from /content/images.
export const resolveImagePath = (image?: string): string | undefined => {
  if (!image) return undefined
  const filename = image.split('/').pop()
  return filename ? `/content/images/${filename}` : undefined
}

export const isGif = (image?: string): boolean => !!image && image.toLowerCase().endsWith('.gif')
