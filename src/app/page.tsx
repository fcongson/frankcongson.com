import { buildMetadata } from 'lib/seo'
import type { Metadata } from 'next'
import home from '../../content/data/home.json'
import { HomeClient } from './home-client'

export const metadata: Metadata = buildMetadata({ pathname: '/' })

export default function Home() {
  return <HomeClient home={home} />
}
