import React from 'react'
import FeaturedSection from './FeaturedSection'
import ImageCaption from './ImageCaption'
import Quote from './Quote'
import Text from './Text'

export const Slices = ({ slices }) => {
  return (
    slices?.map((slice, index) => {
      const res = (() => {
        switch (slice.type) {
          case 'featured_section':
            return <FeaturedSection key={index} slice={slice} />

          case 'image_with_caption':
            return <ImageCaption key={index} slice={slice} />

          case 'quote':
            return <Quote key={index} slice={slice} />

          case 'text':
            return <Text key={index} slice={slice} />

          default:
            return
        }
      })()
      return res
    }) ?? null
  )
}
