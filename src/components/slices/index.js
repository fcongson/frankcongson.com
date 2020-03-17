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
            return (
              <div key={index}>
                <FeaturedSection slice={slice} />
              </div>
            )

          case 'image_with_caption':
            return (
              <div key={index} className='slice-wrapper'>
                {<ImageCaption slice={slice} />}
              </div>
            )

          case 'quote':
            return (
              <div key={index} className='slice-wrapper'>
                {<Quote slice={slice} />}
              </div>
            )

          case 'text':
            return (
              <div key={index} className='slice-wrapper'>
                {<Text slice={slice} />}
              </div>
            )

          default:
            return
        }
      })()
      return res
    }) ?? null
  )
}
