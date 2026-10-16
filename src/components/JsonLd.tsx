import React from 'react'

/**
 * Renders schema.org structured data as a JSON-LD <script>. `<` is escaped so content
 * (e.g. a post title) can never close the script tag early.
 */
export const JsonLd: React.FunctionComponent<{ data: Record<string, unknown> }> = ({ data }) => (
  <script
    type='application/ld+json'
    dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
  />
)
