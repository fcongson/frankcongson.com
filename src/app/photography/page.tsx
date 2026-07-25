import { buildMetadata } from 'lib/seo'
import type { Metadata } from 'next'
import photography from '../../../content/data/photography.json'
import { PhotographyClient } from './photography-client'

export const metadata: Metadata = buildMetadata({
  title: photography.seo?.title,
  description: photography.seo?.description,
  keywords: photography.seo?.keywords,
  image: photography.seo?.image,
  imageAlt: photography.seo?.alt_text,
  pathname: '/photography',
})

export default function Photography() {
  return <PhotographyClient photography={photography} />
}
