import { buildMetadata } from 'lib/seo'
import type { Metadata } from 'next'
import about from '../../../content/data/about.json'
import { AboutClient } from './about-client'

export const metadata: Metadata = buildMetadata({
  title: about.seo?.title,
  description: about.seo?.description,
  keywords: about.seo?.keywords,
  image: about.seo?.image,
  imageAlt: about.seo?.alt_text,
  pathname: '/about',
})

export default function About() {
  return <AboutClient about={about} />
}
