export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any
  GatsbyImageData: any
}

export type File = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  /** Copy file to static directory and return public url to it */
  publicURL?: Maybe<Scalars['String']>
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>
  /** Returns all children nodes filtered by type Mdx */
  childrenMdx?: Maybe<Array<Maybe<Mdx>>>
  /** Returns the first child node of type Mdx or null if there are no children of given type on this node */
  childMdx?: Maybe<Mdx>
  /** Returns all children nodes filtered by type PagesJson */
  childrenPagesJson?: Maybe<Array<Maybe<PagesJson>>>
  /** Returns the first child node of type PagesJson or null if there are no children of given type on this node */
  childPagesJson?: Maybe<PagesJson>
  /** Returns all children nodes filtered by type ImagesJson */
  childrenImagesJson?: Maybe<Array<Maybe<ImagesJson>>>
  /** Returns the first child node of type ImagesJson or null if there are no children of given type on this node */
  childImagesJson?: Maybe<ImagesJson>
  /** Returns all children nodes filtered by type DataJson */
  childrenDataJson?: Maybe<Array<Maybe<DataJson>>>
  /** Returns the first child node of type DataJson or null if there are no children of given type on this node */
  childDataJson?: Maybe<DataJson>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

/** Node Interface */
export type Node = {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type Internal = {
  content?: Maybe<Scalars['String']>
  contentDigest: Scalars['String']
  description?: Maybe<Scalars['String']>
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>
  ignoreType?: Maybe<Scalars['Boolean']>
  mediaType?: Maybe<Scalars['String']>
  owner: Scalars['String']
  type: Scalars['String']
}

export type Directory = Node & {
  sourceInstanceName: Scalars['String']
  absolutePath: Scalars['String']
  relativePath: Scalars['String']
  extension: Scalars['String']
  size: Scalars['Int']
  prettySize: Scalars['String']
  modifiedTime: Scalars['Date']
  accessTime: Scalars['Date']
  changeTime: Scalars['Date']
  birthTime: Scalars['Date']
  root: Scalars['String']
  dir: Scalars['String']
  base: Scalars['String']
  ext: Scalars['String']
  name: Scalars['String']
  relativeDirectory: Scalars['String']
  dev: Scalars['Int']
  mode: Scalars['Int']
  nlink: Scalars['Int']
  uid: Scalars['Int']
  gid: Scalars['Int']
  rdev: Scalars['Int']
  ino: Scalars['Float']
  atimeMs: Scalars['Float']
  mtimeMs: Scalars['Float']
  ctimeMs: Scalars['Float']
  atime: Scalars['Date']
  mtime: Scalars['Date']
  ctime: Scalars['Date']
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  jsxRuntime?: Maybe<Scalars['String']>
  trailingSlash?: Maybe<Scalars['String']>
  graphqlTypegen?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  titleTemplate?: Maybe<Scalars['String']>
  headline?: Maybe<Scalars['String']>
  keywords?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  siteLanguage?: Maybe<Scalars['String']>
  siteLocale?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  twitterUrl?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  facebookUrl?: Maybe<Scalars['String']>
  instagramUrl?: Maybe<Scalars['String']>
  youtubeUrl?: Maybe<Scalars['String']>
  linkedinUrl?: Maybe<Scalars['String']>
  githubUrl?: Maybe<Scalars['String']>
}

export type SiteFunction = Node & {
  functionRoute: Scalars['String']
  pluginName: Scalars['String']
  originalAbsoluteFilePath: Scalars['String']
  originalRelativeFilePath: Scalars['String']
  relativeCompiledFilePath: Scalars['String']
  absoluteCompiledFilePath: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SitePage = Node & {
  path: Scalars['String']
  component: Scalars['String']
  internalComponentName: Scalars['String']
  componentChunkName: Scalars['String']
  matchPath?: Maybe<Scalars['String']>
  pageContext?: Maybe<Scalars['JSON']>
  pluginCreator?: Maybe<SitePlugin>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<Scalars['JSON']>
  packageJson?: Maybe<Scalars['JSON']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type GatsbyImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF'

export type GatsbyImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type GatsbyImagePlaceholder = 'DOMINANT_COLOR' | 'TRACED_SVG' | 'BLURRED' | 'NONE'

export type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF'

export type ImageFit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE'

export type ImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED'

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION'

export type DuotoneGradient = {
  highlight: Scalars['String']
  shadow: Scalars['String']
  opacity?: InputMaybe<Scalars['Int']>
}

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY'

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>
  turdSize?: InputMaybe<Scalars['Float']>
  alphaMax?: InputMaybe<Scalars['Float']>
  optCurve?: InputMaybe<Scalars['Boolean']>
  optTolerance?: InputMaybe<Scalars['Float']>
  threshold?: InputMaybe<Scalars['Int']>
  blackOnWhite?: InputMaybe<Scalars['Boolean']>
  color?: InputMaybe<Scalars['String']>
  background?: InputMaybe<Scalars['String']>
}

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars['GatsbyImageData']
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  base64Width?: InputMaybe<Scalars['Int']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  grayscale?: InputMaybe<Scalars['Boolean']>
  duotone?: InputMaybe<DuotoneGradient>
  traceSVG?: InputMaybe<Potrace>
  quality?: InputMaybe<Scalars['Int']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  webpQuality?: InputMaybe<Scalars['Int']>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars['String']>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>
  maxHeight?: InputMaybe<Scalars['Int']>
  base64Width?: InputMaybe<Scalars['Int']>
  grayscale?: InputMaybe<Scalars['Boolean']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  duotone?: InputMaybe<DuotoneGradient>
  traceSVG?: InputMaybe<Potrace>
  quality?: InputMaybe<Scalars['Int']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  webpQuality?: InputMaybe<Scalars['Int']>
  toFormat?: InputMaybe<ImageFormat>
  toFormatBase64?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars['String']>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
  sizes?: InputMaybe<Scalars['String']>
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  aspectRatio?: InputMaybe<Scalars['Float']>
  placeholder?: InputMaybe<ImagePlaceholder>
  blurredOptions?: InputMaybe<BlurredOptions>
  tracedSVGOptions?: InputMaybe<Potrace>
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  sizes?: InputMaybe<Scalars['String']>
  quality?: InputMaybe<Scalars['Int']>
  jpgOptions?: InputMaybe<JpgOptions>
  pngOptions?: InputMaybe<PngOptions>
  webpOptions?: InputMaybe<WebPOptions>
  avifOptions?: InputMaybe<AvifOptions>
  transformOptions?: InputMaybe<TransformOptions>
  backgroundColor?: InputMaybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>
  height?: InputMaybe<Scalars['Int']>
  quality?: InputMaybe<Scalars['Int']>
  jpegQuality?: InputMaybe<Scalars['Int']>
  pngQuality?: InputMaybe<Scalars['Int']>
  webpQuality?: InputMaybe<Scalars['Int']>
  jpegProgressive?: InputMaybe<Scalars['Boolean']>
  pngCompressionLevel?: InputMaybe<Scalars['Int']>
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>
  grayscale?: InputMaybe<Scalars['Boolean']>
  duotone?: InputMaybe<DuotoneGradient>
  base64?: InputMaybe<Scalars['Boolean']>
  traceSVG?: InputMaybe<Potrace>
  toFormat?: InputMaybe<ImageFormat>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
  background?: InputMaybe<Scalars['String']>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
}

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio?: Maybe<Scalars['Float']>
  width: Scalars['Float']
  height: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
}

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  aspectRatio: Scalars['Float']
  src: Scalars['String']
  srcSet: Scalars['String']
  srcWebp?: Maybe<Scalars['String']>
  srcSetWebp?: Maybe<Scalars['String']>
  sizes: Scalars['String']
  originalImg?: Maybe<Scalars['String']>
  originalName?: Maybe<Scalars['String']>
  presentationWidth: Scalars['Int']
  presentationHeight: Scalars['Int']
}

export type ImagePlaceholder = 'DOMINANT_COLOR' | 'TRACED_SVG' | 'BLURRED' | 'NONE'

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>
}

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>
  progressive?: InputMaybe<Scalars['Boolean']>
}

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>
  compressionSpeed?: InputMaybe<Scalars['Int']>
}

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>
}

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>
  lossless?: InputMaybe<Scalars['Boolean']>
  speed?: InputMaybe<Scalars['Int']>
}

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>
  duotone?: InputMaybe<DuotoneGradient>
  rotate?: InputMaybe<Scalars['Int']>
  trim?: InputMaybe<Scalars['Float']>
  cropFocus?: InputMaybe<ImageCropFocus>
  fit?: InputMaybe<ImageFit>
}

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>
  height?: Maybe<Scalars['Float']>
  src?: Maybe<Scalars['String']>
}

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>
  tracedSVG?: Maybe<Scalars['String']>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  originalName?: Maybe<Scalars['String']>
}

export type MdxFrontmatter = Node & {
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  date: Scalars['Date']
  slug: Scalars['String']
  featured_image?: Maybe<File>
  alt_text?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  seo?: Maybe<Seo>
  published?: Maybe<Scalars['Boolean']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MdxFrontmatterDateArgs = {
  formatString?: InputMaybe<Scalars['String']>
  fromNow?: InputMaybe<Scalars['Boolean']>
  difference?: InputMaybe<Scalars['String']>
  locale?: InputMaybe<Scalars['String']>
}

export type MdxHeadingMdx = {
  value?: Maybe<Scalars['String']>
  depth?: Maybe<Scalars['Int']>
}

export type HeadingsMdx = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type MdxWordCount = {
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type Mdx = Node & {
  rawBody: Scalars['String']
  fileAbsolutePath: Scalars['String']
  frontmatter?: Maybe<MdxFrontmatter>
  slug?: Maybe<Scalars['String']>
  body: Scalars['String']
  excerpt: Scalars['String']
  headings?: Maybe<Array<Maybe<MdxHeadingMdx>>>
  html?: Maybe<Scalars['String']>
  mdxAST?: Maybe<Scalars['JSON']>
  tableOfContents?: Maybe<Scalars['JSON']>
  timeToRead?: Maybe<Scalars['Int']>
  wordCount?: Maybe<MdxWordCount>
  fields?: Maybe<Fields>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>
  truncate?: InputMaybe<Scalars['Boolean']>
}

export type MdxHeadingsArgs = {
  depth?: InputMaybe<HeadingsMdx>
}

export type MdxTableOfContentsArgs = {
  maxDepth?: InputMaybe<Scalars['Int']>
}

export type MarkdownHeading = {
  id?: Maybe<Scalars['String']>
  value?: Maybe<Scalars['String']>
  depth?: Maybe<Scalars['Int']>
}

export type MarkdownHeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type MarkdownExcerptFormats = 'PLAIN' | 'HTML' | 'MARKDOWN'

export type MarkdownWordCount = {
  paragraphs?: Maybe<Scalars['Int']>
  sentences?: Maybe<Scalars['Int']>
  words?: Maybe<Scalars['Int']>
}

export type MarkdownRemark = Node & {
  id: Scalars['ID']
  html?: Maybe<Scalars['String']>
  htmlAst?: Maybe<Scalars['JSON']>
  excerpt?: Maybe<Scalars['String']>
  excerptAst?: Maybe<Scalars['JSON']>
  headings?: Maybe<Array<Maybe<MarkdownHeading>>>
  timeToRead?: Maybe<Scalars['Int']>
  tableOfContents?: Maybe<Scalars['String']>
  wordCount?: Maybe<MarkdownWordCount>
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MarkdownRemarkExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>
  truncate?: InputMaybe<Scalars['Boolean']>
  format?: InputMaybe<MarkdownExcerptFormats>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>
  truncate?: InputMaybe<Scalars['Boolean']>
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: InputMaybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: InputMaybe<Scalars['Boolean']>
  pathToSlugField?: InputMaybe<Scalars['String']>
  maxDepth?: InputMaybe<Scalars['Int']>
  heading?: InputMaybe<Scalars['String']>
}

export type Fields = {
  slug?: Maybe<Scalars['String']>
}

export type Seo = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  image?: Maybe<File>
  alt_text?: Maybe<Scalars['String']>
}

export type PagesJson = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  hero_image?: Maybe<PagesJsonHero_Image>
  page_header?: Maybe<Scalars['String']>
  sections?: Maybe<Array<Maybe<PagesJsonSections>>>
  seo?: Maybe<PagesJsonSeo>
  slug?: Maybe<Scalars['String']>
}

export type PagesJsonHero_Image = {
  image?: Maybe<Scalars['String']>
  alt_text?: Maybe<Scalars['String']>
}

export type PagesJsonSections = {
  template?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type PagesJsonSeo = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  image?: Maybe<Scalars['String']>
  alt_text?: Maybe<Scalars['String']>
}

export type ImagesJson = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  image?: Maybe<Scalars['String']>
  alt_text?: Maybe<Scalars['String']>
}

export type DataJson = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  hero_image?: Maybe<DataJsonHero_Image>
  main_content?: Maybe<DataJsonMain_Content>
  sections?: Maybe<Array<Maybe<DataJsonSections>>>
  page_header?: Maybe<Scalars['String']>
  seo?: Maybe<DataJsonSeo>
  title?: Maybe<Scalars['String']>
  titleTemplate?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  headline?: Maybe<Scalars['String']>
  keywords?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  siteUrl?: Maybe<Scalars['String']>
  siteLanguage?: Maybe<Scalars['String']>
  siteLocale?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  twitter?: Maybe<Scalars['String']>
  twitterUrl?: Maybe<Scalars['String']>
  facebook?: Maybe<Scalars['String']>
  facebookUrl?: Maybe<Scalars['String']>
  instagramUrl?: Maybe<Scalars['String']>
  youtubeUrl?: Maybe<Scalars['String']>
  linkedinUrl?: Maybe<Scalars['String']>
  githubUrl?: Maybe<Scalars['String']>
}

export type DataJsonHero_Image = {
  image?: Maybe<Scalars['String']>
  alt_text?: Maybe<Scalars['String']>
}

export type DataJsonMain_Content = {
  header?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  alt_text?: Maybe<Scalars['String']>
}

export type DataJsonSections = {
  template?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  image?: Maybe<Scalars['String']>
  alt_text?: Maybe<Scalars['String']>
  image_as_background?: Maybe<Scalars['Boolean']>
  sections?: Maybe<Array<Maybe<DataJsonSectionsSections>>>
  text?: Maybe<Scalars['String']>
  fullwidth?: Maybe<Scalars['Boolean']>
  caption?: Maybe<Scalars['String']>
  emphasized?: Maybe<Scalars['Boolean']>
}

export type DataJsonSectionsSections = {
  template?: Maybe<Scalars['String']>
  header?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
  call_to_action?: Maybe<DataJsonSectionsSectionsCall_To_Action>
}

export type DataJsonSectionsSectionsCall_To_Action = {
  url?: Maybe<Scalars['String']>
  text?: Maybe<Scalars['String']>
}

export type DataJsonSeo = {
  title?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  image?: Maybe<Scalars['String']>
  alt_text?: Maybe<Scalars['String']>
  pathname?: Maybe<Scalars['String']>
  article?: Maybe<Scalars['Boolean']>
}

export type Query = {
  file?: Maybe<File>
  allFile: FileConnection
  directory?: Maybe<Directory>
  allDirectory: DirectoryConnection
  site?: Maybe<Site>
  allSite: SiteConnection
  siteFunction?: Maybe<SiteFunction>
  allSiteFunction: SiteFunctionConnection
  sitePage?: Maybe<SitePage>
  allSitePage: SitePageConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  mdxFrontmatter?: Maybe<MdxFrontmatter>
  allMdxFrontmatter: MdxFrontmatterConnection
  mdx?: Maybe<Mdx>
  allMdx: MdxConnection
  markdownRemark?: Maybe<MarkdownRemark>
  allMarkdownRemark: MarkdownRemarkConnection
  pagesJson?: Maybe<PagesJson>
  allPagesJson: PagesJsonConnection
  imagesJson?: Maybe<ImagesJson>
  allImagesJson: ImagesJsonConnection
  dataJson?: Maybe<DataJson>
  allDataJson: DataJsonConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  blksize?: InputMaybe<IntQueryOperatorInput>
  blocks?: InputMaybe<IntQueryOperatorInput>
  publicURL?: InputMaybe<StringQueryOperatorInput>
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>
  childImageSharp?: InputMaybe<ImageSharpFilterInput>
  childrenMdx?: InputMaybe<MdxFilterListInput>
  childMdx?: InputMaybe<MdxFilterInput>
  childrenPagesJson?: InputMaybe<PagesJsonFilterListInput>
  childPagesJson?: InputMaybe<PagesJsonFilterInput>
  childrenImagesJson?: InputMaybe<ImagesJsonFilterListInput>
  childImagesJson?: InputMaybe<ImagesJsonFilterInput>
  childrenDataJson?: InputMaybe<DataJsonFilterListInput>
  childDataJson?: InputMaybe<DataJsonFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>
  sort?: InputMaybe<FileSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>
  sort?: InputMaybe<DirectorySortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>
  polyfill?: InputMaybe<BooleanQueryOperatorInput>
  pathPrefix?: InputMaybe<StringQueryOperatorInput>
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>
  trailingSlash?: InputMaybe<StringQueryOperatorInput>
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>
  sort?: InputMaybe<SiteSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>
  pluginName?: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>
  sort?: InputMaybe<SiteFunctionSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>
  component?: InputMaybe<StringQueryOperatorInput>
  internalComponentName?: InputMaybe<StringQueryOperatorInput>
  componentChunkName?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  pageContext?: InputMaybe<JsonQueryOperatorInput>
  pluginCreator?: InputMaybe<SitePluginFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>
  sort?: InputMaybe<SitePageSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  version?: InputMaybe<StringQueryOperatorInput>
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>
  browserAPIs?: InputMaybe<StringQueryOperatorInput>
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>
  packageJson?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>
  sort?: InputMaybe<SitePluginSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>
  sort?: InputMaybe<SiteBuildMetadataSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>
  fluid?: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>
  original?: InputMaybe<ImageSharpOriginalFilterInput>
  resize?: InputMaybe<ImageSharpResizeFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>
  sort?: InputMaybe<ImageSharpSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryMdxFrontmatterArgs = {
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  date?: InputMaybe<DateQueryOperatorInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  featured_image?: InputMaybe<FileFilterInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  seo?: InputMaybe<SeoFilterInput>
  published?: InputMaybe<BooleanQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllMdxFrontmatterArgs = {
  filter?: InputMaybe<MdxFrontmatterFilterInput>
  sort?: InputMaybe<MdxFrontmatterSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryMdxArgs = {
  rawBody?: InputMaybe<StringQueryOperatorInput>
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  body?: InputMaybe<StringQueryOperatorInput>
  excerpt?: InputMaybe<StringQueryOperatorInput>
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>
  html?: InputMaybe<StringQueryOperatorInput>
  mdxAST?: InputMaybe<JsonQueryOperatorInput>
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>
  timeToRead?: InputMaybe<IntQueryOperatorInput>
  wordCount?: InputMaybe<MdxWordCountFilterInput>
  fields?: InputMaybe<FieldsFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>
  sort?: InputMaybe<MdxSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryMarkdownRemarkArgs = {
  id?: InputMaybe<StringQueryOperatorInput>
  html?: InputMaybe<StringQueryOperatorInput>
  htmlAst?: InputMaybe<JsonQueryOperatorInput>
  excerpt?: InputMaybe<StringQueryOperatorInput>
  excerptAst?: InputMaybe<JsonQueryOperatorInput>
  headings?: InputMaybe<MarkdownHeadingFilterListInput>
  timeToRead?: InputMaybe<IntQueryOperatorInput>
  tableOfContents?: InputMaybe<StringQueryOperatorInput>
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: InputMaybe<MarkdownRemarkFilterInput>
  sort?: InputMaybe<MarkdownRemarkSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryPagesJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
  hero_image?: InputMaybe<PagesJsonHero_ImageFilterInput>
  page_header?: InputMaybe<StringQueryOperatorInput>
  sections?: InputMaybe<PagesJsonSectionsFilterListInput>
  seo?: InputMaybe<PagesJsonSeoFilterInput>
  slug?: InputMaybe<StringQueryOperatorInput>
}

export type QueryAllPagesJsonArgs = {
  filter?: InputMaybe<PagesJsonFilterInput>
  sort?: InputMaybe<PagesJsonSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryImagesJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
  image?: InputMaybe<StringQueryOperatorInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
}

export type QueryAllImagesJsonArgs = {
  filter?: InputMaybe<ImagesJsonFilterInput>
  sort?: InputMaybe<ImagesJsonSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryDataJsonArgs = {
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
  hero_image?: InputMaybe<DataJsonHero_ImageFilterInput>
  main_content?: InputMaybe<DataJsonMain_ContentFilterInput>
  sections?: InputMaybe<DataJsonSectionsFilterListInput>
  page_header?: InputMaybe<StringQueryOperatorInput>
  seo?: InputMaybe<DataJsonSeoFilterInput>
  title?: InputMaybe<StringQueryOperatorInput>
  titleTemplate?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  headline?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  author?: InputMaybe<StringQueryOperatorInput>
  siteUrl?: InputMaybe<StringQueryOperatorInput>
  siteLanguage?: InputMaybe<StringQueryOperatorInput>
  siteLocale?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<StringQueryOperatorInput>
  twitter?: InputMaybe<StringQueryOperatorInput>
  twitterUrl?: InputMaybe<StringQueryOperatorInput>
  facebook?: InputMaybe<StringQueryOperatorInput>
  facebookUrl?: InputMaybe<StringQueryOperatorInput>
  instagramUrl?: InputMaybe<StringQueryOperatorInput>
  youtubeUrl?: InputMaybe<StringQueryOperatorInput>
  linkedinUrl?: InputMaybe<StringQueryOperatorInput>
  githubUrl?: InputMaybe<StringQueryOperatorInput>
}

export type QueryAllDataJsonArgs = {
  filter?: InputMaybe<DataJsonFilterInput>
  sort?: InputMaybe<DataJsonSortInput>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>
  ne?: InputMaybe<Scalars['String']>
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>
  regex?: InputMaybe<Scalars['String']>
  glob?: InputMaybe<Scalars['String']>
}

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>
  ne?: InputMaybe<Scalars['Int']>
  gt?: InputMaybe<Scalars['Int']>
  gte?: InputMaybe<Scalars['Int']>
  lt?: InputMaybe<Scalars['Int']>
  lte?: InputMaybe<Scalars['Int']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>
}

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>
  ne?: InputMaybe<Scalars['Date']>
  gt?: InputMaybe<Scalars['Date']>
  gte?: InputMaybe<Scalars['Date']>
  lt?: InputMaybe<Scalars['Date']>
  lte?: InputMaybe<Scalars['Date']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>
}

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>
  ne?: InputMaybe<Scalars['Float']>
  gt?: InputMaybe<Scalars['Float']>
  gte?: InputMaybe<Scalars['Float']>
  lt?: InputMaybe<Scalars['Float']>
  lte?: InputMaybe<Scalars['Float']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>
}

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>
}

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>
  fluid?: InputMaybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>
  original?: InputMaybe<ImageSharpOriginalFilterInput>
  resize?: InputMaybe<ImageSharpResizeFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  width?: InputMaybe<FloatQueryOperatorInput>
  height?: InputMaybe<FloatQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
  srcSet?: InputMaybe<StringQueryOperatorInput>
  srcWebp?: InputMaybe<StringQueryOperatorInput>
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
  srcSet?: InputMaybe<StringQueryOperatorInput>
  srcWebp?: InputMaybe<StringQueryOperatorInput>
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>
  sizes?: InputMaybe<StringQueryOperatorInput>
  originalImg?: InputMaybe<StringQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
  presentationWidth?: InputMaybe<IntQueryOperatorInput>
  presentationHeight?: InputMaybe<IntQueryOperatorInput>
}

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>
  ne?: InputMaybe<Scalars['GatsbyImageData']>
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>
}

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>
  height?: InputMaybe<FloatQueryOperatorInput>
  src?: InputMaybe<StringQueryOperatorInput>
}

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>
  tracedSVG?: InputMaybe<StringQueryOperatorInput>
  width?: InputMaybe<IntQueryOperatorInput>
  height?: InputMaybe<IntQueryOperatorInput>
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>
  originalName?: InputMaybe<StringQueryOperatorInput>
}

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>
}

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>
  contentDigest?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  fieldOwners?: InputMaybe<StringQueryOperatorInput>
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>
  mediaType?: InputMaybe<StringQueryOperatorInput>
  owner?: InputMaybe<StringQueryOperatorInput>
  type?: InputMaybe<StringQueryOperatorInput>
}

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>
  ne?: InputMaybe<Scalars['Boolean']>
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>
}

export type MdxFilterListInput = {
  elemMatch?: InputMaybe<MdxFilterInput>
}

export type MdxFilterInput = {
  rawBody?: InputMaybe<StringQueryOperatorInput>
  fileAbsolutePath?: InputMaybe<StringQueryOperatorInput>
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  body?: InputMaybe<StringQueryOperatorInput>
  excerpt?: InputMaybe<StringQueryOperatorInput>
  headings?: InputMaybe<MdxHeadingMdxFilterListInput>
  html?: InputMaybe<StringQueryOperatorInput>
  mdxAST?: InputMaybe<JsonQueryOperatorInput>
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>
  timeToRead?: InputMaybe<IntQueryOperatorInput>
  wordCount?: InputMaybe<MdxWordCountFilterInput>
  fields?: InputMaybe<FieldsFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type MdxFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  date?: InputMaybe<DateQueryOperatorInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  featured_image?: InputMaybe<FileFilterInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  seo?: InputMaybe<SeoFilterInput>
  published?: InputMaybe<BooleanQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  blksize?: InputMaybe<IntQueryOperatorInput>
  blocks?: InputMaybe<IntQueryOperatorInput>
  publicURL?: InputMaybe<StringQueryOperatorInput>
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>
  childImageSharp?: InputMaybe<ImageSharpFilterInput>
  childrenMdx?: InputMaybe<MdxFilterListInput>
  childMdx?: InputMaybe<MdxFilterInput>
  childrenPagesJson?: InputMaybe<PagesJsonFilterListInput>
  childPagesJson?: InputMaybe<PagesJsonFilterInput>
  childrenImagesJson?: InputMaybe<ImagesJsonFilterListInput>
  childImagesJson?: InputMaybe<ImagesJsonFilterInput>
  childrenDataJson?: InputMaybe<DataJsonFilterListInput>
  childDataJson?: InputMaybe<DataJsonFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type PagesJsonFilterListInput = {
  elemMatch?: InputMaybe<PagesJsonFilterInput>
}

export type PagesJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
  hero_image?: InputMaybe<PagesJsonHero_ImageFilterInput>
  page_header?: InputMaybe<StringQueryOperatorInput>
  sections?: InputMaybe<PagesJsonSectionsFilterListInput>
  seo?: InputMaybe<PagesJsonSeoFilterInput>
  slug?: InputMaybe<StringQueryOperatorInput>
}

export type PagesJsonHero_ImageFilterInput = {
  image?: InputMaybe<StringQueryOperatorInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
}

export type PagesJsonSectionsFilterListInput = {
  elemMatch?: InputMaybe<PagesJsonSectionsFilterInput>
}

export type PagesJsonSectionsFilterInput = {
  template?: InputMaybe<StringQueryOperatorInput>
  text?: InputMaybe<StringQueryOperatorInput>
}

export type PagesJsonSeoFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<StringQueryOperatorInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
}

export type ImagesJsonFilterListInput = {
  elemMatch?: InputMaybe<ImagesJsonFilterInput>
}

export type ImagesJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
  image?: InputMaybe<StringQueryOperatorInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
}

export type DataJsonFilterListInput = {
  elemMatch?: InputMaybe<DataJsonFilterInput>
}

export type DataJsonFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
  hero_image?: InputMaybe<DataJsonHero_ImageFilterInput>
  main_content?: InputMaybe<DataJsonMain_ContentFilterInput>
  sections?: InputMaybe<DataJsonSectionsFilterListInput>
  page_header?: InputMaybe<StringQueryOperatorInput>
  seo?: InputMaybe<DataJsonSeoFilterInput>
  title?: InputMaybe<StringQueryOperatorInput>
  titleTemplate?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  headline?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  author?: InputMaybe<StringQueryOperatorInput>
  siteUrl?: InputMaybe<StringQueryOperatorInput>
  siteLanguage?: InputMaybe<StringQueryOperatorInput>
  siteLocale?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<StringQueryOperatorInput>
  twitter?: InputMaybe<StringQueryOperatorInput>
  twitterUrl?: InputMaybe<StringQueryOperatorInput>
  facebook?: InputMaybe<StringQueryOperatorInput>
  facebookUrl?: InputMaybe<StringQueryOperatorInput>
  instagramUrl?: InputMaybe<StringQueryOperatorInput>
  youtubeUrl?: InputMaybe<StringQueryOperatorInput>
  linkedinUrl?: InputMaybe<StringQueryOperatorInput>
  githubUrl?: InputMaybe<StringQueryOperatorInput>
}

export type DataJsonHero_ImageFilterInput = {
  image?: InputMaybe<StringQueryOperatorInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
}

export type DataJsonMain_ContentFilterInput = {
  header?: InputMaybe<StringQueryOperatorInput>
  text?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<StringQueryOperatorInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
}

export type DataJsonSectionsFilterListInput = {
  elemMatch?: InputMaybe<DataJsonSectionsFilterInput>
}

export type DataJsonSectionsFilterInput = {
  template?: InputMaybe<StringQueryOperatorInput>
  background_color?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<StringQueryOperatorInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
  image_as_background?: InputMaybe<BooleanQueryOperatorInput>
  sections?: InputMaybe<DataJsonSectionsSectionsFilterListInput>
  text?: InputMaybe<StringQueryOperatorInput>
  fullwidth?: InputMaybe<BooleanQueryOperatorInput>
  caption?: InputMaybe<StringQueryOperatorInput>
  emphasized?: InputMaybe<BooleanQueryOperatorInput>
}

export type DataJsonSectionsSectionsFilterListInput = {
  elemMatch?: InputMaybe<DataJsonSectionsSectionsFilterInput>
}

export type DataJsonSectionsSectionsFilterInput = {
  template?: InputMaybe<StringQueryOperatorInput>
  header?: InputMaybe<StringQueryOperatorInput>
  text?: InputMaybe<StringQueryOperatorInput>
  call_to_action?: InputMaybe<DataJsonSectionsSectionsCall_To_ActionFilterInput>
}

export type DataJsonSectionsSectionsCall_To_ActionFilterInput = {
  url?: InputMaybe<StringQueryOperatorInput>
  text?: InputMaybe<StringQueryOperatorInput>
}

export type DataJsonSeoFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<StringQueryOperatorInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
  pathname?: InputMaybe<StringQueryOperatorInput>
  article?: InputMaybe<BooleanQueryOperatorInput>
}

export type SeoFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<FileFilterInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
}

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: InputMaybe<MdxHeadingMdxFilterInput>
}

export type MdxHeadingMdxFilterInput = {
  value?: InputMaybe<StringQueryOperatorInput>
  depth?: InputMaybe<IntQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  regex?: InputMaybe<Scalars['JSON']>
  glob?: InputMaybe<Scalars['JSON']>
}

export type MdxWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>
  sentences?: InputMaybe<IntQueryOperatorInput>
  words?: InputMaybe<IntQueryOperatorInput>
}

export type FieldsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>
}

export type FileConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<FileGroupConnection>
}

export type FileConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileEdge = {
  next?: Maybe<File>
  node: File
  previous?: Maybe<File>
}

export type PageInfo = {
  currentPage: Scalars['Int']
  hasPreviousPage: Scalars['Boolean']
  hasNextPage: Scalars['Boolean']
  itemCount: Scalars['Int']
  pageCount: Scalars['Int']
  perPage?: Maybe<Scalars['Int']>
  totalCount: Scalars['Int']
}

export type FileFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'blksize'
  | 'blocks'
  | 'publicURL'
  | 'childrenImageSharp'
  | 'childrenImageSharp___fixed___base64'
  | 'childrenImageSharp___fixed___tracedSVG'
  | 'childrenImageSharp___fixed___aspectRatio'
  | 'childrenImageSharp___fixed___width'
  | 'childrenImageSharp___fixed___height'
  | 'childrenImageSharp___fixed___src'
  | 'childrenImageSharp___fixed___srcSet'
  | 'childrenImageSharp___fixed___srcWebp'
  | 'childrenImageSharp___fixed___srcSetWebp'
  | 'childrenImageSharp___fixed___originalName'
  | 'childrenImageSharp___fluid___base64'
  | 'childrenImageSharp___fluid___tracedSVG'
  | 'childrenImageSharp___fluid___aspectRatio'
  | 'childrenImageSharp___fluid___src'
  | 'childrenImageSharp___fluid___srcSet'
  | 'childrenImageSharp___fluid___srcWebp'
  | 'childrenImageSharp___fluid___srcSetWebp'
  | 'childrenImageSharp___fluid___sizes'
  | 'childrenImageSharp___fluid___originalImg'
  | 'childrenImageSharp___fluid___originalName'
  | 'childrenImageSharp___fluid___presentationWidth'
  | 'childrenImageSharp___fluid___presentationHeight'
  | 'childrenImageSharp___gatsbyImageData'
  | 'childrenImageSharp___original___width'
  | 'childrenImageSharp___original___height'
  | 'childrenImageSharp___original___src'
  | 'childrenImageSharp___resize___src'
  | 'childrenImageSharp___resize___tracedSVG'
  | 'childrenImageSharp___resize___width'
  | 'childrenImageSharp___resize___height'
  | 'childrenImageSharp___resize___aspectRatio'
  | 'childrenImageSharp___resize___originalName'
  | 'childrenImageSharp___id'
  | 'childrenImageSharp___parent___id'
  | 'childrenImageSharp___parent___parent___id'
  | 'childrenImageSharp___parent___parent___children'
  | 'childrenImageSharp___parent___children'
  | 'childrenImageSharp___parent___children___id'
  | 'childrenImageSharp___parent___children___children'
  | 'childrenImageSharp___parent___internal___content'
  | 'childrenImageSharp___parent___internal___contentDigest'
  | 'childrenImageSharp___parent___internal___description'
  | 'childrenImageSharp___parent___internal___fieldOwners'
  | 'childrenImageSharp___parent___internal___ignoreType'
  | 'childrenImageSharp___parent___internal___mediaType'
  | 'childrenImageSharp___parent___internal___owner'
  | 'childrenImageSharp___parent___internal___type'
  | 'childrenImageSharp___children'
  | 'childrenImageSharp___children___id'
  | 'childrenImageSharp___children___parent___id'
  | 'childrenImageSharp___children___parent___children'
  | 'childrenImageSharp___children___children'
  | 'childrenImageSharp___children___children___id'
  | 'childrenImageSharp___children___children___children'
  | 'childrenImageSharp___children___internal___content'
  | 'childrenImageSharp___children___internal___contentDigest'
  | 'childrenImageSharp___children___internal___description'
  | 'childrenImageSharp___children___internal___fieldOwners'
  | 'childrenImageSharp___children___internal___ignoreType'
  | 'childrenImageSharp___children___internal___mediaType'
  | 'childrenImageSharp___children___internal___owner'
  | 'childrenImageSharp___children___internal___type'
  | 'childrenImageSharp___internal___content'
  | 'childrenImageSharp___internal___contentDigest'
  | 'childrenImageSharp___internal___description'
  | 'childrenImageSharp___internal___fieldOwners'
  | 'childrenImageSharp___internal___ignoreType'
  | 'childrenImageSharp___internal___mediaType'
  | 'childrenImageSharp___internal___owner'
  | 'childrenImageSharp___internal___type'
  | 'childImageSharp___fixed___base64'
  | 'childImageSharp___fixed___tracedSVG'
  | 'childImageSharp___fixed___aspectRatio'
  | 'childImageSharp___fixed___width'
  | 'childImageSharp___fixed___height'
  | 'childImageSharp___fixed___src'
  | 'childImageSharp___fixed___srcSet'
  | 'childImageSharp___fixed___srcWebp'
  | 'childImageSharp___fixed___srcSetWebp'
  | 'childImageSharp___fixed___originalName'
  | 'childImageSharp___fluid___base64'
  | 'childImageSharp___fluid___tracedSVG'
  | 'childImageSharp___fluid___aspectRatio'
  | 'childImageSharp___fluid___src'
  | 'childImageSharp___fluid___srcSet'
  | 'childImageSharp___fluid___srcWebp'
  | 'childImageSharp___fluid___srcSetWebp'
  | 'childImageSharp___fluid___sizes'
  | 'childImageSharp___fluid___originalImg'
  | 'childImageSharp___fluid___originalName'
  | 'childImageSharp___fluid___presentationWidth'
  | 'childImageSharp___fluid___presentationHeight'
  | 'childImageSharp___gatsbyImageData'
  | 'childImageSharp___original___width'
  | 'childImageSharp___original___height'
  | 'childImageSharp___original___src'
  | 'childImageSharp___resize___src'
  | 'childImageSharp___resize___tracedSVG'
  | 'childImageSharp___resize___width'
  | 'childImageSharp___resize___height'
  | 'childImageSharp___resize___aspectRatio'
  | 'childImageSharp___resize___originalName'
  | 'childImageSharp___id'
  | 'childImageSharp___parent___id'
  | 'childImageSharp___parent___parent___id'
  | 'childImageSharp___parent___parent___children'
  | 'childImageSharp___parent___children'
  | 'childImageSharp___parent___children___id'
  | 'childImageSharp___parent___children___children'
  | 'childImageSharp___parent___internal___content'
  | 'childImageSharp___parent___internal___contentDigest'
  | 'childImageSharp___parent___internal___description'
  | 'childImageSharp___parent___internal___fieldOwners'
  | 'childImageSharp___parent___internal___ignoreType'
  | 'childImageSharp___parent___internal___mediaType'
  | 'childImageSharp___parent___internal___owner'
  | 'childImageSharp___parent___internal___type'
  | 'childImageSharp___children'
  | 'childImageSharp___children___id'
  | 'childImageSharp___children___parent___id'
  | 'childImageSharp___children___parent___children'
  | 'childImageSharp___children___children'
  | 'childImageSharp___children___children___id'
  | 'childImageSharp___children___children___children'
  | 'childImageSharp___children___internal___content'
  | 'childImageSharp___children___internal___contentDigest'
  | 'childImageSharp___children___internal___description'
  | 'childImageSharp___children___internal___fieldOwners'
  | 'childImageSharp___children___internal___ignoreType'
  | 'childImageSharp___children___internal___mediaType'
  | 'childImageSharp___children___internal___owner'
  | 'childImageSharp___children___internal___type'
  | 'childImageSharp___internal___content'
  | 'childImageSharp___internal___contentDigest'
  | 'childImageSharp___internal___description'
  | 'childImageSharp___internal___fieldOwners'
  | 'childImageSharp___internal___ignoreType'
  | 'childImageSharp___internal___mediaType'
  | 'childImageSharp___internal___owner'
  | 'childImageSharp___internal___type'
  | 'childrenMdx'
  | 'childrenMdx___rawBody'
  | 'childrenMdx___fileAbsolutePath'
  | 'childrenMdx___frontmatter___title'
  | 'childrenMdx___frontmatter___description'
  | 'childrenMdx___frontmatter___date'
  | 'childrenMdx___frontmatter___slug'
  | 'childrenMdx___frontmatter___featured_image___sourceInstanceName'
  | 'childrenMdx___frontmatter___featured_image___absolutePath'
  | 'childrenMdx___frontmatter___featured_image___relativePath'
  | 'childrenMdx___frontmatter___featured_image___extension'
  | 'childrenMdx___frontmatter___featured_image___size'
  | 'childrenMdx___frontmatter___featured_image___prettySize'
  | 'childrenMdx___frontmatter___featured_image___modifiedTime'
  | 'childrenMdx___frontmatter___featured_image___accessTime'
  | 'childrenMdx___frontmatter___featured_image___changeTime'
  | 'childrenMdx___frontmatter___featured_image___birthTime'
  | 'childrenMdx___frontmatter___featured_image___root'
  | 'childrenMdx___frontmatter___featured_image___dir'
  | 'childrenMdx___frontmatter___featured_image___base'
  | 'childrenMdx___frontmatter___featured_image___ext'
  | 'childrenMdx___frontmatter___featured_image___name'
  | 'childrenMdx___frontmatter___featured_image___relativeDirectory'
  | 'childrenMdx___frontmatter___featured_image___dev'
  | 'childrenMdx___frontmatter___featured_image___mode'
  | 'childrenMdx___frontmatter___featured_image___nlink'
  | 'childrenMdx___frontmatter___featured_image___uid'
  | 'childrenMdx___frontmatter___featured_image___gid'
  | 'childrenMdx___frontmatter___featured_image___rdev'
  | 'childrenMdx___frontmatter___featured_image___ino'
  | 'childrenMdx___frontmatter___featured_image___atimeMs'
  | 'childrenMdx___frontmatter___featured_image___mtimeMs'
  | 'childrenMdx___frontmatter___featured_image___ctimeMs'
  | 'childrenMdx___frontmatter___featured_image___atime'
  | 'childrenMdx___frontmatter___featured_image___mtime'
  | 'childrenMdx___frontmatter___featured_image___ctime'
  | 'childrenMdx___frontmatter___featured_image___birthtime'
  | 'childrenMdx___frontmatter___featured_image___birthtimeMs'
  | 'childrenMdx___frontmatter___featured_image___blksize'
  | 'childrenMdx___frontmatter___featured_image___blocks'
  | 'childrenMdx___frontmatter___featured_image___publicURL'
  | 'childrenMdx___frontmatter___featured_image___childrenImageSharp'
  | 'childrenMdx___frontmatter___featured_image___childrenMdx'
  | 'childrenMdx___frontmatter___featured_image___childrenPagesJson'
  | 'childrenMdx___frontmatter___featured_image___childrenImagesJson'
  | 'childrenMdx___frontmatter___featured_image___childrenDataJson'
  | 'childrenMdx___frontmatter___featured_image___id'
  | 'childrenMdx___frontmatter___featured_image___children'
  | 'childrenMdx___frontmatter___alt_text'
  | 'childrenMdx___frontmatter___keywords'
  | 'childrenMdx___frontmatter___seo___title'
  | 'childrenMdx___frontmatter___seo___description'
  | 'childrenMdx___frontmatter___seo___keywords'
  | 'childrenMdx___frontmatter___seo___alt_text'
  | 'childrenMdx___frontmatter___published'
  | 'childrenMdx___frontmatter___id'
  | 'childrenMdx___frontmatter___parent___id'
  | 'childrenMdx___frontmatter___parent___children'
  | 'childrenMdx___frontmatter___children'
  | 'childrenMdx___frontmatter___children___id'
  | 'childrenMdx___frontmatter___children___children'
  | 'childrenMdx___frontmatter___internal___content'
  | 'childrenMdx___frontmatter___internal___contentDigest'
  | 'childrenMdx___frontmatter___internal___description'
  | 'childrenMdx___frontmatter___internal___fieldOwners'
  | 'childrenMdx___frontmatter___internal___ignoreType'
  | 'childrenMdx___frontmatter___internal___mediaType'
  | 'childrenMdx___frontmatter___internal___owner'
  | 'childrenMdx___frontmatter___internal___type'
  | 'childrenMdx___slug'
  | 'childrenMdx___body'
  | 'childrenMdx___excerpt'
  | 'childrenMdx___headings'
  | 'childrenMdx___headings___value'
  | 'childrenMdx___headings___depth'
  | 'childrenMdx___html'
  | 'childrenMdx___mdxAST'
  | 'childrenMdx___tableOfContents'
  | 'childrenMdx___timeToRead'
  | 'childrenMdx___wordCount___paragraphs'
  | 'childrenMdx___wordCount___sentences'
  | 'childrenMdx___wordCount___words'
  | 'childrenMdx___fields___slug'
  | 'childrenMdx___id'
  | 'childrenMdx___parent___id'
  | 'childrenMdx___parent___parent___id'
  | 'childrenMdx___parent___parent___children'
  | 'childrenMdx___parent___children'
  | 'childrenMdx___parent___children___id'
  | 'childrenMdx___parent___children___children'
  | 'childrenMdx___parent___internal___content'
  | 'childrenMdx___parent___internal___contentDigest'
  | 'childrenMdx___parent___internal___description'
  | 'childrenMdx___parent___internal___fieldOwners'
  | 'childrenMdx___parent___internal___ignoreType'
  | 'childrenMdx___parent___internal___mediaType'
  | 'childrenMdx___parent___internal___owner'
  | 'childrenMdx___parent___internal___type'
  | 'childrenMdx___children'
  | 'childrenMdx___children___id'
  | 'childrenMdx___children___parent___id'
  | 'childrenMdx___children___parent___children'
  | 'childrenMdx___children___children'
  | 'childrenMdx___children___children___id'
  | 'childrenMdx___children___children___children'
  | 'childrenMdx___children___internal___content'
  | 'childrenMdx___children___internal___contentDigest'
  | 'childrenMdx___children___internal___description'
  | 'childrenMdx___children___internal___fieldOwners'
  | 'childrenMdx___children___internal___ignoreType'
  | 'childrenMdx___children___internal___mediaType'
  | 'childrenMdx___children___internal___owner'
  | 'childrenMdx___children___internal___type'
  | 'childrenMdx___internal___content'
  | 'childrenMdx___internal___contentDigest'
  | 'childrenMdx___internal___description'
  | 'childrenMdx___internal___fieldOwners'
  | 'childrenMdx___internal___ignoreType'
  | 'childrenMdx___internal___mediaType'
  | 'childrenMdx___internal___owner'
  | 'childrenMdx___internal___type'
  | 'childMdx___rawBody'
  | 'childMdx___fileAbsolutePath'
  | 'childMdx___frontmatter___title'
  | 'childMdx___frontmatter___description'
  | 'childMdx___frontmatter___date'
  | 'childMdx___frontmatter___slug'
  | 'childMdx___frontmatter___featured_image___sourceInstanceName'
  | 'childMdx___frontmatter___featured_image___absolutePath'
  | 'childMdx___frontmatter___featured_image___relativePath'
  | 'childMdx___frontmatter___featured_image___extension'
  | 'childMdx___frontmatter___featured_image___size'
  | 'childMdx___frontmatter___featured_image___prettySize'
  | 'childMdx___frontmatter___featured_image___modifiedTime'
  | 'childMdx___frontmatter___featured_image___accessTime'
  | 'childMdx___frontmatter___featured_image___changeTime'
  | 'childMdx___frontmatter___featured_image___birthTime'
  | 'childMdx___frontmatter___featured_image___root'
  | 'childMdx___frontmatter___featured_image___dir'
  | 'childMdx___frontmatter___featured_image___base'
  | 'childMdx___frontmatter___featured_image___ext'
  | 'childMdx___frontmatter___featured_image___name'
  | 'childMdx___frontmatter___featured_image___relativeDirectory'
  | 'childMdx___frontmatter___featured_image___dev'
  | 'childMdx___frontmatter___featured_image___mode'
  | 'childMdx___frontmatter___featured_image___nlink'
  | 'childMdx___frontmatter___featured_image___uid'
  | 'childMdx___frontmatter___featured_image___gid'
  | 'childMdx___frontmatter___featured_image___rdev'
  | 'childMdx___frontmatter___featured_image___ino'
  | 'childMdx___frontmatter___featured_image___atimeMs'
  | 'childMdx___frontmatter___featured_image___mtimeMs'
  | 'childMdx___frontmatter___featured_image___ctimeMs'
  | 'childMdx___frontmatter___featured_image___atime'
  | 'childMdx___frontmatter___featured_image___mtime'
  | 'childMdx___frontmatter___featured_image___ctime'
  | 'childMdx___frontmatter___featured_image___birthtime'
  | 'childMdx___frontmatter___featured_image___birthtimeMs'
  | 'childMdx___frontmatter___featured_image___blksize'
  | 'childMdx___frontmatter___featured_image___blocks'
  | 'childMdx___frontmatter___featured_image___publicURL'
  | 'childMdx___frontmatter___featured_image___childrenImageSharp'
  | 'childMdx___frontmatter___featured_image___childrenMdx'
  | 'childMdx___frontmatter___featured_image___childrenPagesJson'
  | 'childMdx___frontmatter___featured_image___childrenImagesJson'
  | 'childMdx___frontmatter___featured_image___childrenDataJson'
  | 'childMdx___frontmatter___featured_image___id'
  | 'childMdx___frontmatter___featured_image___children'
  | 'childMdx___frontmatter___alt_text'
  | 'childMdx___frontmatter___keywords'
  | 'childMdx___frontmatter___seo___title'
  | 'childMdx___frontmatter___seo___description'
  | 'childMdx___frontmatter___seo___keywords'
  | 'childMdx___frontmatter___seo___alt_text'
  | 'childMdx___frontmatter___published'
  | 'childMdx___frontmatter___id'
  | 'childMdx___frontmatter___parent___id'
  | 'childMdx___frontmatter___parent___children'
  | 'childMdx___frontmatter___children'
  | 'childMdx___frontmatter___children___id'
  | 'childMdx___frontmatter___children___children'
  | 'childMdx___frontmatter___internal___content'
  | 'childMdx___frontmatter___internal___contentDigest'
  | 'childMdx___frontmatter___internal___description'
  | 'childMdx___frontmatter___internal___fieldOwners'
  | 'childMdx___frontmatter___internal___ignoreType'
  | 'childMdx___frontmatter___internal___mediaType'
  | 'childMdx___frontmatter___internal___owner'
  | 'childMdx___frontmatter___internal___type'
  | 'childMdx___slug'
  | 'childMdx___body'
  | 'childMdx___excerpt'
  | 'childMdx___headings'
  | 'childMdx___headings___value'
  | 'childMdx___headings___depth'
  | 'childMdx___html'
  | 'childMdx___mdxAST'
  | 'childMdx___tableOfContents'
  | 'childMdx___timeToRead'
  | 'childMdx___wordCount___paragraphs'
  | 'childMdx___wordCount___sentences'
  | 'childMdx___wordCount___words'
  | 'childMdx___fields___slug'
  | 'childMdx___id'
  | 'childMdx___parent___id'
  | 'childMdx___parent___parent___id'
  | 'childMdx___parent___parent___children'
  | 'childMdx___parent___children'
  | 'childMdx___parent___children___id'
  | 'childMdx___parent___children___children'
  | 'childMdx___parent___internal___content'
  | 'childMdx___parent___internal___contentDigest'
  | 'childMdx___parent___internal___description'
  | 'childMdx___parent___internal___fieldOwners'
  | 'childMdx___parent___internal___ignoreType'
  | 'childMdx___parent___internal___mediaType'
  | 'childMdx___parent___internal___owner'
  | 'childMdx___parent___internal___type'
  | 'childMdx___children'
  | 'childMdx___children___id'
  | 'childMdx___children___parent___id'
  | 'childMdx___children___parent___children'
  | 'childMdx___children___children'
  | 'childMdx___children___children___id'
  | 'childMdx___children___children___children'
  | 'childMdx___children___internal___content'
  | 'childMdx___children___internal___contentDigest'
  | 'childMdx___children___internal___description'
  | 'childMdx___children___internal___fieldOwners'
  | 'childMdx___children___internal___ignoreType'
  | 'childMdx___children___internal___mediaType'
  | 'childMdx___children___internal___owner'
  | 'childMdx___children___internal___type'
  | 'childMdx___internal___content'
  | 'childMdx___internal___contentDigest'
  | 'childMdx___internal___description'
  | 'childMdx___internal___fieldOwners'
  | 'childMdx___internal___ignoreType'
  | 'childMdx___internal___mediaType'
  | 'childMdx___internal___owner'
  | 'childMdx___internal___type'
  | 'childrenPagesJson'
  | 'childrenPagesJson___id'
  | 'childrenPagesJson___parent___id'
  | 'childrenPagesJson___parent___parent___id'
  | 'childrenPagesJson___parent___parent___children'
  | 'childrenPagesJson___parent___children'
  | 'childrenPagesJson___parent___children___id'
  | 'childrenPagesJson___parent___children___children'
  | 'childrenPagesJson___parent___internal___content'
  | 'childrenPagesJson___parent___internal___contentDigest'
  | 'childrenPagesJson___parent___internal___description'
  | 'childrenPagesJson___parent___internal___fieldOwners'
  | 'childrenPagesJson___parent___internal___ignoreType'
  | 'childrenPagesJson___parent___internal___mediaType'
  | 'childrenPagesJson___parent___internal___owner'
  | 'childrenPagesJson___parent___internal___type'
  | 'childrenPagesJson___children'
  | 'childrenPagesJson___children___id'
  | 'childrenPagesJson___children___parent___id'
  | 'childrenPagesJson___children___parent___children'
  | 'childrenPagesJson___children___children'
  | 'childrenPagesJson___children___children___id'
  | 'childrenPagesJson___children___children___children'
  | 'childrenPagesJson___children___internal___content'
  | 'childrenPagesJson___children___internal___contentDigest'
  | 'childrenPagesJson___children___internal___description'
  | 'childrenPagesJson___children___internal___fieldOwners'
  | 'childrenPagesJson___children___internal___ignoreType'
  | 'childrenPagesJson___children___internal___mediaType'
  | 'childrenPagesJson___children___internal___owner'
  | 'childrenPagesJson___children___internal___type'
  | 'childrenPagesJson___internal___content'
  | 'childrenPagesJson___internal___contentDigest'
  | 'childrenPagesJson___internal___description'
  | 'childrenPagesJson___internal___fieldOwners'
  | 'childrenPagesJson___internal___ignoreType'
  | 'childrenPagesJson___internal___mediaType'
  | 'childrenPagesJson___internal___owner'
  | 'childrenPagesJson___internal___type'
  | 'childrenPagesJson___hero_image___image'
  | 'childrenPagesJson___hero_image___alt_text'
  | 'childrenPagesJson___page_header'
  | 'childrenPagesJson___sections'
  | 'childrenPagesJson___sections___template'
  | 'childrenPagesJson___sections___text'
  | 'childrenPagesJson___seo___title'
  | 'childrenPagesJson___seo___description'
  | 'childrenPagesJson___seo___keywords'
  | 'childrenPagesJson___seo___image'
  | 'childrenPagesJson___seo___alt_text'
  | 'childrenPagesJson___slug'
  | 'childPagesJson___id'
  | 'childPagesJson___parent___id'
  | 'childPagesJson___parent___parent___id'
  | 'childPagesJson___parent___parent___children'
  | 'childPagesJson___parent___children'
  | 'childPagesJson___parent___children___id'
  | 'childPagesJson___parent___children___children'
  | 'childPagesJson___parent___internal___content'
  | 'childPagesJson___parent___internal___contentDigest'
  | 'childPagesJson___parent___internal___description'
  | 'childPagesJson___parent___internal___fieldOwners'
  | 'childPagesJson___parent___internal___ignoreType'
  | 'childPagesJson___parent___internal___mediaType'
  | 'childPagesJson___parent___internal___owner'
  | 'childPagesJson___parent___internal___type'
  | 'childPagesJson___children'
  | 'childPagesJson___children___id'
  | 'childPagesJson___children___parent___id'
  | 'childPagesJson___children___parent___children'
  | 'childPagesJson___children___children'
  | 'childPagesJson___children___children___id'
  | 'childPagesJson___children___children___children'
  | 'childPagesJson___children___internal___content'
  | 'childPagesJson___children___internal___contentDigest'
  | 'childPagesJson___children___internal___description'
  | 'childPagesJson___children___internal___fieldOwners'
  | 'childPagesJson___children___internal___ignoreType'
  | 'childPagesJson___children___internal___mediaType'
  | 'childPagesJson___children___internal___owner'
  | 'childPagesJson___children___internal___type'
  | 'childPagesJson___internal___content'
  | 'childPagesJson___internal___contentDigest'
  | 'childPagesJson___internal___description'
  | 'childPagesJson___internal___fieldOwners'
  | 'childPagesJson___internal___ignoreType'
  | 'childPagesJson___internal___mediaType'
  | 'childPagesJson___internal___owner'
  | 'childPagesJson___internal___type'
  | 'childPagesJson___hero_image___image'
  | 'childPagesJson___hero_image___alt_text'
  | 'childPagesJson___page_header'
  | 'childPagesJson___sections'
  | 'childPagesJson___sections___template'
  | 'childPagesJson___sections___text'
  | 'childPagesJson___seo___title'
  | 'childPagesJson___seo___description'
  | 'childPagesJson___seo___keywords'
  | 'childPagesJson___seo___image'
  | 'childPagesJson___seo___alt_text'
  | 'childPagesJson___slug'
  | 'childrenImagesJson'
  | 'childrenImagesJson___id'
  | 'childrenImagesJson___parent___id'
  | 'childrenImagesJson___parent___parent___id'
  | 'childrenImagesJson___parent___parent___children'
  | 'childrenImagesJson___parent___children'
  | 'childrenImagesJson___parent___children___id'
  | 'childrenImagesJson___parent___children___children'
  | 'childrenImagesJson___parent___internal___content'
  | 'childrenImagesJson___parent___internal___contentDigest'
  | 'childrenImagesJson___parent___internal___description'
  | 'childrenImagesJson___parent___internal___fieldOwners'
  | 'childrenImagesJson___parent___internal___ignoreType'
  | 'childrenImagesJson___parent___internal___mediaType'
  | 'childrenImagesJson___parent___internal___owner'
  | 'childrenImagesJson___parent___internal___type'
  | 'childrenImagesJson___children'
  | 'childrenImagesJson___children___id'
  | 'childrenImagesJson___children___parent___id'
  | 'childrenImagesJson___children___parent___children'
  | 'childrenImagesJson___children___children'
  | 'childrenImagesJson___children___children___id'
  | 'childrenImagesJson___children___children___children'
  | 'childrenImagesJson___children___internal___content'
  | 'childrenImagesJson___children___internal___contentDigest'
  | 'childrenImagesJson___children___internal___description'
  | 'childrenImagesJson___children___internal___fieldOwners'
  | 'childrenImagesJson___children___internal___ignoreType'
  | 'childrenImagesJson___children___internal___mediaType'
  | 'childrenImagesJson___children___internal___owner'
  | 'childrenImagesJson___children___internal___type'
  | 'childrenImagesJson___internal___content'
  | 'childrenImagesJson___internal___contentDigest'
  | 'childrenImagesJson___internal___description'
  | 'childrenImagesJson___internal___fieldOwners'
  | 'childrenImagesJson___internal___ignoreType'
  | 'childrenImagesJson___internal___mediaType'
  | 'childrenImagesJson___internal___owner'
  | 'childrenImagesJson___internal___type'
  | 'childrenImagesJson___image'
  | 'childrenImagesJson___alt_text'
  | 'childImagesJson___id'
  | 'childImagesJson___parent___id'
  | 'childImagesJson___parent___parent___id'
  | 'childImagesJson___parent___parent___children'
  | 'childImagesJson___parent___children'
  | 'childImagesJson___parent___children___id'
  | 'childImagesJson___parent___children___children'
  | 'childImagesJson___parent___internal___content'
  | 'childImagesJson___parent___internal___contentDigest'
  | 'childImagesJson___parent___internal___description'
  | 'childImagesJson___parent___internal___fieldOwners'
  | 'childImagesJson___parent___internal___ignoreType'
  | 'childImagesJson___parent___internal___mediaType'
  | 'childImagesJson___parent___internal___owner'
  | 'childImagesJson___parent___internal___type'
  | 'childImagesJson___children'
  | 'childImagesJson___children___id'
  | 'childImagesJson___children___parent___id'
  | 'childImagesJson___children___parent___children'
  | 'childImagesJson___children___children'
  | 'childImagesJson___children___children___id'
  | 'childImagesJson___children___children___children'
  | 'childImagesJson___children___internal___content'
  | 'childImagesJson___children___internal___contentDigest'
  | 'childImagesJson___children___internal___description'
  | 'childImagesJson___children___internal___fieldOwners'
  | 'childImagesJson___children___internal___ignoreType'
  | 'childImagesJson___children___internal___mediaType'
  | 'childImagesJson___children___internal___owner'
  | 'childImagesJson___children___internal___type'
  | 'childImagesJson___internal___content'
  | 'childImagesJson___internal___contentDigest'
  | 'childImagesJson___internal___description'
  | 'childImagesJson___internal___fieldOwners'
  | 'childImagesJson___internal___ignoreType'
  | 'childImagesJson___internal___mediaType'
  | 'childImagesJson___internal___owner'
  | 'childImagesJson___internal___type'
  | 'childImagesJson___image'
  | 'childImagesJson___alt_text'
  | 'childrenDataJson'
  | 'childrenDataJson___id'
  | 'childrenDataJson___parent___id'
  | 'childrenDataJson___parent___parent___id'
  | 'childrenDataJson___parent___parent___children'
  | 'childrenDataJson___parent___children'
  | 'childrenDataJson___parent___children___id'
  | 'childrenDataJson___parent___children___children'
  | 'childrenDataJson___parent___internal___content'
  | 'childrenDataJson___parent___internal___contentDigest'
  | 'childrenDataJson___parent___internal___description'
  | 'childrenDataJson___parent___internal___fieldOwners'
  | 'childrenDataJson___parent___internal___ignoreType'
  | 'childrenDataJson___parent___internal___mediaType'
  | 'childrenDataJson___parent___internal___owner'
  | 'childrenDataJson___parent___internal___type'
  | 'childrenDataJson___children'
  | 'childrenDataJson___children___id'
  | 'childrenDataJson___children___parent___id'
  | 'childrenDataJson___children___parent___children'
  | 'childrenDataJson___children___children'
  | 'childrenDataJson___children___children___id'
  | 'childrenDataJson___children___children___children'
  | 'childrenDataJson___children___internal___content'
  | 'childrenDataJson___children___internal___contentDigest'
  | 'childrenDataJson___children___internal___description'
  | 'childrenDataJson___children___internal___fieldOwners'
  | 'childrenDataJson___children___internal___ignoreType'
  | 'childrenDataJson___children___internal___mediaType'
  | 'childrenDataJson___children___internal___owner'
  | 'childrenDataJson___children___internal___type'
  | 'childrenDataJson___internal___content'
  | 'childrenDataJson___internal___contentDigest'
  | 'childrenDataJson___internal___description'
  | 'childrenDataJson___internal___fieldOwners'
  | 'childrenDataJson___internal___ignoreType'
  | 'childrenDataJson___internal___mediaType'
  | 'childrenDataJson___internal___owner'
  | 'childrenDataJson___internal___type'
  | 'childrenDataJson___hero_image___image'
  | 'childrenDataJson___hero_image___alt_text'
  | 'childrenDataJson___main_content___header'
  | 'childrenDataJson___main_content___text'
  | 'childrenDataJson___main_content___image'
  | 'childrenDataJson___main_content___alt_text'
  | 'childrenDataJson___sections'
  | 'childrenDataJson___sections___template'
  | 'childrenDataJson___sections___background_color'
  | 'childrenDataJson___sections___image'
  | 'childrenDataJson___sections___alt_text'
  | 'childrenDataJson___sections___image_as_background'
  | 'childrenDataJson___sections___sections'
  | 'childrenDataJson___sections___sections___template'
  | 'childrenDataJson___sections___sections___header'
  | 'childrenDataJson___sections___sections___text'
  | 'childrenDataJson___sections___text'
  | 'childrenDataJson___sections___fullwidth'
  | 'childrenDataJson___sections___caption'
  | 'childrenDataJson___sections___emphasized'
  | 'childrenDataJson___page_header'
  | 'childrenDataJson___seo___title'
  | 'childrenDataJson___seo___description'
  | 'childrenDataJson___seo___keywords'
  | 'childrenDataJson___seo___image'
  | 'childrenDataJson___seo___alt_text'
  | 'childrenDataJson___seo___pathname'
  | 'childrenDataJson___seo___article'
  | 'childrenDataJson___title'
  | 'childrenDataJson___titleTemplate'
  | 'childrenDataJson___description'
  | 'childrenDataJson___headline'
  | 'childrenDataJson___keywords'
  | 'childrenDataJson___author'
  | 'childrenDataJson___siteUrl'
  | 'childrenDataJson___siteLanguage'
  | 'childrenDataJson___siteLocale'
  | 'childrenDataJson___image'
  | 'childrenDataJson___twitter'
  | 'childrenDataJson___twitterUrl'
  | 'childrenDataJson___facebook'
  | 'childrenDataJson___facebookUrl'
  | 'childrenDataJson___instagramUrl'
  | 'childrenDataJson___youtubeUrl'
  | 'childrenDataJson___linkedinUrl'
  | 'childrenDataJson___githubUrl'
  | 'childDataJson___id'
  | 'childDataJson___parent___id'
  | 'childDataJson___parent___parent___id'
  | 'childDataJson___parent___parent___children'
  | 'childDataJson___parent___children'
  | 'childDataJson___parent___children___id'
  | 'childDataJson___parent___children___children'
  | 'childDataJson___parent___internal___content'
  | 'childDataJson___parent___internal___contentDigest'
  | 'childDataJson___parent___internal___description'
  | 'childDataJson___parent___internal___fieldOwners'
  | 'childDataJson___parent___internal___ignoreType'
  | 'childDataJson___parent___internal___mediaType'
  | 'childDataJson___parent___internal___owner'
  | 'childDataJson___parent___internal___type'
  | 'childDataJson___children'
  | 'childDataJson___children___id'
  | 'childDataJson___children___parent___id'
  | 'childDataJson___children___parent___children'
  | 'childDataJson___children___children'
  | 'childDataJson___children___children___id'
  | 'childDataJson___children___children___children'
  | 'childDataJson___children___internal___content'
  | 'childDataJson___children___internal___contentDigest'
  | 'childDataJson___children___internal___description'
  | 'childDataJson___children___internal___fieldOwners'
  | 'childDataJson___children___internal___ignoreType'
  | 'childDataJson___children___internal___mediaType'
  | 'childDataJson___children___internal___owner'
  | 'childDataJson___children___internal___type'
  | 'childDataJson___internal___content'
  | 'childDataJson___internal___contentDigest'
  | 'childDataJson___internal___description'
  | 'childDataJson___internal___fieldOwners'
  | 'childDataJson___internal___ignoreType'
  | 'childDataJson___internal___mediaType'
  | 'childDataJson___internal___owner'
  | 'childDataJson___internal___type'
  | 'childDataJson___hero_image___image'
  | 'childDataJson___hero_image___alt_text'
  | 'childDataJson___main_content___header'
  | 'childDataJson___main_content___text'
  | 'childDataJson___main_content___image'
  | 'childDataJson___main_content___alt_text'
  | 'childDataJson___sections'
  | 'childDataJson___sections___template'
  | 'childDataJson___sections___background_color'
  | 'childDataJson___sections___image'
  | 'childDataJson___sections___alt_text'
  | 'childDataJson___sections___image_as_background'
  | 'childDataJson___sections___sections'
  | 'childDataJson___sections___sections___template'
  | 'childDataJson___sections___sections___header'
  | 'childDataJson___sections___sections___text'
  | 'childDataJson___sections___text'
  | 'childDataJson___sections___fullwidth'
  | 'childDataJson___sections___caption'
  | 'childDataJson___sections___emphasized'
  | 'childDataJson___page_header'
  | 'childDataJson___seo___title'
  | 'childDataJson___seo___description'
  | 'childDataJson___seo___keywords'
  | 'childDataJson___seo___image'
  | 'childDataJson___seo___alt_text'
  | 'childDataJson___seo___pathname'
  | 'childDataJson___seo___article'
  | 'childDataJson___title'
  | 'childDataJson___titleTemplate'
  | 'childDataJson___description'
  | 'childDataJson___headline'
  | 'childDataJson___keywords'
  | 'childDataJson___author'
  | 'childDataJson___siteUrl'
  | 'childDataJson___siteLanguage'
  | 'childDataJson___siteLocale'
  | 'childDataJson___image'
  | 'childDataJson___twitter'
  | 'childDataJson___twitterUrl'
  | 'childDataJson___facebook'
  | 'childDataJson___facebookUrl'
  | 'childDataJson___instagramUrl'
  | 'childDataJson___youtubeUrl'
  | 'childDataJson___linkedinUrl'
  | 'childDataJson___githubUrl'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type FileGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<FileEdge>
  nodes: Array<File>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<FileGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldsEnum
}

export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: FileFieldsEnum
}

export type FileSortInput = {
  fields?: InputMaybe<Array<InputMaybe<FileFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type DirectoryConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DirectoryGroupConnection>
}

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldsEnum =
  | 'sourceInstanceName'
  | 'absolutePath'
  | 'relativePath'
  | 'extension'
  | 'size'
  | 'prettySize'
  | 'modifiedTime'
  | 'accessTime'
  | 'changeTime'
  | 'birthTime'
  | 'root'
  | 'dir'
  | 'base'
  | 'ext'
  | 'name'
  | 'relativeDirectory'
  | 'dev'
  | 'mode'
  | 'nlink'
  | 'uid'
  | 'gid'
  | 'rdev'
  | 'ino'
  | 'atimeMs'
  | 'mtimeMs'
  | 'ctimeMs'
  | 'atime'
  | 'mtime'
  | 'ctime'
  | 'birthtime'
  | 'birthtimeMs'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DirectoryEdge>
  nodes: Array<Directory>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DirectoryGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldsEnum
}

export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DirectoryFieldsEnum
}

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>
  absolutePath?: InputMaybe<StringQueryOperatorInput>
  relativePath?: InputMaybe<StringQueryOperatorInput>
  extension?: InputMaybe<StringQueryOperatorInput>
  size?: InputMaybe<IntQueryOperatorInput>
  prettySize?: InputMaybe<StringQueryOperatorInput>
  modifiedTime?: InputMaybe<DateQueryOperatorInput>
  accessTime?: InputMaybe<DateQueryOperatorInput>
  changeTime?: InputMaybe<DateQueryOperatorInput>
  birthTime?: InputMaybe<DateQueryOperatorInput>
  root?: InputMaybe<StringQueryOperatorInput>
  dir?: InputMaybe<StringQueryOperatorInput>
  base?: InputMaybe<StringQueryOperatorInput>
  ext?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>
  dev?: InputMaybe<IntQueryOperatorInput>
  mode?: InputMaybe<IntQueryOperatorInput>
  nlink?: InputMaybe<IntQueryOperatorInput>
  uid?: InputMaybe<IntQueryOperatorInput>
  gid?: InputMaybe<IntQueryOperatorInput>
  rdev?: InputMaybe<IntQueryOperatorInput>
  ino?: InputMaybe<FloatQueryOperatorInput>
  atimeMs?: InputMaybe<FloatQueryOperatorInput>
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>
  atime?: InputMaybe<DateQueryOperatorInput>
  mtime?: InputMaybe<DateQueryOperatorInput>
  ctime?: InputMaybe<DateQueryOperatorInput>
  birthtime?: InputMaybe<DateQueryOperatorInput>
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type DirectorySortInput = {
  fields?: InputMaybe<Array<InputMaybe<DirectoryFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  titleTemplate?: InputMaybe<StringQueryOperatorInput>
  headline?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  author?: InputMaybe<StringQueryOperatorInput>
  siteUrl?: InputMaybe<StringQueryOperatorInput>
  siteLanguage?: InputMaybe<StringQueryOperatorInput>
  siteLocale?: InputMaybe<StringQueryOperatorInput>
  image?: InputMaybe<StringQueryOperatorInput>
  twitter?: InputMaybe<StringQueryOperatorInput>
  twitterUrl?: InputMaybe<StringQueryOperatorInput>
  facebook?: InputMaybe<StringQueryOperatorInput>
  facebookUrl?: InputMaybe<StringQueryOperatorInput>
  instagramUrl?: InputMaybe<StringQueryOperatorInput>
  youtubeUrl?: InputMaybe<StringQueryOperatorInput>
  linkedinUrl?: InputMaybe<StringQueryOperatorInput>
  githubUrl?: InputMaybe<StringQueryOperatorInput>
}

export type SiteConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteGroupConnection>
}

export type SiteConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldsEnum =
  | 'buildTime'
  | 'siteMetadata___title'
  | 'siteMetadata___description'
  | 'siteMetadata___titleTemplate'
  | 'siteMetadata___headline'
  | 'siteMetadata___keywords'
  | 'siteMetadata___author'
  | 'siteMetadata___siteUrl'
  | 'siteMetadata___siteLanguage'
  | 'siteMetadata___siteLocale'
  | 'siteMetadata___image'
  | 'siteMetadata___twitter'
  | 'siteMetadata___twitterUrl'
  | 'siteMetadata___facebook'
  | 'siteMetadata___facebookUrl'
  | 'siteMetadata___instagramUrl'
  | 'siteMetadata___youtubeUrl'
  | 'siteMetadata___linkedinUrl'
  | 'siteMetadata___githubUrl'
  | 'polyfill'
  | 'pathPrefix'
  | 'jsxRuntime'
  | 'trailingSlash'
  | 'graphqlTypegen'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SiteGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteEdge>
  nodes: Array<Site>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldsEnum
}

export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFieldsEnum
}

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>
  polyfill?: InputMaybe<BooleanQueryOperatorInput>
  pathPrefix?: InputMaybe<StringQueryOperatorInput>
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>
  trailingSlash?: InputMaybe<StringQueryOperatorInput>
  graphqlTypegen?: InputMaybe<BooleanQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SiteSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteFunctionConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteFunctionGroupConnection>
}

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export type SiteFunctionFieldsEnum =
  | 'functionRoute'
  | 'pluginName'
  | 'originalAbsoluteFilePath'
  | 'originalRelativeFilePath'
  | 'relativeCompiledFilePath'
  | 'absoluteCompiledFilePath'
  | 'matchPath'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteFunctionEdge>
  nodes: Array<SiteFunction>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteFunctionGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFunctionFieldsEnum
}

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>
  pluginName?: InputMaybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SiteFunctionSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteFunctionFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>
  name?: InputMaybe<StringQueryOperatorInput>
  version?: InputMaybe<StringQueryOperatorInput>
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>
  browserAPIs?: InputMaybe<StringQueryOperatorInput>
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>
  packageJson?: InputMaybe<JsonQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SitePageConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePageGroupConnection>
}

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldsEnum =
  | 'path'
  | 'component'
  | 'internalComponentName'
  | 'componentChunkName'
  | 'matchPath'
  | 'pageContext'
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___pluginOptions'
  | 'pluginCreator___packageJson'
  | 'pluginCreator___id'
  | 'pluginCreator___parent___id'
  | 'pluginCreator___parent___parent___id'
  | 'pluginCreator___parent___parent___children'
  | 'pluginCreator___parent___children'
  | 'pluginCreator___parent___children___id'
  | 'pluginCreator___parent___children___children'
  | 'pluginCreator___parent___internal___content'
  | 'pluginCreator___parent___internal___contentDigest'
  | 'pluginCreator___parent___internal___description'
  | 'pluginCreator___parent___internal___fieldOwners'
  | 'pluginCreator___parent___internal___ignoreType'
  | 'pluginCreator___parent___internal___mediaType'
  | 'pluginCreator___parent___internal___owner'
  | 'pluginCreator___parent___internal___type'
  | 'pluginCreator___children'
  | 'pluginCreator___children___id'
  | 'pluginCreator___children___parent___id'
  | 'pluginCreator___children___parent___children'
  | 'pluginCreator___children___children'
  | 'pluginCreator___children___children___id'
  | 'pluginCreator___children___children___children'
  | 'pluginCreator___children___internal___content'
  | 'pluginCreator___children___internal___contentDigest'
  | 'pluginCreator___children___internal___description'
  | 'pluginCreator___children___internal___fieldOwners'
  | 'pluginCreator___children___internal___ignoreType'
  | 'pluginCreator___children___internal___mediaType'
  | 'pluginCreator___children___internal___owner'
  | 'pluginCreator___children___internal___type'
  | 'pluginCreator___internal___content'
  | 'pluginCreator___internal___contentDigest'
  | 'pluginCreator___internal___description'
  | 'pluginCreator___internal___fieldOwners'
  | 'pluginCreator___internal___ignoreType'
  | 'pluginCreator___internal___mediaType'
  | 'pluginCreator___internal___owner'
  | 'pluginCreator___internal___type'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePageGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldsEnum
}

export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePageFieldsEnum
}

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>
  component?: InputMaybe<StringQueryOperatorInput>
  internalComponentName?: InputMaybe<StringQueryOperatorInput>
  componentChunkName?: InputMaybe<StringQueryOperatorInput>
  matchPath?: InputMaybe<StringQueryOperatorInput>
  pageContext?: InputMaybe<JsonQueryOperatorInput>
  pluginCreator?: InputMaybe<SitePluginFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SitePageSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePageFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SitePluginConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePluginGroupConnection>
}

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
  | 'resolve'
  | 'name'
  | 'version'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'pluginOptions'
  | 'packageJson'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SitePluginGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldsEnum
}

export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SitePluginFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteBuildMetadataGroupConnection>
}

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
  | 'buildTime'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<SiteBuildMetadataGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SiteBuildMetadataSortInput = {
  fields?: InputMaybe<Array<InputMaybe<SiteBuildMetadataFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ImageSharpConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ImageSharpGroupConnection>
}

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

export type ImageSharpFieldsEnum =
  | 'fixed___base64'
  | 'fixed___tracedSVG'
  | 'fixed___aspectRatio'
  | 'fixed___width'
  | 'fixed___height'
  | 'fixed___src'
  | 'fixed___srcSet'
  | 'fixed___srcWebp'
  | 'fixed___srcSetWebp'
  | 'fixed___originalName'
  | 'fluid___base64'
  | 'fluid___tracedSVG'
  | 'fluid___aspectRatio'
  | 'fluid___src'
  | 'fluid___srcSet'
  | 'fluid___srcWebp'
  | 'fluid___srcSetWebp'
  | 'fluid___sizes'
  | 'fluid___originalImg'
  | 'fluid___originalName'
  | 'fluid___presentationWidth'
  | 'fluid___presentationHeight'
  | 'gatsbyImageData'
  | 'original___width'
  | 'original___height'
  | 'original___src'
  | 'resize___src'
  | 'resize___tracedSVG'
  | 'resize___width'
  | 'resize___height'
  | 'resize___aspectRatio'
  | 'resize___originalName'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImageSharpEdge>
  nodes: Array<ImageSharp>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ImageSharpGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldsEnum
}

export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImageSharpFieldsEnum
}

export type ImageSharpSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImageSharpFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type MdxFrontmatterConnection = {
  totalCount: Scalars['Int']
  edges: Array<MdxFrontmatterEdge>
  nodes: Array<MdxFrontmatter>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<MdxFrontmatterGroupConnection>
}

export type MdxFrontmatterConnectionDistinctArgs = {
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterConnectionMaxArgs = {
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterConnectionMinArgs = {
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterConnectionSumArgs = {
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterEdge = {
  next?: Maybe<MdxFrontmatter>
  node: MdxFrontmatter
  previous?: Maybe<MdxFrontmatter>
}

export type MdxFrontmatterFieldsEnum =
  | 'title'
  | 'description'
  | 'date'
  | 'slug'
  | 'featured_image___sourceInstanceName'
  | 'featured_image___absolutePath'
  | 'featured_image___relativePath'
  | 'featured_image___extension'
  | 'featured_image___size'
  | 'featured_image___prettySize'
  | 'featured_image___modifiedTime'
  | 'featured_image___accessTime'
  | 'featured_image___changeTime'
  | 'featured_image___birthTime'
  | 'featured_image___root'
  | 'featured_image___dir'
  | 'featured_image___base'
  | 'featured_image___ext'
  | 'featured_image___name'
  | 'featured_image___relativeDirectory'
  | 'featured_image___dev'
  | 'featured_image___mode'
  | 'featured_image___nlink'
  | 'featured_image___uid'
  | 'featured_image___gid'
  | 'featured_image___rdev'
  | 'featured_image___ino'
  | 'featured_image___atimeMs'
  | 'featured_image___mtimeMs'
  | 'featured_image___ctimeMs'
  | 'featured_image___atime'
  | 'featured_image___mtime'
  | 'featured_image___ctime'
  | 'featured_image___birthtime'
  | 'featured_image___birthtimeMs'
  | 'featured_image___blksize'
  | 'featured_image___blocks'
  | 'featured_image___publicURL'
  | 'featured_image___childrenImageSharp'
  | 'featured_image___childrenImageSharp___fixed___base64'
  | 'featured_image___childrenImageSharp___fixed___tracedSVG'
  | 'featured_image___childrenImageSharp___fixed___aspectRatio'
  | 'featured_image___childrenImageSharp___fixed___width'
  | 'featured_image___childrenImageSharp___fixed___height'
  | 'featured_image___childrenImageSharp___fixed___src'
  | 'featured_image___childrenImageSharp___fixed___srcSet'
  | 'featured_image___childrenImageSharp___fixed___srcWebp'
  | 'featured_image___childrenImageSharp___fixed___srcSetWebp'
  | 'featured_image___childrenImageSharp___fixed___originalName'
  | 'featured_image___childrenImageSharp___fluid___base64'
  | 'featured_image___childrenImageSharp___fluid___tracedSVG'
  | 'featured_image___childrenImageSharp___fluid___aspectRatio'
  | 'featured_image___childrenImageSharp___fluid___src'
  | 'featured_image___childrenImageSharp___fluid___srcSet'
  | 'featured_image___childrenImageSharp___fluid___srcWebp'
  | 'featured_image___childrenImageSharp___fluid___srcSetWebp'
  | 'featured_image___childrenImageSharp___fluid___sizes'
  | 'featured_image___childrenImageSharp___fluid___originalImg'
  | 'featured_image___childrenImageSharp___fluid___originalName'
  | 'featured_image___childrenImageSharp___fluid___presentationWidth'
  | 'featured_image___childrenImageSharp___fluid___presentationHeight'
  | 'featured_image___childrenImageSharp___gatsbyImageData'
  | 'featured_image___childrenImageSharp___original___width'
  | 'featured_image___childrenImageSharp___original___height'
  | 'featured_image___childrenImageSharp___original___src'
  | 'featured_image___childrenImageSharp___resize___src'
  | 'featured_image___childrenImageSharp___resize___tracedSVG'
  | 'featured_image___childrenImageSharp___resize___width'
  | 'featured_image___childrenImageSharp___resize___height'
  | 'featured_image___childrenImageSharp___resize___aspectRatio'
  | 'featured_image___childrenImageSharp___resize___originalName'
  | 'featured_image___childrenImageSharp___id'
  | 'featured_image___childrenImageSharp___parent___id'
  | 'featured_image___childrenImageSharp___parent___children'
  | 'featured_image___childrenImageSharp___children'
  | 'featured_image___childrenImageSharp___children___id'
  | 'featured_image___childrenImageSharp___children___children'
  | 'featured_image___childrenImageSharp___internal___content'
  | 'featured_image___childrenImageSharp___internal___contentDigest'
  | 'featured_image___childrenImageSharp___internal___description'
  | 'featured_image___childrenImageSharp___internal___fieldOwners'
  | 'featured_image___childrenImageSharp___internal___ignoreType'
  | 'featured_image___childrenImageSharp___internal___mediaType'
  | 'featured_image___childrenImageSharp___internal___owner'
  | 'featured_image___childrenImageSharp___internal___type'
  | 'featured_image___childImageSharp___fixed___base64'
  | 'featured_image___childImageSharp___fixed___tracedSVG'
  | 'featured_image___childImageSharp___fixed___aspectRatio'
  | 'featured_image___childImageSharp___fixed___width'
  | 'featured_image___childImageSharp___fixed___height'
  | 'featured_image___childImageSharp___fixed___src'
  | 'featured_image___childImageSharp___fixed___srcSet'
  | 'featured_image___childImageSharp___fixed___srcWebp'
  | 'featured_image___childImageSharp___fixed___srcSetWebp'
  | 'featured_image___childImageSharp___fixed___originalName'
  | 'featured_image___childImageSharp___fluid___base64'
  | 'featured_image___childImageSharp___fluid___tracedSVG'
  | 'featured_image___childImageSharp___fluid___aspectRatio'
  | 'featured_image___childImageSharp___fluid___src'
  | 'featured_image___childImageSharp___fluid___srcSet'
  | 'featured_image___childImageSharp___fluid___srcWebp'
  | 'featured_image___childImageSharp___fluid___srcSetWebp'
  | 'featured_image___childImageSharp___fluid___sizes'
  | 'featured_image___childImageSharp___fluid___originalImg'
  | 'featured_image___childImageSharp___fluid___originalName'
  | 'featured_image___childImageSharp___fluid___presentationWidth'
  | 'featured_image___childImageSharp___fluid___presentationHeight'
  | 'featured_image___childImageSharp___gatsbyImageData'
  | 'featured_image___childImageSharp___original___width'
  | 'featured_image___childImageSharp___original___height'
  | 'featured_image___childImageSharp___original___src'
  | 'featured_image___childImageSharp___resize___src'
  | 'featured_image___childImageSharp___resize___tracedSVG'
  | 'featured_image___childImageSharp___resize___width'
  | 'featured_image___childImageSharp___resize___height'
  | 'featured_image___childImageSharp___resize___aspectRatio'
  | 'featured_image___childImageSharp___resize___originalName'
  | 'featured_image___childImageSharp___id'
  | 'featured_image___childImageSharp___parent___id'
  | 'featured_image___childImageSharp___parent___children'
  | 'featured_image___childImageSharp___children'
  | 'featured_image___childImageSharp___children___id'
  | 'featured_image___childImageSharp___children___children'
  | 'featured_image___childImageSharp___internal___content'
  | 'featured_image___childImageSharp___internal___contentDigest'
  | 'featured_image___childImageSharp___internal___description'
  | 'featured_image___childImageSharp___internal___fieldOwners'
  | 'featured_image___childImageSharp___internal___ignoreType'
  | 'featured_image___childImageSharp___internal___mediaType'
  | 'featured_image___childImageSharp___internal___owner'
  | 'featured_image___childImageSharp___internal___type'
  | 'featured_image___childrenMdx'
  | 'featured_image___childrenMdx___rawBody'
  | 'featured_image___childrenMdx___fileAbsolutePath'
  | 'featured_image___childrenMdx___frontmatter___title'
  | 'featured_image___childrenMdx___frontmatter___description'
  | 'featured_image___childrenMdx___frontmatter___date'
  | 'featured_image___childrenMdx___frontmatter___slug'
  | 'featured_image___childrenMdx___frontmatter___alt_text'
  | 'featured_image___childrenMdx___frontmatter___keywords'
  | 'featured_image___childrenMdx___frontmatter___published'
  | 'featured_image___childrenMdx___frontmatter___id'
  | 'featured_image___childrenMdx___frontmatter___children'
  | 'featured_image___childrenMdx___slug'
  | 'featured_image___childrenMdx___body'
  | 'featured_image___childrenMdx___excerpt'
  | 'featured_image___childrenMdx___headings'
  | 'featured_image___childrenMdx___headings___value'
  | 'featured_image___childrenMdx___headings___depth'
  | 'featured_image___childrenMdx___html'
  | 'featured_image___childrenMdx___mdxAST'
  | 'featured_image___childrenMdx___tableOfContents'
  | 'featured_image___childrenMdx___timeToRead'
  | 'featured_image___childrenMdx___wordCount___paragraphs'
  | 'featured_image___childrenMdx___wordCount___sentences'
  | 'featured_image___childrenMdx___wordCount___words'
  | 'featured_image___childrenMdx___fields___slug'
  | 'featured_image___childrenMdx___id'
  | 'featured_image___childrenMdx___parent___id'
  | 'featured_image___childrenMdx___parent___children'
  | 'featured_image___childrenMdx___children'
  | 'featured_image___childrenMdx___children___id'
  | 'featured_image___childrenMdx___children___children'
  | 'featured_image___childrenMdx___internal___content'
  | 'featured_image___childrenMdx___internal___contentDigest'
  | 'featured_image___childrenMdx___internal___description'
  | 'featured_image___childrenMdx___internal___fieldOwners'
  | 'featured_image___childrenMdx___internal___ignoreType'
  | 'featured_image___childrenMdx___internal___mediaType'
  | 'featured_image___childrenMdx___internal___owner'
  | 'featured_image___childrenMdx___internal___type'
  | 'featured_image___childMdx___rawBody'
  | 'featured_image___childMdx___fileAbsolutePath'
  | 'featured_image___childMdx___frontmatter___title'
  | 'featured_image___childMdx___frontmatter___description'
  | 'featured_image___childMdx___frontmatter___date'
  | 'featured_image___childMdx___frontmatter___slug'
  | 'featured_image___childMdx___frontmatter___alt_text'
  | 'featured_image___childMdx___frontmatter___keywords'
  | 'featured_image___childMdx___frontmatter___published'
  | 'featured_image___childMdx___frontmatter___id'
  | 'featured_image___childMdx___frontmatter___children'
  | 'featured_image___childMdx___slug'
  | 'featured_image___childMdx___body'
  | 'featured_image___childMdx___excerpt'
  | 'featured_image___childMdx___headings'
  | 'featured_image___childMdx___headings___value'
  | 'featured_image___childMdx___headings___depth'
  | 'featured_image___childMdx___html'
  | 'featured_image___childMdx___mdxAST'
  | 'featured_image___childMdx___tableOfContents'
  | 'featured_image___childMdx___timeToRead'
  | 'featured_image___childMdx___wordCount___paragraphs'
  | 'featured_image___childMdx___wordCount___sentences'
  | 'featured_image___childMdx___wordCount___words'
  | 'featured_image___childMdx___fields___slug'
  | 'featured_image___childMdx___id'
  | 'featured_image___childMdx___parent___id'
  | 'featured_image___childMdx___parent___children'
  | 'featured_image___childMdx___children'
  | 'featured_image___childMdx___children___id'
  | 'featured_image___childMdx___children___children'
  | 'featured_image___childMdx___internal___content'
  | 'featured_image___childMdx___internal___contentDigest'
  | 'featured_image___childMdx___internal___description'
  | 'featured_image___childMdx___internal___fieldOwners'
  | 'featured_image___childMdx___internal___ignoreType'
  | 'featured_image___childMdx___internal___mediaType'
  | 'featured_image___childMdx___internal___owner'
  | 'featured_image___childMdx___internal___type'
  | 'featured_image___childrenPagesJson'
  | 'featured_image___childrenPagesJson___id'
  | 'featured_image___childrenPagesJson___parent___id'
  | 'featured_image___childrenPagesJson___parent___children'
  | 'featured_image___childrenPagesJson___children'
  | 'featured_image___childrenPagesJson___children___id'
  | 'featured_image___childrenPagesJson___children___children'
  | 'featured_image___childrenPagesJson___internal___content'
  | 'featured_image___childrenPagesJson___internal___contentDigest'
  | 'featured_image___childrenPagesJson___internal___description'
  | 'featured_image___childrenPagesJson___internal___fieldOwners'
  | 'featured_image___childrenPagesJson___internal___ignoreType'
  | 'featured_image___childrenPagesJson___internal___mediaType'
  | 'featured_image___childrenPagesJson___internal___owner'
  | 'featured_image___childrenPagesJson___internal___type'
  | 'featured_image___childrenPagesJson___hero_image___image'
  | 'featured_image___childrenPagesJson___hero_image___alt_text'
  | 'featured_image___childrenPagesJson___page_header'
  | 'featured_image___childrenPagesJson___sections'
  | 'featured_image___childrenPagesJson___sections___template'
  | 'featured_image___childrenPagesJson___sections___text'
  | 'featured_image___childrenPagesJson___seo___title'
  | 'featured_image___childrenPagesJson___seo___description'
  | 'featured_image___childrenPagesJson___seo___keywords'
  | 'featured_image___childrenPagesJson___seo___image'
  | 'featured_image___childrenPagesJson___seo___alt_text'
  | 'featured_image___childrenPagesJson___slug'
  | 'featured_image___childPagesJson___id'
  | 'featured_image___childPagesJson___parent___id'
  | 'featured_image___childPagesJson___parent___children'
  | 'featured_image___childPagesJson___children'
  | 'featured_image___childPagesJson___children___id'
  | 'featured_image___childPagesJson___children___children'
  | 'featured_image___childPagesJson___internal___content'
  | 'featured_image___childPagesJson___internal___contentDigest'
  | 'featured_image___childPagesJson___internal___description'
  | 'featured_image___childPagesJson___internal___fieldOwners'
  | 'featured_image___childPagesJson___internal___ignoreType'
  | 'featured_image___childPagesJson___internal___mediaType'
  | 'featured_image___childPagesJson___internal___owner'
  | 'featured_image___childPagesJson___internal___type'
  | 'featured_image___childPagesJson___hero_image___image'
  | 'featured_image___childPagesJson___hero_image___alt_text'
  | 'featured_image___childPagesJson___page_header'
  | 'featured_image___childPagesJson___sections'
  | 'featured_image___childPagesJson___sections___template'
  | 'featured_image___childPagesJson___sections___text'
  | 'featured_image___childPagesJson___seo___title'
  | 'featured_image___childPagesJson___seo___description'
  | 'featured_image___childPagesJson___seo___keywords'
  | 'featured_image___childPagesJson___seo___image'
  | 'featured_image___childPagesJson___seo___alt_text'
  | 'featured_image___childPagesJson___slug'
  | 'featured_image___childrenImagesJson'
  | 'featured_image___childrenImagesJson___id'
  | 'featured_image___childrenImagesJson___parent___id'
  | 'featured_image___childrenImagesJson___parent___children'
  | 'featured_image___childrenImagesJson___children'
  | 'featured_image___childrenImagesJson___children___id'
  | 'featured_image___childrenImagesJson___children___children'
  | 'featured_image___childrenImagesJson___internal___content'
  | 'featured_image___childrenImagesJson___internal___contentDigest'
  | 'featured_image___childrenImagesJson___internal___description'
  | 'featured_image___childrenImagesJson___internal___fieldOwners'
  | 'featured_image___childrenImagesJson___internal___ignoreType'
  | 'featured_image___childrenImagesJson___internal___mediaType'
  | 'featured_image___childrenImagesJson___internal___owner'
  | 'featured_image___childrenImagesJson___internal___type'
  | 'featured_image___childrenImagesJson___image'
  | 'featured_image___childrenImagesJson___alt_text'
  | 'featured_image___childImagesJson___id'
  | 'featured_image___childImagesJson___parent___id'
  | 'featured_image___childImagesJson___parent___children'
  | 'featured_image___childImagesJson___children'
  | 'featured_image___childImagesJson___children___id'
  | 'featured_image___childImagesJson___children___children'
  | 'featured_image___childImagesJson___internal___content'
  | 'featured_image___childImagesJson___internal___contentDigest'
  | 'featured_image___childImagesJson___internal___description'
  | 'featured_image___childImagesJson___internal___fieldOwners'
  | 'featured_image___childImagesJson___internal___ignoreType'
  | 'featured_image___childImagesJson___internal___mediaType'
  | 'featured_image___childImagesJson___internal___owner'
  | 'featured_image___childImagesJson___internal___type'
  | 'featured_image___childImagesJson___image'
  | 'featured_image___childImagesJson___alt_text'
  | 'featured_image___childrenDataJson'
  | 'featured_image___childrenDataJson___id'
  | 'featured_image___childrenDataJson___parent___id'
  | 'featured_image___childrenDataJson___parent___children'
  | 'featured_image___childrenDataJson___children'
  | 'featured_image___childrenDataJson___children___id'
  | 'featured_image___childrenDataJson___children___children'
  | 'featured_image___childrenDataJson___internal___content'
  | 'featured_image___childrenDataJson___internal___contentDigest'
  | 'featured_image___childrenDataJson___internal___description'
  | 'featured_image___childrenDataJson___internal___fieldOwners'
  | 'featured_image___childrenDataJson___internal___ignoreType'
  | 'featured_image___childrenDataJson___internal___mediaType'
  | 'featured_image___childrenDataJson___internal___owner'
  | 'featured_image___childrenDataJson___internal___type'
  | 'featured_image___childrenDataJson___hero_image___image'
  | 'featured_image___childrenDataJson___hero_image___alt_text'
  | 'featured_image___childrenDataJson___main_content___header'
  | 'featured_image___childrenDataJson___main_content___text'
  | 'featured_image___childrenDataJson___main_content___image'
  | 'featured_image___childrenDataJson___main_content___alt_text'
  | 'featured_image___childrenDataJson___sections'
  | 'featured_image___childrenDataJson___sections___template'
  | 'featured_image___childrenDataJson___sections___background_color'
  | 'featured_image___childrenDataJson___sections___image'
  | 'featured_image___childrenDataJson___sections___alt_text'
  | 'featured_image___childrenDataJson___sections___image_as_background'
  | 'featured_image___childrenDataJson___sections___sections'
  | 'featured_image___childrenDataJson___sections___text'
  | 'featured_image___childrenDataJson___sections___fullwidth'
  | 'featured_image___childrenDataJson___sections___caption'
  | 'featured_image___childrenDataJson___sections___emphasized'
  | 'featured_image___childrenDataJson___page_header'
  | 'featured_image___childrenDataJson___seo___title'
  | 'featured_image___childrenDataJson___seo___description'
  | 'featured_image___childrenDataJson___seo___keywords'
  | 'featured_image___childrenDataJson___seo___image'
  | 'featured_image___childrenDataJson___seo___alt_text'
  | 'featured_image___childrenDataJson___seo___pathname'
  | 'featured_image___childrenDataJson___seo___article'
  | 'featured_image___childrenDataJson___title'
  | 'featured_image___childrenDataJson___titleTemplate'
  | 'featured_image___childrenDataJson___description'
  | 'featured_image___childrenDataJson___headline'
  | 'featured_image___childrenDataJson___keywords'
  | 'featured_image___childrenDataJson___author'
  | 'featured_image___childrenDataJson___siteUrl'
  | 'featured_image___childrenDataJson___siteLanguage'
  | 'featured_image___childrenDataJson___siteLocale'
  | 'featured_image___childrenDataJson___image'
  | 'featured_image___childrenDataJson___twitter'
  | 'featured_image___childrenDataJson___twitterUrl'
  | 'featured_image___childrenDataJson___facebook'
  | 'featured_image___childrenDataJson___facebookUrl'
  | 'featured_image___childrenDataJson___instagramUrl'
  | 'featured_image___childrenDataJson___youtubeUrl'
  | 'featured_image___childrenDataJson___linkedinUrl'
  | 'featured_image___childrenDataJson___githubUrl'
  | 'featured_image___childDataJson___id'
  | 'featured_image___childDataJson___parent___id'
  | 'featured_image___childDataJson___parent___children'
  | 'featured_image___childDataJson___children'
  | 'featured_image___childDataJson___children___id'
  | 'featured_image___childDataJson___children___children'
  | 'featured_image___childDataJson___internal___content'
  | 'featured_image___childDataJson___internal___contentDigest'
  | 'featured_image___childDataJson___internal___description'
  | 'featured_image___childDataJson___internal___fieldOwners'
  | 'featured_image___childDataJson___internal___ignoreType'
  | 'featured_image___childDataJson___internal___mediaType'
  | 'featured_image___childDataJson___internal___owner'
  | 'featured_image___childDataJson___internal___type'
  | 'featured_image___childDataJson___hero_image___image'
  | 'featured_image___childDataJson___hero_image___alt_text'
  | 'featured_image___childDataJson___main_content___header'
  | 'featured_image___childDataJson___main_content___text'
  | 'featured_image___childDataJson___main_content___image'
  | 'featured_image___childDataJson___main_content___alt_text'
  | 'featured_image___childDataJson___sections'
  | 'featured_image___childDataJson___sections___template'
  | 'featured_image___childDataJson___sections___background_color'
  | 'featured_image___childDataJson___sections___image'
  | 'featured_image___childDataJson___sections___alt_text'
  | 'featured_image___childDataJson___sections___image_as_background'
  | 'featured_image___childDataJson___sections___sections'
  | 'featured_image___childDataJson___sections___text'
  | 'featured_image___childDataJson___sections___fullwidth'
  | 'featured_image___childDataJson___sections___caption'
  | 'featured_image___childDataJson___sections___emphasized'
  | 'featured_image___childDataJson___page_header'
  | 'featured_image___childDataJson___seo___title'
  | 'featured_image___childDataJson___seo___description'
  | 'featured_image___childDataJson___seo___keywords'
  | 'featured_image___childDataJson___seo___image'
  | 'featured_image___childDataJson___seo___alt_text'
  | 'featured_image___childDataJson___seo___pathname'
  | 'featured_image___childDataJson___seo___article'
  | 'featured_image___childDataJson___title'
  | 'featured_image___childDataJson___titleTemplate'
  | 'featured_image___childDataJson___description'
  | 'featured_image___childDataJson___headline'
  | 'featured_image___childDataJson___keywords'
  | 'featured_image___childDataJson___author'
  | 'featured_image___childDataJson___siteUrl'
  | 'featured_image___childDataJson___siteLanguage'
  | 'featured_image___childDataJson___siteLocale'
  | 'featured_image___childDataJson___image'
  | 'featured_image___childDataJson___twitter'
  | 'featured_image___childDataJson___twitterUrl'
  | 'featured_image___childDataJson___facebook'
  | 'featured_image___childDataJson___facebookUrl'
  | 'featured_image___childDataJson___instagramUrl'
  | 'featured_image___childDataJson___youtubeUrl'
  | 'featured_image___childDataJson___linkedinUrl'
  | 'featured_image___childDataJson___githubUrl'
  | 'featured_image___id'
  | 'featured_image___parent___id'
  | 'featured_image___parent___parent___id'
  | 'featured_image___parent___parent___children'
  | 'featured_image___parent___children'
  | 'featured_image___parent___children___id'
  | 'featured_image___parent___children___children'
  | 'featured_image___parent___internal___content'
  | 'featured_image___parent___internal___contentDigest'
  | 'featured_image___parent___internal___description'
  | 'featured_image___parent___internal___fieldOwners'
  | 'featured_image___parent___internal___ignoreType'
  | 'featured_image___parent___internal___mediaType'
  | 'featured_image___parent___internal___owner'
  | 'featured_image___parent___internal___type'
  | 'featured_image___children'
  | 'featured_image___children___id'
  | 'featured_image___children___parent___id'
  | 'featured_image___children___parent___children'
  | 'featured_image___children___children'
  | 'featured_image___children___children___id'
  | 'featured_image___children___children___children'
  | 'featured_image___children___internal___content'
  | 'featured_image___children___internal___contentDigest'
  | 'featured_image___children___internal___description'
  | 'featured_image___children___internal___fieldOwners'
  | 'featured_image___children___internal___ignoreType'
  | 'featured_image___children___internal___mediaType'
  | 'featured_image___children___internal___owner'
  | 'featured_image___children___internal___type'
  | 'featured_image___internal___content'
  | 'featured_image___internal___contentDigest'
  | 'featured_image___internal___description'
  | 'featured_image___internal___fieldOwners'
  | 'featured_image___internal___ignoreType'
  | 'featured_image___internal___mediaType'
  | 'featured_image___internal___owner'
  | 'featured_image___internal___type'
  | 'alt_text'
  | 'keywords'
  | 'seo___title'
  | 'seo___description'
  | 'seo___keywords'
  | 'seo___image___sourceInstanceName'
  | 'seo___image___absolutePath'
  | 'seo___image___relativePath'
  | 'seo___image___extension'
  | 'seo___image___size'
  | 'seo___image___prettySize'
  | 'seo___image___modifiedTime'
  | 'seo___image___accessTime'
  | 'seo___image___changeTime'
  | 'seo___image___birthTime'
  | 'seo___image___root'
  | 'seo___image___dir'
  | 'seo___image___base'
  | 'seo___image___ext'
  | 'seo___image___name'
  | 'seo___image___relativeDirectory'
  | 'seo___image___dev'
  | 'seo___image___mode'
  | 'seo___image___nlink'
  | 'seo___image___uid'
  | 'seo___image___gid'
  | 'seo___image___rdev'
  | 'seo___image___ino'
  | 'seo___image___atimeMs'
  | 'seo___image___mtimeMs'
  | 'seo___image___ctimeMs'
  | 'seo___image___atime'
  | 'seo___image___mtime'
  | 'seo___image___ctime'
  | 'seo___image___birthtime'
  | 'seo___image___birthtimeMs'
  | 'seo___image___blksize'
  | 'seo___image___blocks'
  | 'seo___image___publicURL'
  | 'seo___image___childrenImageSharp'
  | 'seo___image___childrenImageSharp___gatsbyImageData'
  | 'seo___image___childrenImageSharp___id'
  | 'seo___image___childrenImageSharp___children'
  | 'seo___image___childImageSharp___gatsbyImageData'
  | 'seo___image___childImageSharp___id'
  | 'seo___image___childImageSharp___children'
  | 'seo___image___childrenMdx'
  | 'seo___image___childrenMdx___rawBody'
  | 'seo___image___childrenMdx___fileAbsolutePath'
  | 'seo___image___childrenMdx___slug'
  | 'seo___image___childrenMdx___body'
  | 'seo___image___childrenMdx___excerpt'
  | 'seo___image___childrenMdx___headings'
  | 'seo___image___childrenMdx___html'
  | 'seo___image___childrenMdx___mdxAST'
  | 'seo___image___childrenMdx___tableOfContents'
  | 'seo___image___childrenMdx___timeToRead'
  | 'seo___image___childrenMdx___id'
  | 'seo___image___childrenMdx___children'
  | 'seo___image___childMdx___rawBody'
  | 'seo___image___childMdx___fileAbsolutePath'
  | 'seo___image___childMdx___slug'
  | 'seo___image___childMdx___body'
  | 'seo___image___childMdx___excerpt'
  | 'seo___image___childMdx___headings'
  | 'seo___image___childMdx___html'
  | 'seo___image___childMdx___mdxAST'
  | 'seo___image___childMdx___tableOfContents'
  | 'seo___image___childMdx___timeToRead'
  | 'seo___image___childMdx___id'
  | 'seo___image___childMdx___children'
  | 'seo___image___childrenPagesJson'
  | 'seo___image___childrenPagesJson___id'
  | 'seo___image___childrenPagesJson___children'
  | 'seo___image___childrenPagesJson___page_header'
  | 'seo___image___childrenPagesJson___sections'
  | 'seo___image___childrenPagesJson___slug'
  | 'seo___image___childPagesJson___id'
  | 'seo___image___childPagesJson___children'
  | 'seo___image___childPagesJson___page_header'
  | 'seo___image___childPagesJson___sections'
  | 'seo___image___childPagesJson___slug'
  | 'seo___image___childrenImagesJson'
  | 'seo___image___childrenImagesJson___id'
  | 'seo___image___childrenImagesJson___children'
  | 'seo___image___childrenImagesJson___image'
  | 'seo___image___childrenImagesJson___alt_text'
  | 'seo___image___childImagesJson___id'
  | 'seo___image___childImagesJson___children'
  | 'seo___image___childImagesJson___image'
  | 'seo___image___childImagesJson___alt_text'
  | 'seo___image___childrenDataJson'
  | 'seo___image___childrenDataJson___id'
  | 'seo___image___childrenDataJson___children'
  | 'seo___image___childrenDataJson___sections'
  | 'seo___image___childrenDataJson___page_header'
  | 'seo___image___childrenDataJson___title'
  | 'seo___image___childrenDataJson___titleTemplate'
  | 'seo___image___childrenDataJson___description'
  | 'seo___image___childrenDataJson___headline'
  | 'seo___image___childrenDataJson___keywords'
  | 'seo___image___childrenDataJson___author'
  | 'seo___image___childrenDataJson___siteUrl'
  | 'seo___image___childrenDataJson___siteLanguage'
  | 'seo___image___childrenDataJson___siteLocale'
  | 'seo___image___childrenDataJson___image'
  | 'seo___image___childrenDataJson___twitter'
  | 'seo___image___childrenDataJson___twitterUrl'
  | 'seo___image___childrenDataJson___facebook'
  | 'seo___image___childrenDataJson___facebookUrl'
  | 'seo___image___childrenDataJson___instagramUrl'
  | 'seo___image___childrenDataJson___youtubeUrl'
  | 'seo___image___childrenDataJson___linkedinUrl'
  | 'seo___image___childrenDataJson___githubUrl'
  | 'seo___image___childDataJson___id'
  | 'seo___image___childDataJson___children'
  | 'seo___image___childDataJson___sections'
  | 'seo___image___childDataJson___page_header'
  | 'seo___image___childDataJson___title'
  | 'seo___image___childDataJson___titleTemplate'
  | 'seo___image___childDataJson___description'
  | 'seo___image___childDataJson___headline'
  | 'seo___image___childDataJson___keywords'
  | 'seo___image___childDataJson___author'
  | 'seo___image___childDataJson___siteUrl'
  | 'seo___image___childDataJson___siteLanguage'
  | 'seo___image___childDataJson___siteLocale'
  | 'seo___image___childDataJson___image'
  | 'seo___image___childDataJson___twitter'
  | 'seo___image___childDataJson___twitterUrl'
  | 'seo___image___childDataJson___facebook'
  | 'seo___image___childDataJson___facebookUrl'
  | 'seo___image___childDataJson___instagramUrl'
  | 'seo___image___childDataJson___youtubeUrl'
  | 'seo___image___childDataJson___linkedinUrl'
  | 'seo___image___childDataJson___githubUrl'
  | 'seo___image___id'
  | 'seo___image___parent___id'
  | 'seo___image___parent___children'
  | 'seo___image___children'
  | 'seo___image___children___id'
  | 'seo___image___children___children'
  | 'seo___image___internal___content'
  | 'seo___image___internal___contentDigest'
  | 'seo___image___internal___description'
  | 'seo___image___internal___fieldOwners'
  | 'seo___image___internal___ignoreType'
  | 'seo___image___internal___mediaType'
  | 'seo___image___internal___owner'
  | 'seo___image___internal___type'
  | 'seo___alt_text'
  | 'published'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type MdxFrontmatterGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MdxFrontmatterEdge>
  nodes: Array<MdxFrontmatter>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<MdxFrontmatterGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MdxFrontmatterGroupConnectionDistinctArgs = {
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterGroupConnectionMaxArgs = {
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterGroupConnectionMinArgs = {
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterGroupConnectionSumArgs = {
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MdxFrontmatterFieldsEnum
}

export type MdxFrontmatterSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFrontmatterFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type MdxConnection = {
  totalCount: Scalars['Int']
  edges: Array<MdxEdge>
  nodes: Array<Mdx>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<MdxGroupConnection>
}

export type MdxConnectionDistinctArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionMaxArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionMinArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionSumArgs = {
  field: MdxFieldsEnum
}

export type MdxConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MdxFieldsEnum
}

export type MdxEdge = {
  next?: Maybe<Mdx>
  node: Mdx
  previous?: Maybe<Mdx>
}

export type MdxFieldsEnum =
  | 'rawBody'
  | 'fileAbsolutePath'
  | 'frontmatter___title'
  | 'frontmatter___description'
  | 'frontmatter___date'
  | 'frontmatter___slug'
  | 'frontmatter___featured_image___sourceInstanceName'
  | 'frontmatter___featured_image___absolutePath'
  | 'frontmatter___featured_image___relativePath'
  | 'frontmatter___featured_image___extension'
  | 'frontmatter___featured_image___size'
  | 'frontmatter___featured_image___prettySize'
  | 'frontmatter___featured_image___modifiedTime'
  | 'frontmatter___featured_image___accessTime'
  | 'frontmatter___featured_image___changeTime'
  | 'frontmatter___featured_image___birthTime'
  | 'frontmatter___featured_image___root'
  | 'frontmatter___featured_image___dir'
  | 'frontmatter___featured_image___base'
  | 'frontmatter___featured_image___ext'
  | 'frontmatter___featured_image___name'
  | 'frontmatter___featured_image___relativeDirectory'
  | 'frontmatter___featured_image___dev'
  | 'frontmatter___featured_image___mode'
  | 'frontmatter___featured_image___nlink'
  | 'frontmatter___featured_image___uid'
  | 'frontmatter___featured_image___gid'
  | 'frontmatter___featured_image___rdev'
  | 'frontmatter___featured_image___ino'
  | 'frontmatter___featured_image___atimeMs'
  | 'frontmatter___featured_image___mtimeMs'
  | 'frontmatter___featured_image___ctimeMs'
  | 'frontmatter___featured_image___atime'
  | 'frontmatter___featured_image___mtime'
  | 'frontmatter___featured_image___ctime'
  | 'frontmatter___featured_image___birthtime'
  | 'frontmatter___featured_image___birthtimeMs'
  | 'frontmatter___featured_image___blksize'
  | 'frontmatter___featured_image___blocks'
  | 'frontmatter___featured_image___publicURL'
  | 'frontmatter___featured_image___childrenImageSharp'
  | 'frontmatter___featured_image___childrenImageSharp___gatsbyImageData'
  | 'frontmatter___featured_image___childrenImageSharp___id'
  | 'frontmatter___featured_image___childrenImageSharp___children'
  | 'frontmatter___featured_image___childImageSharp___gatsbyImageData'
  | 'frontmatter___featured_image___childImageSharp___id'
  | 'frontmatter___featured_image___childImageSharp___children'
  | 'frontmatter___featured_image___childrenMdx'
  | 'frontmatter___featured_image___childrenMdx___rawBody'
  | 'frontmatter___featured_image___childrenMdx___fileAbsolutePath'
  | 'frontmatter___featured_image___childrenMdx___slug'
  | 'frontmatter___featured_image___childrenMdx___body'
  | 'frontmatter___featured_image___childrenMdx___excerpt'
  | 'frontmatter___featured_image___childrenMdx___headings'
  | 'frontmatter___featured_image___childrenMdx___html'
  | 'frontmatter___featured_image___childrenMdx___mdxAST'
  | 'frontmatter___featured_image___childrenMdx___tableOfContents'
  | 'frontmatter___featured_image___childrenMdx___timeToRead'
  | 'frontmatter___featured_image___childrenMdx___id'
  | 'frontmatter___featured_image___childrenMdx___children'
  | 'frontmatter___featured_image___childMdx___rawBody'
  | 'frontmatter___featured_image___childMdx___fileAbsolutePath'
  | 'frontmatter___featured_image___childMdx___slug'
  | 'frontmatter___featured_image___childMdx___body'
  | 'frontmatter___featured_image___childMdx___excerpt'
  | 'frontmatter___featured_image___childMdx___headings'
  | 'frontmatter___featured_image___childMdx___html'
  | 'frontmatter___featured_image___childMdx___mdxAST'
  | 'frontmatter___featured_image___childMdx___tableOfContents'
  | 'frontmatter___featured_image___childMdx___timeToRead'
  | 'frontmatter___featured_image___childMdx___id'
  | 'frontmatter___featured_image___childMdx___children'
  | 'frontmatter___featured_image___childrenPagesJson'
  | 'frontmatter___featured_image___childrenPagesJson___id'
  | 'frontmatter___featured_image___childrenPagesJson___children'
  | 'frontmatter___featured_image___childrenPagesJson___page_header'
  | 'frontmatter___featured_image___childrenPagesJson___sections'
  | 'frontmatter___featured_image___childrenPagesJson___slug'
  | 'frontmatter___featured_image___childPagesJson___id'
  | 'frontmatter___featured_image___childPagesJson___children'
  | 'frontmatter___featured_image___childPagesJson___page_header'
  | 'frontmatter___featured_image___childPagesJson___sections'
  | 'frontmatter___featured_image___childPagesJson___slug'
  | 'frontmatter___featured_image___childrenImagesJson'
  | 'frontmatter___featured_image___childrenImagesJson___id'
  | 'frontmatter___featured_image___childrenImagesJson___children'
  | 'frontmatter___featured_image___childrenImagesJson___image'
  | 'frontmatter___featured_image___childrenImagesJson___alt_text'
  | 'frontmatter___featured_image___childImagesJson___id'
  | 'frontmatter___featured_image___childImagesJson___children'
  | 'frontmatter___featured_image___childImagesJson___image'
  | 'frontmatter___featured_image___childImagesJson___alt_text'
  | 'frontmatter___featured_image___childrenDataJson'
  | 'frontmatter___featured_image___childrenDataJson___id'
  | 'frontmatter___featured_image___childrenDataJson___children'
  | 'frontmatter___featured_image___childrenDataJson___sections'
  | 'frontmatter___featured_image___childrenDataJson___page_header'
  | 'frontmatter___featured_image___childrenDataJson___title'
  | 'frontmatter___featured_image___childrenDataJson___titleTemplate'
  | 'frontmatter___featured_image___childrenDataJson___description'
  | 'frontmatter___featured_image___childrenDataJson___headline'
  | 'frontmatter___featured_image___childrenDataJson___keywords'
  | 'frontmatter___featured_image___childrenDataJson___author'
  | 'frontmatter___featured_image___childrenDataJson___siteUrl'
  | 'frontmatter___featured_image___childrenDataJson___siteLanguage'
  | 'frontmatter___featured_image___childrenDataJson___siteLocale'
  | 'frontmatter___featured_image___childrenDataJson___image'
  | 'frontmatter___featured_image___childrenDataJson___twitter'
  | 'frontmatter___featured_image___childrenDataJson___twitterUrl'
  | 'frontmatter___featured_image___childrenDataJson___facebook'
  | 'frontmatter___featured_image___childrenDataJson___facebookUrl'
  | 'frontmatter___featured_image___childrenDataJson___instagramUrl'
  | 'frontmatter___featured_image___childrenDataJson___youtubeUrl'
  | 'frontmatter___featured_image___childrenDataJson___linkedinUrl'
  | 'frontmatter___featured_image___childrenDataJson___githubUrl'
  | 'frontmatter___featured_image___childDataJson___id'
  | 'frontmatter___featured_image___childDataJson___children'
  | 'frontmatter___featured_image___childDataJson___sections'
  | 'frontmatter___featured_image___childDataJson___page_header'
  | 'frontmatter___featured_image___childDataJson___title'
  | 'frontmatter___featured_image___childDataJson___titleTemplate'
  | 'frontmatter___featured_image___childDataJson___description'
  | 'frontmatter___featured_image___childDataJson___headline'
  | 'frontmatter___featured_image___childDataJson___keywords'
  | 'frontmatter___featured_image___childDataJson___author'
  | 'frontmatter___featured_image___childDataJson___siteUrl'
  | 'frontmatter___featured_image___childDataJson___siteLanguage'
  | 'frontmatter___featured_image___childDataJson___siteLocale'
  | 'frontmatter___featured_image___childDataJson___image'
  | 'frontmatter___featured_image___childDataJson___twitter'
  | 'frontmatter___featured_image___childDataJson___twitterUrl'
  | 'frontmatter___featured_image___childDataJson___facebook'
  | 'frontmatter___featured_image___childDataJson___facebookUrl'
  | 'frontmatter___featured_image___childDataJson___instagramUrl'
  | 'frontmatter___featured_image___childDataJson___youtubeUrl'
  | 'frontmatter___featured_image___childDataJson___linkedinUrl'
  | 'frontmatter___featured_image___childDataJson___githubUrl'
  | 'frontmatter___featured_image___id'
  | 'frontmatter___featured_image___parent___id'
  | 'frontmatter___featured_image___parent___children'
  | 'frontmatter___featured_image___children'
  | 'frontmatter___featured_image___children___id'
  | 'frontmatter___featured_image___children___children'
  | 'frontmatter___featured_image___internal___content'
  | 'frontmatter___featured_image___internal___contentDigest'
  | 'frontmatter___featured_image___internal___description'
  | 'frontmatter___featured_image___internal___fieldOwners'
  | 'frontmatter___featured_image___internal___ignoreType'
  | 'frontmatter___featured_image___internal___mediaType'
  | 'frontmatter___featured_image___internal___owner'
  | 'frontmatter___featured_image___internal___type'
  | 'frontmatter___alt_text'
  | 'frontmatter___keywords'
  | 'frontmatter___seo___title'
  | 'frontmatter___seo___description'
  | 'frontmatter___seo___keywords'
  | 'frontmatter___seo___image___sourceInstanceName'
  | 'frontmatter___seo___image___absolutePath'
  | 'frontmatter___seo___image___relativePath'
  | 'frontmatter___seo___image___extension'
  | 'frontmatter___seo___image___size'
  | 'frontmatter___seo___image___prettySize'
  | 'frontmatter___seo___image___modifiedTime'
  | 'frontmatter___seo___image___accessTime'
  | 'frontmatter___seo___image___changeTime'
  | 'frontmatter___seo___image___birthTime'
  | 'frontmatter___seo___image___root'
  | 'frontmatter___seo___image___dir'
  | 'frontmatter___seo___image___base'
  | 'frontmatter___seo___image___ext'
  | 'frontmatter___seo___image___name'
  | 'frontmatter___seo___image___relativeDirectory'
  | 'frontmatter___seo___image___dev'
  | 'frontmatter___seo___image___mode'
  | 'frontmatter___seo___image___nlink'
  | 'frontmatter___seo___image___uid'
  | 'frontmatter___seo___image___gid'
  | 'frontmatter___seo___image___rdev'
  | 'frontmatter___seo___image___ino'
  | 'frontmatter___seo___image___atimeMs'
  | 'frontmatter___seo___image___mtimeMs'
  | 'frontmatter___seo___image___ctimeMs'
  | 'frontmatter___seo___image___atime'
  | 'frontmatter___seo___image___mtime'
  | 'frontmatter___seo___image___ctime'
  | 'frontmatter___seo___image___birthtime'
  | 'frontmatter___seo___image___birthtimeMs'
  | 'frontmatter___seo___image___blksize'
  | 'frontmatter___seo___image___blocks'
  | 'frontmatter___seo___image___publicURL'
  | 'frontmatter___seo___image___childrenImageSharp'
  | 'frontmatter___seo___image___childrenMdx'
  | 'frontmatter___seo___image___childrenPagesJson'
  | 'frontmatter___seo___image___childrenImagesJson'
  | 'frontmatter___seo___image___childrenDataJson'
  | 'frontmatter___seo___image___id'
  | 'frontmatter___seo___image___children'
  | 'frontmatter___seo___alt_text'
  | 'frontmatter___published'
  | 'frontmatter___id'
  | 'frontmatter___parent___id'
  | 'frontmatter___parent___parent___id'
  | 'frontmatter___parent___parent___children'
  | 'frontmatter___parent___children'
  | 'frontmatter___parent___children___id'
  | 'frontmatter___parent___children___children'
  | 'frontmatter___parent___internal___content'
  | 'frontmatter___parent___internal___contentDigest'
  | 'frontmatter___parent___internal___description'
  | 'frontmatter___parent___internal___fieldOwners'
  | 'frontmatter___parent___internal___ignoreType'
  | 'frontmatter___parent___internal___mediaType'
  | 'frontmatter___parent___internal___owner'
  | 'frontmatter___parent___internal___type'
  | 'frontmatter___children'
  | 'frontmatter___children___id'
  | 'frontmatter___children___parent___id'
  | 'frontmatter___children___parent___children'
  | 'frontmatter___children___children'
  | 'frontmatter___children___children___id'
  | 'frontmatter___children___children___children'
  | 'frontmatter___children___internal___content'
  | 'frontmatter___children___internal___contentDigest'
  | 'frontmatter___children___internal___description'
  | 'frontmatter___children___internal___fieldOwners'
  | 'frontmatter___children___internal___ignoreType'
  | 'frontmatter___children___internal___mediaType'
  | 'frontmatter___children___internal___owner'
  | 'frontmatter___children___internal___type'
  | 'frontmatter___internal___content'
  | 'frontmatter___internal___contentDigest'
  | 'frontmatter___internal___description'
  | 'frontmatter___internal___fieldOwners'
  | 'frontmatter___internal___ignoreType'
  | 'frontmatter___internal___mediaType'
  | 'frontmatter___internal___owner'
  | 'frontmatter___internal___type'
  | 'slug'
  | 'body'
  | 'excerpt'
  | 'headings'
  | 'headings___value'
  | 'headings___depth'
  | 'html'
  | 'mdxAST'
  | 'tableOfContents'
  | 'timeToRead'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'fields___slug'
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type MdxGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MdxEdge>
  nodes: Array<Mdx>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<MdxGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MdxGroupConnectionDistinctArgs = {
  field: MdxFieldsEnum
}

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldsEnum
}

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldsEnum
}

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldsEnum
}

export type MdxGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MdxFieldsEnum
}

export type MdxSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MdxFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: InputMaybe<MarkdownHeadingFilterInput>
}

export type MarkdownHeadingFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>
  value?: InputMaybe<StringQueryOperatorInput>
  depth?: InputMaybe<IntQueryOperatorInput>
}

export type MarkdownWordCountFilterInput = {
  paragraphs?: InputMaybe<IntQueryOperatorInput>
  sentences?: InputMaybe<IntQueryOperatorInput>
  words?: InputMaybe<IntQueryOperatorInput>
}

export type MarkdownRemarkConnection = {
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<MarkdownRemarkGroupConnection>
}

export type MarkdownRemarkConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export type MarkdownRemarkFieldsEnum =
  | 'id'
  | 'html'
  | 'htmlAst'
  | 'excerpt'
  | 'excerptAst'
  | 'headings'
  | 'headings___id'
  | 'headings___value'
  | 'headings___depth'
  | 'timeToRead'
  | 'tableOfContents'
  | 'wordCount___paragraphs'
  | 'wordCount___sentences'
  | 'wordCount___words'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'

export type MarkdownRemarkGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<MarkdownRemarkEdge>
  nodes: Array<MarkdownRemark>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<MarkdownRemarkGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MarkdownRemarkGroupConnectionDistinctArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MarkdownRemarkFieldsEnum
}

export type MarkdownRemarkFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>
  html?: InputMaybe<StringQueryOperatorInput>
  htmlAst?: InputMaybe<JsonQueryOperatorInput>
  excerpt?: InputMaybe<StringQueryOperatorInput>
  excerptAst?: InputMaybe<JsonQueryOperatorInput>
  headings?: InputMaybe<MarkdownHeadingFilterListInput>
  timeToRead?: InputMaybe<IntQueryOperatorInput>
  tableOfContents?: InputMaybe<StringQueryOperatorInput>
  wordCount?: InputMaybe<MarkdownWordCountFilterInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type MarkdownRemarkSortInput = {
  fields?: InputMaybe<Array<InputMaybe<MarkdownRemarkFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type PagesJsonConnection = {
  totalCount: Scalars['Int']
  edges: Array<PagesJsonEdge>
  nodes: Array<PagesJson>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PagesJsonGroupConnection>
}

export type PagesJsonConnectionDistinctArgs = {
  field: PagesJsonFieldsEnum
}

export type PagesJsonConnectionMaxArgs = {
  field: PagesJsonFieldsEnum
}

export type PagesJsonConnectionMinArgs = {
  field: PagesJsonFieldsEnum
}

export type PagesJsonConnectionSumArgs = {
  field: PagesJsonFieldsEnum
}

export type PagesJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: PagesJsonFieldsEnum
}

export type PagesJsonEdge = {
  next?: Maybe<PagesJson>
  node: PagesJson
  previous?: Maybe<PagesJson>
}

export type PagesJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'hero_image___image'
  | 'hero_image___alt_text'
  | 'page_header'
  | 'sections'
  | 'sections___template'
  | 'sections___text'
  | 'seo___title'
  | 'seo___description'
  | 'seo___keywords'
  | 'seo___image'
  | 'seo___alt_text'
  | 'slug'

export type PagesJsonGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<PagesJsonEdge>
  nodes: Array<PagesJson>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<PagesJsonGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PagesJsonGroupConnectionDistinctArgs = {
  field: PagesJsonFieldsEnum
}

export type PagesJsonGroupConnectionMaxArgs = {
  field: PagesJsonFieldsEnum
}

export type PagesJsonGroupConnectionMinArgs = {
  field: PagesJsonFieldsEnum
}

export type PagesJsonGroupConnectionSumArgs = {
  field: PagesJsonFieldsEnum
}

export type PagesJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: PagesJsonFieldsEnum
}

export type PagesJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<PagesJsonFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type ImagesJsonConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImagesJsonEdge>
  nodes: Array<ImagesJson>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ImagesJsonGroupConnection>
}

export type ImagesJsonConnectionDistinctArgs = {
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonConnectionMaxArgs = {
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonConnectionMinArgs = {
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonConnectionSumArgs = {
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonEdge = {
  next?: Maybe<ImagesJson>
  node: ImagesJson
  previous?: Maybe<ImagesJson>
}

export type ImagesJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'image'
  | 'alt_text'

export type ImagesJsonGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<ImagesJsonEdge>
  nodes: Array<ImagesJson>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<ImagesJsonGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImagesJsonGroupConnectionDistinctArgs = {
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonGroupConnectionMaxArgs = {
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonGroupConnectionMinArgs = {
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonGroupConnectionSumArgs = {
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImagesJsonFieldsEnum
}

export type ImagesJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<ImagesJsonFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type DataJsonConnection = {
  totalCount: Scalars['Int']
  edges: Array<DataJsonEdge>
  nodes: Array<DataJson>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DataJsonGroupConnection>
}

export type DataJsonConnectionDistinctArgs = {
  field: DataJsonFieldsEnum
}

export type DataJsonConnectionMaxArgs = {
  field: DataJsonFieldsEnum
}

export type DataJsonConnectionMinArgs = {
  field: DataJsonFieldsEnum
}

export type DataJsonConnectionSumArgs = {
  field: DataJsonFieldsEnum
}

export type DataJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DataJsonFieldsEnum
}

export type DataJsonEdge = {
  next?: Maybe<DataJson>
  node: DataJson
  previous?: Maybe<DataJson>
}

export type DataJsonFieldsEnum =
  | 'id'
  | 'parent___id'
  | 'parent___parent___id'
  | 'parent___parent___parent___id'
  | 'parent___parent___parent___children'
  | 'parent___parent___children'
  | 'parent___parent___children___id'
  | 'parent___parent___children___children'
  | 'parent___parent___internal___content'
  | 'parent___parent___internal___contentDigest'
  | 'parent___parent___internal___description'
  | 'parent___parent___internal___fieldOwners'
  | 'parent___parent___internal___ignoreType'
  | 'parent___parent___internal___mediaType'
  | 'parent___parent___internal___owner'
  | 'parent___parent___internal___type'
  | 'parent___children'
  | 'parent___children___id'
  | 'parent___children___parent___id'
  | 'parent___children___parent___children'
  | 'parent___children___children'
  | 'parent___children___children___id'
  | 'parent___children___children___children'
  | 'parent___children___internal___content'
  | 'parent___children___internal___contentDigest'
  | 'parent___children___internal___description'
  | 'parent___children___internal___fieldOwners'
  | 'parent___children___internal___ignoreType'
  | 'parent___children___internal___mediaType'
  | 'parent___children___internal___owner'
  | 'parent___children___internal___type'
  | 'parent___internal___content'
  | 'parent___internal___contentDigest'
  | 'parent___internal___description'
  | 'parent___internal___fieldOwners'
  | 'parent___internal___ignoreType'
  | 'parent___internal___mediaType'
  | 'parent___internal___owner'
  | 'parent___internal___type'
  | 'children'
  | 'children___id'
  | 'children___parent___id'
  | 'children___parent___parent___id'
  | 'children___parent___parent___children'
  | 'children___parent___children'
  | 'children___parent___children___id'
  | 'children___parent___children___children'
  | 'children___parent___internal___content'
  | 'children___parent___internal___contentDigest'
  | 'children___parent___internal___description'
  | 'children___parent___internal___fieldOwners'
  | 'children___parent___internal___ignoreType'
  | 'children___parent___internal___mediaType'
  | 'children___parent___internal___owner'
  | 'children___parent___internal___type'
  | 'children___children'
  | 'children___children___id'
  | 'children___children___parent___id'
  | 'children___children___parent___children'
  | 'children___children___children'
  | 'children___children___children___id'
  | 'children___children___children___children'
  | 'children___children___internal___content'
  | 'children___children___internal___contentDigest'
  | 'children___children___internal___description'
  | 'children___children___internal___fieldOwners'
  | 'children___children___internal___ignoreType'
  | 'children___children___internal___mediaType'
  | 'children___children___internal___owner'
  | 'children___children___internal___type'
  | 'children___internal___content'
  | 'children___internal___contentDigest'
  | 'children___internal___description'
  | 'children___internal___fieldOwners'
  | 'children___internal___ignoreType'
  | 'children___internal___mediaType'
  | 'children___internal___owner'
  | 'children___internal___type'
  | 'internal___content'
  | 'internal___contentDigest'
  | 'internal___description'
  | 'internal___fieldOwners'
  | 'internal___ignoreType'
  | 'internal___mediaType'
  | 'internal___owner'
  | 'internal___type'
  | 'hero_image___image'
  | 'hero_image___alt_text'
  | 'main_content___header'
  | 'main_content___text'
  | 'main_content___image'
  | 'main_content___alt_text'
  | 'sections'
  | 'sections___template'
  | 'sections___background_color'
  | 'sections___image'
  | 'sections___alt_text'
  | 'sections___image_as_background'
  | 'sections___sections'
  | 'sections___sections___template'
  | 'sections___sections___header'
  | 'sections___sections___text'
  | 'sections___sections___call_to_action___url'
  | 'sections___sections___call_to_action___text'
  | 'sections___text'
  | 'sections___fullwidth'
  | 'sections___caption'
  | 'sections___emphasized'
  | 'page_header'
  | 'seo___title'
  | 'seo___description'
  | 'seo___keywords'
  | 'seo___image'
  | 'seo___alt_text'
  | 'seo___pathname'
  | 'seo___article'
  | 'title'
  | 'titleTemplate'
  | 'description'
  | 'headline'
  | 'keywords'
  | 'author'
  | 'siteUrl'
  | 'siteLanguage'
  | 'siteLocale'
  | 'image'
  | 'twitter'
  | 'twitterUrl'
  | 'facebook'
  | 'facebookUrl'
  | 'instagramUrl'
  | 'youtubeUrl'
  | 'linkedinUrl'
  | 'githubUrl'

export type DataJsonGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<DataJsonEdge>
  nodes: Array<DataJson>
  pageInfo: PageInfo
  distinct: Array<Scalars['String']>
  max?: Maybe<Scalars['Float']>
  min?: Maybe<Scalars['Float']>
  sum?: Maybe<Scalars['Float']>
  group: Array<DataJsonGroupConnection>
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DataJsonGroupConnectionDistinctArgs = {
  field: DataJsonFieldsEnum
}

export type DataJsonGroupConnectionMaxArgs = {
  field: DataJsonFieldsEnum
}

export type DataJsonGroupConnectionMinArgs = {
  field: DataJsonFieldsEnum
}

export type DataJsonGroupConnectionSumArgs = {
  field: DataJsonFieldsEnum
}

export type DataJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DataJsonFieldsEnum
}

export type DataJsonSortInput = {
  fields?: InputMaybe<Array<InputMaybe<DataJsonFieldsEnum>>>
  order?: InputMaybe<Array<InputMaybe<SortOrderEnum>>>
}

export type SeoQueryVariables = Exact<{ [key: string]: never }>

export type SeoQuery = {
  site?: {
    buildTime?: any | null
    siteMetadata?: {
      siteUrl?: string | null
      title?: string | null
      description?: string | null
      keywords?: string | null
      image?: string | null
      headline?: string | null
      siteLanguage?: string | null
      siteLocale?: string | null
      author?: string | null
      twitter?: string | null
      facebook?: string | null
    } | null
  } | null
}

export type SiteQueryVariables = Exact<{ [key: string]: never }>

export type SiteQuery = {
  site?: {
    siteMetadata?: {
      title?: string | null
      twitterUrl?: string | null
      facebookUrl?: string | null
      instagramUrl?: string | null
      youtubeUrl?: string | null
      linkedinUrl?: string | null
      githubUrl?: string | null
    } | null
  } | null
}

export type Style_GuideQueryVariables = Exact<{ [key: string]: never }>

export type Style_GuideQuery = {
  file?: { childImageSharp?: { gatsbyImageData: any } | null } | null
  allMdx: {
    edges: Array<{
      node: {
        id: string
        excerpt: string
        frontmatter?: {
          title: string
          date: any
          slug: string
          keywords?: Array<string | null> | null
          featured_image?: { childImageSharp?: { gatsbyImageData: any } | null } | null
        } | null
      }
    }>
  }
}

export type Blog_ListQueryVariables = Exact<{
  skip: Scalars['Int']
  limit: Scalars['Int']
}>

export type Blog_ListQuery = {
  allMdx: {
    edges: Array<{
      node: {
        id: string
        excerpt: string
        frontmatter?: {
          title: string
          date: any
          slug: string
          keywords?: Array<string | null> | null
          featured_image?: { childImageSharp?: { gatsbyImageData: any } | null } | null
        } | null
      }
    }>
  }
}

export type PageQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>
}>

export type PageQuery = {
  pagesJson?: {
    id: string
    slug?: string | null
    page_header?: string | null
    seo?: {
      title?: string | null
      description?: string | null
      keywords?: Array<string | null> | null
      image?: string | null
      alt_text?: string | null
    } | null
    hero_image?: { image?: string | null; alt_text?: string | null } | null
    sections?: Array<{ template?: string | null; text?: string | null } | null> | null
  } | null
}

export type Blog_PostQueryVariables = Exact<{
  id?: InputMaybe<Scalars['String']>
}>

export type Blog_PostQuery = {
  mdx?: {
    id: string
    body: string
    frontmatter?: {
      title: string
      description?: string | null
      date: any
      keywords?: Array<string | null> | null
      slug: string
      seo?: {
        title?: string | null
        description?: string | null
        keywords?: Array<string | null> | null
        alt_text?: string | null
        image?: { publicURL?: string | null } | null
      } | null
      featured_image?: { childImageSharp?: { gatsbyImageData: any } | null } | null
    } | null
  } | null
}

export type All_ImagesQueryVariables = Exact<{ [key: string]: never }>

export type All_ImagesQuery = {
  allFile: {
    edges: Array<{
      node: { absolutePath: string; publicURL?: string | null; childImageSharp?: { gatsbyImageData: any } | null }
    }>
  }
}

export type GatsbyImageSharpFixedFragment = {
  base64?: string | null
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_TracedSvgFragment = {
  tracedSVG?: string | null
  width: number
  height: number
  src: string
  srcSet: string
}

export type GatsbyImageSharpFixed_WithWebpFragment = {
  base64?: string | null
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
}

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | null
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
}

export type GatsbyImageSharpFixed_NoBase64Fragment = { width: number; height: number; src: string; srcSet: string }

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = {
  width: number
  height: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
}

export type GatsbyImageSharpFluidFragment = {
  base64?: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = { maxHeight: number; maxWidth: number }

export type GatsbyImageSharpFluid_TracedSvgFragment = {
  tracedSVG?: string | null
  aspectRatio: number
  src: string
  srcSet: string
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebpFragment = {
  base64?: string | null
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
  sizes: string
}

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = {
  tracedSVG?: string | null
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
  sizes: string
}

export type GatsbyImageSharpFluid_NoBase64Fragment = { aspectRatio: number; src: string; srcSet: string; sizes: string }

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = {
  aspectRatio: number
  src: string
  srcSet: string
  srcWebp?: string | null
  srcSetWebp?: string | null
  sizes: string
}
