// -- The Link Resolver
// This function will be used to generate links to Prismic documents
// As your project grows, you should update this function according to your routes

export const linkResolver = doc => {
  switch (doc.type) {
    case 'post':
      // Route for blog posts
      return `/blog/${doc.uid}`

    case 'page':
    case 'photography':
    case 'about':
    case 'blog':
      return `/${doc.uid}`
    default:
      // Homepage route fallback
      return '/'
  }
}
