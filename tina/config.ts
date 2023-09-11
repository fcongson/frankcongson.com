import { defineConfig } from 'tinacms'
import { aboutFields } from './templates'
import { blogFields } from './templates'
import { call_to_actionFields } from './templates'
import { featured_sectionFields } from './templates'
import { hero_imageFields } from './templates'
import { homeFields } from './templates'
import { image_captionFields } from './templates'
import { imagesFields } from './templates'
import { pagesFields } from './templates'
import { photographyFields } from './templates'
import { postsFields } from './templates'
import { quoteFields } from './templates'
import { seoFields } from './templates'
import { textFields } from './templates'

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || 'main'

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: 'admin',
    publicFolder: 'static',
  },
  media: {
    tina: {
      mediaRoot: '',
      publicFolder: 'static',
    },
  },
  schema: {
    collections: [
      {
        format: 'json',
        label: 'Home',
        name: 'home',
        path: 'content/data',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'home',
        },
        fields: [
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
        ],
      },
      {
        format: 'json',
        label: 'Photography',
        name: 'photography',
        path: 'content/data',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'photography',
        },
        fields: [
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
        ],
      },
      {
        format: 'json',
        label: 'About',
        name: 'about',
        path: 'content/data',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'about',
        },
        fields: [
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
        ],
      },
      {
        format: 'json',
        label: 'Blog',
        name: 'blog',
        path: 'content/data',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'blog',
        },
        fields: [
          ...seoFields(),
          ...hero_imageFields(),
          {
            type: 'string',
            name: 'page_header',
            label: 'Page Header',
          },
        ],
      },
      {
        format: 'json',
        label: 'Images',
        name: 'images',
        path: 'content/data',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'images',
        },
        fields: [
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
        ],
      },
      {
        format: 'json',
        label: 'Pages',
        name: 'pages',
        path: 'content/pages',
        match: {
          include: '**/*',
        },
        fields: pagesFields(),
      },
      {
        format: 'mdx',
        label: 'Posts',
        name: 'posts',
        path: 'content/posts',
        match: {
          include: '**/*',
        },
        fields: [
          {
            type: 'rich-text',
            name: 'body',
            label: 'Body of Document',
            description: 'This is the markdown body',
            isBody: true,
          },
          ...postsFields(),
        ],
      },
      {
        format: 'json',
        label: 'Site Metadata',
        name: 'site_metadata',
        path: 'content/data',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'siteMetadata',
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info',
          },
        ],
      },
      {
        format: 'json',
        label: 'Section Types',
        name: 'section_types',
        path: 'content/data',
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: 'sectionTypes',
        },
        fields: [
          {
            name: 'dummy',
            label: 'Dummy field',
            type: 'string',
            description:
              'This is a dummy field, please replace it with the fields you want to edit. See https://tina.io/docs/schema/ for more info',
          },
        ],
      },
    ],
  },
})
