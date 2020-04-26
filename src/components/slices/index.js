import React from 'react'
import FeaturedSectionSlice from './FeaturedSectionSlice'
import ImageCaptionSlice from './ImageCaptionSlice'
import QuoteSlice from './QuoteSlice'
import TextSlice from './TextSlice'

export const Slices = ({ slices }) => {
  return (
    slices?.map((slice, index) => {
      const res = (() => {
        switch (slice.type) {
          case 'featured_section':
            return <FeaturedSectionSlice key={index} slice={slice} />

          case 'image_with_caption':
            return <ImageCaptionSlice key={index} slice={slice} />

          case 'quote':
            return <QuoteSlice key={index} slice={slice} />

          case 'text':
            return <TextSlice key={index} slice={slice} />

          default:
            return
        }
      })()
      return res
    }) ?? null
  )
}
