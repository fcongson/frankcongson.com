import { JsonLd } from 'components/JsonLd'
import { buildMetadata } from 'lib/seo'
import { homeSchema } from 'lib/structured-data'
import type { Metadata } from 'next'
import home from '../../content/data/home.json'
import { HomeClient } from './home-client'

export const metadata: Metadata = buildMetadata({ pathname: '/' })

export default function Home() {
  return (
    <>
      <JsonLd data={homeSchema()} />
      <HomeClient home={home} />
    </>
  )
}
