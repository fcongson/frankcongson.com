import type { TinaField } from 'tinacms'
export function aboutFields() {
  return [
    ...seoFields(),
    ...hero_imageFields(),
    {
      type: 'string',
      name: 'page_header',
      label: 'Page Header',
    },
    {
      type: 'object',
      list: true,
      templateKey: 'template',
      label: 'Sections',
      name: 'sections',
      templates: [
        {
          fields: textFields(),
          label: 'Text',
          name: 'text',
        },
        {
          fields: quoteFields(),
          label: 'Quote',
          name: 'quote',
        },
        {
          fields: image_captionFields(),
          label: 'Image Caption',
          name: 'image_caption',
          nameOverride: 'image-caption',
        },
        {
          fields: featured_sectionFields(),
          label: 'Featured Section',
          name: 'featured_section',
          nameOverride: 'featured-section',
        },
      ],
    },
  ] as TinaField[]
}
export function blogFields() {
  return [
    ...seoFields(),
    ...hero_imageFields(),
    {
      type: 'string',
      name: 'page_header',
      label: 'Page Header',
    },
  ] as TinaField[]
}
export function call_to_actionFields() {
  return [
    {
      type: 'string',
      name: 'header',
      label: 'Header',
    },
    {
      type: 'string',
      name: 'text',
      label: 'Text',
    },
    {
      type: 'object',
      name: 'call_to_action',
      label: 'Call To Action',
      fields: [
        {
          type: 'string',
          name: 'url',
          label: 'URL',
        },
        {
          type: 'string',
          name: 'text',
          label: 'Text',
        },
      ],
    },
  ] as TinaField[]
}
export function featured_sectionFields() {
  return [
    {
      type: 'string',
      name: 'background_color',
      label: 'Background Color',
      ui: {
        component: 'color',
      },
    },
    {
      type: 'boolean',
      name: 'image_as_background',
      label: 'Image As Background',
    },
    {
      type: 'image',
      name: 'image',
      label: 'Image',
    },
    {
      type: 'string',
      name: 'alt_text',
      label: 'Alt Text',
    },
    {
      type: 'object',
      list: true,
      templateKey: 'template',
      label: 'Sections',
      name: 'sections',
      templates: [
        {
          fields: call_to_actionFields(),
          label: 'Call To Action',
          name: 'call_to_action',
          nameOverride: 'call-to-action',
        },
        {
          fields: image_captionFields(),
          label: 'Image Caption',
          name: 'image_caption',
          nameOverride: 'image-caption',
        },
        {
          fields: quoteFields(),
          label: 'Quote',
          name: 'quote',
        },
        {
          fields: textFields(),
          label: 'Text',
          name: 'text',
        },
      ],
    },
  ] as TinaField[]
}
export function hero_imageFields() {
  return [
    {
      type: 'object',
      name: 'hero_image',
      label: 'Hero Image',
      fields: [
        {
          type: 'image',
          name: 'image',
          label: 'Image',
        },
        {
          type: 'string',
          name: 'alt_text',
          label: 'Alt Text',
        },
      ],
    },
  ] as TinaField[]
}
export function homeFields() {
  return [
    ...seoFields(),
    ...hero_imageFields(),
    {
      type: 'string',
      name: 'page_header',
      label: 'Page Header',
    },
    {
      type: 'object',
      name: 'main_content',
      label: 'Main Content',
      fields: [
        {
          type: 'string',
          name: 'header',
          label: 'Header',
        },
        {
          type: 'string',
          name: 'text',
          label: 'Text',
        },
        {
          type: 'image',
          name: 'image',
          label: 'Image',
        },
        {
          type: 'string',
          name: 'alt_text',
          label: 'Alt Text',
        },
      ],
    },
    {
      type: 'object',
      list: true,
      templateKey: 'template',
      label: 'Sections',
      name: 'sections',
      templates: [
        {
          fields: textFields(),
          label: 'Text',
          name: 'text',
        },
        {
          fields: quoteFields(),
          label: 'Quote',
          name: 'quote',
        },
        {
          fields: image_captionFields(),
          label: 'Image Caption',
          name: 'image_caption',
          nameOverride: 'image-caption',
        },
        {
          fields: featured_sectionFields(),
          label: 'Featured Section',
          name: 'featured_section',
          nameOverride: 'featured-section',
        },
      ],
    },
  ] as TinaField[]
}
export function image_captionFields() {
  return [
    {
      type: 'image',
      name: 'image',
      label: 'Image',
    },
    {
      type: 'string',
      name: 'alt_text',
      label: 'Alt Text',
    },
    {
      type: 'string',
      name: 'caption',
      label: 'Caption',
    },
    {
      type: 'boolean',
      name: 'emphasized',
      label: 'Emphasized',
    },
    {
      type: 'boolean',
      name: 'fullwidth',
      label: 'Fullwidth',
    },
  ] as TinaField[]
}
export function imagesFields() {
  return [
    {
      type: 'object',
      name: 'Images',
      label: 'Images',
      list: true,
      fields: [
        {
          type: 'image',
          name: 'image',
          label: 'Image',
        },
        {
          type: 'string',
          name: 'alt_text',
          label: 'Alt Text',
        },
      ],
    },
  ] as TinaField[]
}
export function pagesFields() {
  return [
    {
      type: 'string',
      name: 'slug',
      label: 'Slug',
    },
    ...seoFields(),
    ...hero_imageFields(),
    {
      type: 'string',
      name: 'page_header',
      label: 'Page Header',
    },
    {
      type: 'object',
      list: true,
      templateKey: 'template',
      label: 'Sections',
      name: 'sections',
      templates: [
        {
          fields: textFields(),
          label: 'Text',
          name: 'text',
        },
        {
          fields: quoteFields(),
          label: 'Quote',
          name: 'quote',
        },
        {
          fields: image_captionFields(),
          label: 'Image Caption',
          name: 'image_caption',
          nameOverride: 'image-caption',
        },
        {
          fields: featured_sectionFields(),
          label: 'Featured Section',
          name: 'featured_section',
          nameOverride: 'featured-section',
        },
      ],
    },
  ] as TinaField[]
}
export function photographyFields() {
  return [
    ...seoFields(),
    ...hero_imageFields(),
    {
      type: 'string',
      name: 'page_header',
      label: 'Page Header',
    },
    {
      type: 'object',
      list: true,
      templateKey: 'template',
      label: 'Sections',
      name: 'sections',
      templates: [
        {
          fields: textFields(),
          label: 'Text',
          name: 'text',
        },
        {
          fields: quoteFields(),
          label: 'Quote',
          name: 'quote',
        },
        {
          fields: image_captionFields(),
          label: 'Image Caption',
          name: 'image_caption',
          nameOverride: 'image-caption',
        },
        {
          fields: featured_sectionFields(),
          label: 'Featured Section',
          name: 'featured_section',
          nameOverride: 'featured-section',
        },
      ],
    },
  ] as TinaField[]
}
export function postsFields() {
  return [
    {
      type: 'boolean',
      name: 'published',
      label: 'Published',
    },
    ...seoFields(),
    {
      type: 'string',
      name: 'title',
      label: 'Title',
    },
    {
      type: 'string',
      name: 'description',
      label: 'Description',
    },
    {
      type: 'datetime',
      name: 'date',
      label: 'Date',
    },
    {
      type: 'string',
      name: 'slug',
      label: 'Slug',
    },
    {
      type: 'image',
      name: 'featured_image',
      label: 'Featured Image',
    },
    {
      type: 'string',
      name: 'alt_text',
      label: 'Alt Text',
    },
    {
      type: 'string',
      name: 'keywords',
      label: 'Keywords',
      list: true,
      ui: {
        component: 'tags',
      },
    },
  ] as TinaField[]
}
export function quoteFields() {
  return [
    {
      type: 'string',
      name: 'quote',
      label: 'Quote',
    },
  ] as TinaField[]
}
export function seoFields() {
  return [
    {
      type: 'object',
      name: 'seo',
      label: 'SEO',
      fields: [
        {
          type: 'string',
          name: 'title',
          label: 'Title',
        },
        {
          type: 'string',
          name: 'description',
          label: 'Description',
        },
        {
          type: 'string',
          name: 'keywords',
          label: 'Keywords',
          list: true,
          ui: {
            component: 'tags',
          },
        },
        {
          type: 'image',
          name: 'image',
          label: 'Image',
        },
        {
          type: 'string',
          name: 'alt_text',
          label: 'Alt Text',
        },
      ],
    },
  ] as TinaField[]
}
export function textFields() {
  return [
    {
      type: 'string',
      name: 'text',
      label: 'Text',
      ui: {
        component: 'textarea',
      },
    },
  ] as TinaField[]
}
