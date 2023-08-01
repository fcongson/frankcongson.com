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
  contentFilePath?: Maybe<Scalars['String']>
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
  devUrl?: Maybe<Scalars['String']>
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

export type Mdx = Node & {
  excerpt?: Maybe<Scalars['String']>
  tableOfContents?: Maybe<Scalars['JSON']>
  fields?: Maybe<Fields>
  body?: Maybe<Scalars['String']>
  frontmatter?: Maybe<MdxFrontmatter>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type MdxExcerptArgs = {
  pruneLength?: InputMaybe<Scalars['Int']>
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

export type MdxFrontmatter = Node & {
  title: Scalars['String']
  description?: Maybe<Scalars['String']>
  date: Scalars['Date']
  slug: Scalars['String']
  featured_image?: Maybe<File>
  alt_text?: Maybe<Scalars['String']>
  image_caption?: Maybe<Scalars['String']>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
  seo?: Maybe<Seo>
  published?: Maybe<Scalars['Boolean']>
  excerpt?: Maybe<Scalars['String']>
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
  devUrl?: Maybe<Scalars['String']>
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
  mdx?: Maybe<Mdx>
  allMdx: MdxConnection
  markdownRemark?: Maybe<MarkdownRemark>
  allMarkdownRemark: MarkdownRemarkConnection
  mdxFrontmatter?: Maybe<MdxFrontmatter>
  allMdxFrontmatter: MdxFrontmatterConnection
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
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
}

export type QueryMdxArgs = {
  excerpt?: InputMaybe<StringQueryOperatorInput>
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>
  fields?: InputMaybe<FieldsFilterInput>
  body?: InputMaybe<StringQueryOperatorInput>
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllMdxArgs = {
  filter?: InputMaybe<MdxFilterInput>
  sort?: InputMaybe<Array<InputMaybe<MdxSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<MarkdownRemarkSortInput>>>
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
  image_caption?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  seo?: InputMaybe<SeoFilterInput>
  published?: InputMaybe<BooleanQueryOperatorInput>
  excerpt?: InputMaybe<StringQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type QueryAllMdxFrontmatterArgs = {
  filter?: InputMaybe<MdxFrontmatterFilterInput>
  sort?: InputMaybe<Array<InputMaybe<MdxFrontmatterSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<PagesJsonSortInput>>>
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
  sort?: InputMaybe<Array<InputMaybe<ImagesJsonSortInput>>>
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
  devUrl?: InputMaybe<StringQueryOperatorInput>
}

export type QueryAllDataJsonArgs = {
  filter?: InputMaybe<DataJsonFilterInput>
  sort?: InputMaybe<Array<InputMaybe<DataJsonSortInput>>>
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
  contentFilePath?: InputMaybe<StringQueryOperatorInput>
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
  excerpt?: InputMaybe<StringQueryOperatorInput>
  tableOfContents?: InputMaybe<JsonQueryOperatorInput>
  fields?: InputMaybe<FieldsFilterInput>
  body?: InputMaybe<StringQueryOperatorInput>
  frontmatter?: InputMaybe<MdxFrontmatterFilterInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>
  ne?: InputMaybe<Scalars['JSON']>
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>
  regex?: InputMaybe<Scalars['JSON']>
  glob?: InputMaybe<Scalars['JSON']>
}

export type FieldsFilterInput = {
  slug?: InputMaybe<StringQueryOperatorInput>
}

export type MdxFrontmatterFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>
  description?: InputMaybe<StringQueryOperatorInput>
  date?: InputMaybe<DateQueryOperatorInput>
  slug?: InputMaybe<StringQueryOperatorInput>
  featured_image?: InputMaybe<FileFilterInput>
  alt_text?: InputMaybe<StringQueryOperatorInput>
  image_caption?: InputMaybe<StringQueryOperatorInput>
  keywords?: InputMaybe<StringQueryOperatorInput>
  seo?: InputMaybe<SeoFilterInput>
  published?: InputMaybe<BooleanQueryOperatorInput>
  excerpt?: InputMaybe<StringQueryOperatorInput>
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
  devUrl?: InputMaybe<StringQueryOperatorInput>
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
  field: FileFieldSelector
}

export type FileConnectionMaxArgs = {
  field: FileFieldSelector
}

export type FileConnectionMinArgs = {
  field: FileFieldSelector
}

export type FileConnectionSumArgs = {
  field: FileFieldSelector
}

export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: FileFieldSelector
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

export type FileFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>
  absolutePath?: InputMaybe<FieldSelectorEnum>
  relativePath?: InputMaybe<FieldSelectorEnum>
  extension?: InputMaybe<FieldSelectorEnum>
  size?: InputMaybe<FieldSelectorEnum>
  prettySize?: InputMaybe<FieldSelectorEnum>
  modifiedTime?: InputMaybe<FieldSelectorEnum>
  accessTime?: InputMaybe<FieldSelectorEnum>
  changeTime?: InputMaybe<FieldSelectorEnum>
  birthTime?: InputMaybe<FieldSelectorEnum>
  root?: InputMaybe<FieldSelectorEnum>
  dir?: InputMaybe<FieldSelectorEnum>
  base?: InputMaybe<FieldSelectorEnum>
  ext?: InputMaybe<FieldSelectorEnum>
  name?: InputMaybe<FieldSelectorEnum>
  relativeDirectory?: InputMaybe<FieldSelectorEnum>
  dev?: InputMaybe<FieldSelectorEnum>
  mode?: InputMaybe<FieldSelectorEnum>
  nlink?: InputMaybe<FieldSelectorEnum>
  uid?: InputMaybe<FieldSelectorEnum>
  gid?: InputMaybe<FieldSelectorEnum>
  rdev?: InputMaybe<FieldSelectorEnum>
  ino?: InputMaybe<FieldSelectorEnum>
  atimeMs?: InputMaybe<FieldSelectorEnum>
  mtimeMs?: InputMaybe<FieldSelectorEnum>
  ctimeMs?: InputMaybe<FieldSelectorEnum>
  atime?: InputMaybe<FieldSelectorEnum>
  mtime?: InputMaybe<FieldSelectorEnum>
  ctime?: InputMaybe<FieldSelectorEnum>
  birthtime?: InputMaybe<FieldSelectorEnum>
  birthtimeMs?: InputMaybe<FieldSelectorEnum>
  blksize?: InputMaybe<FieldSelectorEnum>
  blocks?: InputMaybe<FieldSelectorEnum>
  publicURL?: InputMaybe<FieldSelectorEnum>
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>
  childrenMdx?: InputMaybe<MdxFieldSelector>
  childMdx?: InputMaybe<MdxFieldSelector>
  childrenPagesJson?: InputMaybe<PagesJsonFieldSelector>
  childPagesJson?: InputMaybe<PagesJsonFieldSelector>
  childrenImagesJson?: InputMaybe<ImagesJsonFieldSelector>
  childImagesJson?: InputMaybe<ImagesJsonFieldSelector>
  childrenDataJson?: InputMaybe<DataJsonFieldSelector>
  childDataJson?: InputMaybe<DataJsonFieldSelector>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

export type FieldSelectorEnum = 'SELECT'

export type ImageSharpFieldSelector = {
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>
  original?: InputMaybe<ImageSharpOriginalFieldSelector>
  resize?: InputMaybe<ImageSharpResizeFieldSelector>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

export type ImageSharpFixedFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>
  tracedSVG?: InputMaybe<FieldSelectorEnum>
  aspectRatio?: InputMaybe<FieldSelectorEnum>
  width?: InputMaybe<FieldSelectorEnum>
  height?: InputMaybe<FieldSelectorEnum>
  src?: InputMaybe<FieldSelectorEnum>
  srcSet?: InputMaybe<FieldSelectorEnum>
  srcWebp?: InputMaybe<FieldSelectorEnum>
  srcSetWebp?: InputMaybe<FieldSelectorEnum>
  originalName?: InputMaybe<FieldSelectorEnum>
}

export type ImageSharpFluidFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>
  tracedSVG?: InputMaybe<FieldSelectorEnum>
  aspectRatio?: InputMaybe<FieldSelectorEnum>
  src?: InputMaybe<FieldSelectorEnum>
  srcSet?: InputMaybe<FieldSelectorEnum>
  srcWebp?: InputMaybe<FieldSelectorEnum>
  srcSetWebp?: InputMaybe<FieldSelectorEnum>
  sizes?: InputMaybe<FieldSelectorEnum>
  originalImg?: InputMaybe<FieldSelectorEnum>
  originalName?: InputMaybe<FieldSelectorEnum>
  presentationWidth?: InputMaybe<FieldSelectorEnum>
  presentationHeight?: InputMaybe<FieldSelectorEnum>
}

export type ImageSharpOriginalFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>
  height?: InputMaybe<FieldSelectorEnum>
  src?: InputMaybe<FieldSelectorEnum>
}

export type ImageSharpResizeFieldSelector = {
  src?: InputMaybe<FieldSelectorEnum>
  tracedSVG?: InputMaybe<FieldSelectorEnum>
  width?: InputMaybe<FieldSelectorEnum>
  height?: InputMaybe<FieldSelectorEnum>
  aspectRatio?: InputMaybe<FieldSelectorEnum>
  originalName?: InputMaybe<FieldSelectorEnum>
}

export type NodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>
  contentDigest?: InputMaybe<FieldSelectorEnum>
  description?: InputMaybe<FieldSelectorEnum>
  fieldOwners?: InputMaybe<FieldSelectorEnum>
  ignoreType?: InputMaybe<FieldSelectorEnum>
  mediaType?: InputMaybe<FieldSelectorEnum>
  owner?: InputMaybe<FieldSelectorEnum>
  type?: InputMaybe<FieldSelectorEnum>
  contentFilePath?: InputMaybe<FieldSelectorEnum>
}

export type MdxFieldSelector = {
  excerpt?: InputMaybe<FieldSelectorEnum>
  tableOfContents?: InputMaybe<FieldSelectorEnum>
  fields?: InputMaybe<FieldsFieldSelector>
  body?: InputMaybe<FieldSelectorEnum>
  frontmatter?: InputMaybe<MdxFrontmatterFieldSelector>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

export type FieldsFieldSelector = {
  slug?: InputMaybe<FieldSelectorEnum>
}

export type MdxFrontmatterFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>
  description?: InputMaybe<FieldSelectorEnum>
  date?: InputMaybe<FieldSelectorEnum>
  slug?: InputMaybe<FieldSelectorEnum>
  featured_image?: InputMaybe<FileFieldSelector>
  alt_text?: InputMaybe<FieldSelectorEnum>
  image_caption?: InputMaybe<FieldSelectorEnum>
  keywords?: InputMaybe<FieldSelectorEnum>
  seo?: InputMaybe<SeoFieldSelector>
  published?: InputMaybe<FieldSelectorEnum>
  excerpt?: InputMaybe<FieldSelectorEnum>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

export type SeoFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>
  description?: InputMaybe<FieldSelectorEnum>
  keywords?: InputMaybe<FieldSelectorEnum>
  image?: InputMaybe<FileFieldSelector>
  alt_text?: InputMaybe<FieldSelectorEnum>
}

export type PagesJsonFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
  hero_image?: InputMaybe<PagesJsonHero_ImageFieldSelector>
  page_header?: InputMaybe<FieldSelectorEnum>
  sections?: InputMaybe<PagesJsonSectionsFieldSelector>
  seo?: InputMaybe<PagesJsonSeoFieldSelector>
  slug?: InputMaybe<FieldSelectorEnum>
}

export type PagesJsonHero_ImageFieldSelector = {
  image?: InputMaybe<FieldSelectorEnum>
  alt_text?: InputMaybe<FieldSelectorEnum>
}

export type PagesJsonSectionsFieldSelector = {
  template?: InputMaybe<FieldSelectorEnum>
  text?: InputMaybe<FieldSelectorEnum>
}

export type PagesJsonSeoFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>
  description?: InputMaybe<FieldSelectorEnum>
  keywords?: InputMaybe<FieldSelectorEnum>
  image?: InputMaybe<FieldSelectorEnum>
  alt_text?: InputMaybe<FieldSelectorEnum>
}

export type ImagesJsonFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
  image?: InputMaybe<FieldSelectorEnum>
  alt_text?: InputMaybe<FieldSelectorEnum>
}

export type DataJsonFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
  hero_image?: InputMaybe<DataJsonHero_ImageFieldSelector>
  main_content?: InputMaybe<DataJsonMain_ContentFieldSelector>
  sections?: InputMaybe<DataJsonSectionsFieldSelector>
  page_header?: InputMaybe<FieldSelectorEnum>
  seo?: InputMaybe<DataJsonSeoFieldSelector>
  title?: InputMaybe<FieldSelectorEnum>
  titleTemplate?: InputMaybe<FieldSelectorEnum>
  description?: InputMaybe<FieldSelectorEnum>
  headline?: InputMaybe<FieldSelectorEnum>
  keywords?: InputMaybe<FieldSelectorEnum>
  author?: InputMaybe<FieldSelectorEnum>
  siteUrl?: InputMaybe<FieldSelectorEnum>
  siteLanguage?: InputMaybe<FieldSelectorEnum>
  siteLocale?: InputMaybe<FieldSelectorEnum>
  image?: InputMaybe<FieldSelectorEnum>
  twitter?: InputMaybe<FieldSelectorEnum>
  twitterUrl?: InputMaybe<FieldSelectorEnum>
  facebook?: InputMaybe<FieldSelectorEnum>
  facebookUrl?: InputMaybe<FieldSelectorEnum>
  instagramUrl?: InputMaybe<FieldSelectorEnum>
  youtubeUrl?: InputMaybe<FieldSelectorEnum>
  linkedinUrl?: InputMaybe<FieldSelectorEnum>
  githubUrl?: InputMaybe<FieldSelectorEnum>
  devUrl?: InputMaybe<FieldSelectorEnum>
}

export type DataJsonHero_ImageFieldSelector = {
  image?: InputMaybe<FieldSelectorEnum>
  alt_text?: InputMaybe<FieldSelectorEnum>
}

export type DataJsonMain_ContentFieldSelector = {
  header?: InputMaybe<FieldSelectorEnum>
  text?: InputMaybe<FieldSelectorEnum>
  image?: InputMaybe<FieldSelectorEnum>
  alt_text?: InputMaybe<FieldSelectorEnum>
}

export type DataJsonSectionsFieldSelector = {
  template?: InputMaybe<FieldSelectorEnum>
  background_color?: InputMaybe<FieldSelectorEnum>
  image?: InputMaybe<FieldSelectorEnum>
  alt_text?: InputMaybe<FieldSelectorEnum>
  image_as_background?: InputMaybe<FieldSelectorEnum>
  sections?: InputMaybe<DataJsonSectionsSectionsFieldSelector>
  text?: InputMaybe<FieldSelectorEnum>
  fullwidth?: InputMaybe<FieldSelectorEnum>
  caption?: InputMaybe<FieldSelectorEnum>
  emphasized?: InputMaybe<FieldSelectorEnum>
}

export type DataJsonSectionsSectionsFieldSelector = {
  template?: InputMaybe<FieldSelectorEnum>
  header?: InputMaybe<FieldSelectorEnum>
  text?: InputMaybe<FieldSelectorEnum>
  call_to_action?: InputMaybe<DataJsonSectionsSectionsCall_To_ActionFieldSelector>
}

export type DataJsonSectionsSectionsCall_To_ActionFieldSelector = {
  url?: InputMaybe<FieldSelectorEnum>
  text?: InputMaybe<FieldSelectorEnum>
}

export type DataJsonSeoFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>
  description?: InputMaybe<FieldSelectorEnum>
  keywords?: InputMaybe<FieldSelectorEnum>
  image?: InputMaybe<FieldSelectorEnum>
  alt_text?: InputMaybe<FieldSelectorEnum>
  pathname?: InputMaybe<FieldSelectorEnum>
  article?: InputMaybe<FieldSelectorEnum>
}

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
  field: FileFieldSelector
}

export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector
}

export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: FileFieldSelector
}

export type FileSortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>
  absolutePath?: InputMaybe<SortOrderEnum>
  relativePath?: InputMaybe<SortOrderEnum>
  extension?: InputMaybe<SortOrderEnum>
  size?: InputMaybe<SortOrderEnum>
  prettySize?: InputMaybe<SortOrderEnum>
  modifiedTime?: InputMaybe<SortOrderEnum>
  accessTime?: InputMaybe<SortOrderEnum>
  changeTime?: InputMaybe<SortOrderEnum>
  birthTime?: InputMaybe<SortOrderEnum>
  root?: InputMaybe<SortOrderEnum>
  dir?: InputMaybe<SortOrderEnum>
  base?: InputMaybe<SortOrderEnum>
  ext?: InputMaybe<SortOrderEnum>
  name?: InputMaybe<SortOrderEnum>
  relativeDirectory?: InputMaybe<SortOrderEnum>
  dev?: InputMaybe<SortOrderEnum>
  mode?: InputMaybe<SortOrderEnum>
  nlink?: InputMaybe<SortOrderEnum>
  uid?: InputMaybe<SortOrderEnum>
  gid?: InputMaybe<SortOrderEnum>
  rdev?: InputMaybe<SortOrderEnum>
  ino?: InputMaybe<SortOrderEnum>
  atimeMs?: InputMaybe<SortOrderEnum>
  mtimeMs?: InputMaybe<SortOrderEnum>
  ctimeMs?: InputMaybe<SortOrderEnum>
  atime?: InputMaybe<SortOrderEnum>
  mtime?: InputMaybe<SortOrderEnum>
  ctime?: InputMaybe<SortOrderEnum>
  birthtime?: InputMaybe<SortOrderEnum>
  birthtimeMs?: InputMaybe<SortOrderEnum>
  blksize?: InputMaybe<SortOrderEnum>
  blocks?: InputMaybe<SortOrderEnum>
  publicURL?: InputMaybe<SortOrderEnum>
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>
  childImageSharp?: InputMaybe<ImageSharpSortInput>
  childrenMdx?: InputMaybe<MdxSortInput>
  childMdx?: InputMaybe<MdxSortInput>
  childrenPagesJson?: InputMaybe<PagesJsonSortInput>
  childPagesJson?: InputMaybe<PagesJsonSortInput>
  childrenImagesJson?: InputMaybe<ImagesJsonSortInput>
  childImagesJson?: InputMaybe<ImagesJsonSortInput>
  childrenDataJson?: InputMaybe<DataJsonSortInput>
  childDataJson?: InputMaybe<DataJsonSortInput>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
}

export type SortOrderEnum = 'ASC' | 'DESC'

export type ImageSharpSortInput = {
  fixed?: InputMaybe<ImageSharpFixedSortInput>
  fluid?: InputMaybe<ImageSharpFluidSortInput>
  gatsbyImageData?: InputMaybe<SortOrderEnum>
  original?: InputMaybe<ImageSharpOriginalSortInput>
  resize?: InputMaybe<ImageSharpResizeSortInput>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
}

export type ImageSharpFixedSortInput = {
  base64?: InputMaybe<SortOrderEnum>
  tracedSVG?: InputMaybe<SortOrderEnum>
  aspectRatio?: InputMaybe<SortOrderEnum>
  width?: InputMaybe<SortOrderEnum>
  height?: InputMaybe<SortOrderEnum>
  src?: InputMaybe<SortOrderEnum>
  srcSet?: InputMaybe<SortOrderEnum>
  srcWebp?: InputMaybe<SortOrderEnum>
  srcSetWebp?: InputMaybe<SortOrderEnum>
  originalName?: InputMaybe<SortOrderEnum>
}

export type ImageSharpFluidSortInput = {
  base64?: InputMaybe<SortOrderEnum>
  tracedSVG?: InputMaybe<SortOrderEnum>
  aspectRatio?: InputMaybe<SortOrderEnum>
  src?: InputMaybe<SortOrderEnum>
  srcSet?: InputMaybe<SortOrderEnum>
  srcWebp?: InputMaybe<SortOrderEnum>
  srcSetWebp?: InputMaybe<SortOrderEnum>
  sizes?: InputMaybe<SortOrderEnum>
  originalImg?: InputMaybe<SortOrderEnum>
  originalName?: InputMaybe<SortOrderEnum>
  presentationWidth?: InputMaybe<SortOrderEnum>
  presentationHeight?: InputMaybe<SortOrderEnum>
}

export type ImageSharpOriginalSortInput = {
  width?: InputMaybe<SortOrderEnum>
  height?: InputMaybe<SortOrderEnum>
  src?: InputMaybe<SortOrderEnum>
}

export type ImageSharpResizeSortInput = {
  src?: InputMaybe<SortOrderEnum>
  tracedSVG?: InputMaybe<SortOrderEnum>
  width?: InputMaybe<SortOrderEnum>
  height?: InputMaybe<SortOrderEnum>
  aspectRatio?: InputMaybe<SortOrderEnum>
  originalName?: InputMaybe<SortOrderEnum>
}

export type NodeSortInput = {
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
}

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>
  contentDigest?: InputMaybe<SortOrderEnum>
  description?: InputMaybe<SortOrderEnum>
  fieldOwners?: InputMaybe<SortOrderEnum>
  ignoreType?: InputMaybe<SortOrderEnum>
  mediaType?: InputMaybe<SortOrderEnum>
  owner?: InputMaybe<SortOrderEnum>
  type?: InputMaybe<SortOrderEnum>
  contentFilePath?: InputMaybe<SortOrderEnum>
}

export type MdxSortInput = {
  excerpt?: InputMaybe<SortOrderEnum>
  tableOfContents?: InputMaybe<SortOrderEnum>
  fields?: InputMaybe<FieldsSortInput>
  body?: InputMaybe<SortOrderEnum>
  frontmatter?: InputMaybe<MdxFrontmatterSortInput>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
}

export type FieldsSortInput = {
  slug?: InputMaybe<SortOrderEnum>
}

export type MdxFrontmatterSortInput = {
  title?: InputMaybe<SortOrderEnum>
  description?: InputMaybe<SortOrderEnum>
  date?: InputMaybe<SortOrderEnum>
  slug?: InputMaybe<SortOrderEnum>
  featured_image?: InputMaybe<FileSortInput>
  alt_text?: InputMaybe<SortOrderEnum>
  image_caption?: InputMaybe<SortOrderEnum>
  keywords?: InputMaybe<SortOrderEnum>
  seo?: InputMaybe<SeoSortInput>
  published?: InputMaybe<SortOrderEnum>
  excerpt?: InputMaybe<SortOrderEnum>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
}

export type SeoSortInput = {
  title?: InputMaybe<SortOrderEnum>
  description?: InputMaybe<SortOrderEnum>
  keywords?: InputMaybe<SortOrderEnum>
  image?: InputMaybe<FileSortInput>
  alt_text?: InputMaybe<SortOrderEnum>
}

export type PagesJsonSortInput = {
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
  hero_image?: InputMaybe<PagesJsonHero_ImageSortInput>
  page_header?: InputMaybe<SortOrderEnum>
  sections?: InputMaybe<PagesJsonSectionsSortInput>
  seo?: InputMaybe<PagesJsonSeoSortInput>
  slug?: InputMaybe<SortOrderEnum>
}

export type PagesJsonHero_ImageSortInput = {
  image?: InputMaybe<SortOrderEnum>
  alt_text?: InputMaybe<SortOrderEnum>
}

export type PagesJsonSectionsSortInput = {
  template?: InputMaybe<SortOrderEnum>
  text?: InputMaybe<SortOrderEnum>
}

export type PagesJsonSeoSortInput = {
  title?: InputMaybe<SortOrderEnum>
  description?: InputMaybe<SortOrderEnum>
  keywords?: InputMaybe<SortOrderEnum>
  image?: InputMaybe<SortOrderEnum>
  alt_text?: InputMaybe<SortOrderEnum>
}

export type ImagesJsonSortInput = {
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
  image?: InputMaybe<SortOrderEnum>
  alt_text?: InputMaybe<SortOrderEnum>
}

export type DataJsonSortInput = {
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
  hero_image?: InputMaybe<DataJsonHero_ImageSortInput>
  main_content?: InputMaybe<DataJsonMain_ContentSortInput>
  sections?: InputMaybe<DataJsonSectionsSortInput>
  page_header?: InputMaybe<SortOrderEnum>
  seo?: InputMaybe<DataJsonSeoSortInput>
  title?: InputMaybe<SortOrderEnum>
  titleTemplate?: InputMaybe<SortOrderEnum>
  description?: InputMaybe<SortOrderEnum>
  headline?: InputMaybe<SortOrderEnum>
  keywords?: InputMaybe<SortOrderEnum>
  author?: InputMaybe<SortOrderEnum>
  siteUrl?: InputMaybe<SortOrderEnum>
  siteLanguage?: InputMaybe<SortOrderEnum>
  siteLocale?: InputMaybe<SortOrderEnum>
  image?: InputMaybe<SortOrderEnum>
  twitter?: InputMaybe<SortOrderEnum>
  twitterUrl?: InputMaybe<SortOrderEnum>
  facebook?: InputMaybe<SortOrderEnum>
  facebookUrl?: InputMaybe<SortOrderEnum>
  instagramUrl?: InputMaybe<SortOrderEnum>
  youtubeUrl?: InputMaybe<SortOrderEnum>
  linkedinUrl?: InputMaybe<SortOrderEnum>
  githubUrl?: InputMaybe<SortOrderEnum>
  devUrl?: InputMaybe<SortOrderEnum>
}

export type DataJsonHero_ImageSortInput = {
  image?: InputMaybe<SortOrderEnum>
  alt_text?: InputMaybe<SortOrderEnum>
}

export type DataJsonMain_ContentSortInput = {
  header?: InputMaybe<SortOrderEnum>
  text?: InputMaybe<SortOrderEnum>
  image?: InputMaybe<SortOrderEnum>
  alt_text?: InputMaybe<SortOrderEnum>
}

export type DataJsonSectionsSortInput = {
  template?: InputMaybe<SortOrderEnum>
  background_color?: InputMaybe<SortOrderEnum>
  image?: InputMaybe<SortOrderEnum>
  alt_text?: InputMaybe<SortOrderEnum>
  image_as_background?: InputMaybe<SortOrderEnum>
  sections?: InputMaybe<DataJsonSectionsSectionsSortInput>
  text?: InputMaybe<SortOrderEnum>
  fullwidth?: InputMaybe<SortOrderEnum>
  caption?: InputMaybe<SortOrderEnum>
  emphasized?: InputMaybe<SortOrderEnum>
}

export type DataJsonSectionsSectionsSortInput = {
  template?: InputMaybe<SortOrderEnum>
  header?: InputMaybe<SortOrderEnum>
  text?: InputMaybe<SortOrderEnum>
  call_to_action?: InputMaybe<DataJsonSectionsSectionsCall_To_ActionSortInput>
}

export type DataJsonSectionsSectionsCall_To_ActionSortInput = {
  url?: InputMaybe<SortOrderEnum>
  text?: InputMaybe<SortOrderEnum>
}

export type DataJsonSeoSortInput = {
  title?: InputMaybe<SortOrderEnum>
  description?: InputMaybe<SortOrderEnum>
  keywords?: InputMaybe<SortOrderEnum>
  image?: InputMaybe<SortOrderEnum>
  alt_text?: InputMaybe<SortOrderEnum>
  pathname?: InputMaybe<SortOrderEnum>
  article?: InputMaybe<SortOrderEnum>
}

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
  field: DirectoryFieldSelector
}

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DirectoryFieldSelector
}

export type DirectoryEdge = {
  next?: Maybe<Directory>
  node: Directory
  previous?: Maybe<Directory>
}

export type DirectoryFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>
  absolutePath?: InputMaybe<FieldSelectorEnum>
  relativePath?: InputMaybe<FieldSelectorEnum>
  extension?: InputMaybe<FieldSelectorEnum>
  size?: InputMaybe<FieldSelectorEnum>
  prettySize?: InputMaybe<FieldSelectorEnum>
  modifiedTime?: InputMaybe<FieldSelectorEnum>
  accessTime?: InputMaybe<FieldSelectorEnum>
  changeTime?: InputMaybe<FieldSelectorEnum>
  birthTime?: InputMaybe<FieldSelectorEnum>
  root?: InputMaybe<FieldSelectorEnum>
  dir?: InputMaybe<FieldSelectorEnum>
  base?: InputMaybe<FieldSelectorEnum>
  ext?: InputMaybe<FieldSelectorEnum>
  name?: InputMaybe<FieldSelectorEnum>
  relativeDirectory?: InputMaybe<FieldSelectorEnum>
  dev?: InputMaybe<FieldSelectorEnum>
  mode?: InputMaybe<FieldSelectorEnum>
  nlink?: InputMaybe<FieldSelectorEnum>
  uid?: InputMaybe<FieldSelectorEnum>
  gid?: InputMaybe<FieldSelectorEnum>
  rdev?: InputMaybe<FieldSelectorEnum>
  ino?: InputMaybe<FieldSelectorEnum>
  atimeMs?: InputMaybe<FieldSelectorEnum>
  mtimeMs?: InputMaybe<FieldSelectorEnum>
  ctimeMs?: InputMaybe<FieldSelectorEnum>
  atime?: InputMaybe<FieldSelectorEnum>
  mtime?: InputMaybe<FieldSelectorEnum>
  ctime?: InputMaybe<FieldSelectorEnum>
  birthtime?: InputMaybe<FieldSelectorEnum>
  birthtimeMs?: InputMaybe<FieldSelectorEnum>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

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
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector
}

export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DirectoryFieldSelector
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
  sourceInstanceName?: InputMaybe<SortOrderEnum>
  absolutePath?: InputMaybe<SortOrderEnum>
  relativePath?: InputMaybe<SortOrderEnum>
  extension?: InputMaybe<SortOrderEnum>
  size?: InputMaybe<SortOrderEnum>
  prettySize?: InputMaybe<SortOrderEnum>
  modifiedTime?: InputMaybe<SortOrderEnum>
  accessTime?: InputMaybe<SortOrderEnum>
  changeTime?: InputMaybe<SortOrderEnum>
  birthTime?: InputMaybe<SortOrderEnum>
  root?: InputMaybe<SortOrderEnum>
  dir?: InputMaybe<SortOrderEnum>
  base?: InputMaybe<SortOrderEnum>
  ext?: InputMaybe<SortOrderEnum>
  name?: InputMaybe<SortOrderEnum>
  relativeDirectory?: InputMaybe<SortOrderEnum>
  dev?: InputMaybe<SortOrderEnum>
  mode?: InputMaybe<SortOrderEnum>
  nlink?: InputMaybe<SortOrderEnum>
  uid?: InputMaybe<SortOrderEnum>
  gid?: InputMaybe<SortOrderEnum>
  rdev?: InputMaybe<SortOrderEnum>
  ino?: InputMaybe<SortOrderEnum>
  atimeMs?: InputMaybe<SortOrderEnum>
  mtimeMs?: InputMaybe<SortOrderEnum>
  ctimeMs?: InputMaybe<SortOrderEnum>
  atime?: InputMaybe<SortOrderEnum>
  mtime?: InputMaybe<SortOrderEnum>
  ctime?: InputMaybe<SortOrderEnum>
  birthtime?: InputMaybe<SortOrderEnum>
  birthtimeMs?: InputMaybe<SortOrderEnum>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
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
  devUrl?: InputMaybe<StringQueryOperatorInput>
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
  field: SiteFieldSelector
}

export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionMinArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionSumArgs = {
  field: SiteFieldSelector
}

export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFieldSelector
}

export type SiteEdge = {
  next?: Maybe<Site>
  node: Site
  previous?: Maybe<Site>
}

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>
  polyfill?: InputMaybe<FieldSelectorEnum>
  pathPrefix?: InputMaybe<FieldSelectorEnum>
  jsxRuntime?: InputMaybe<FieldSelectorEnum>
  trailingSlash?: InputMaybe<FieldSelectorEnum>
  graphqlTypegen?: InputMaybe<FieldSelectorEnum>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

export type SiteSiteMetadataFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>
  description?: InputMaybe<FieldSelectorEnum>
  titleTemplate?: InputMaybe<FieldSelectorEnum>
  headline?: InputMaybe<FieldSelectorEnum>
  keywords?: InputMaybe<FieldSelectorEnum>
  author?: InputMaybe<FieldSelectorEnum>
  siteUrl?: InputMaybe<FieldSelectorEnum>
  siteLanguage?: InputMaybe<FieldSelectorEnum>
  siteLocale?: InputMaybe<FieldSelectorEnum>
  image?: InputMaybe<FieldSelectorEnum>
  twitter?: InputMaybe<FieldSelectorEnum>
  twitterUrl?: InputMaybe<FieldSelectorEnum>
  facebook?: InputMaybe<FieldSelectorEnum>
  facebookUrl?: InputMaybe<FieldSelectorEnum>
  instagramUrl?: InputMaybe<FieldSelectorEnum>
  youtubeUrl?: InputMaybe<FieldSelectorEnum>
  linkedinUrl?: InputMaybe<FieldSelectorEnum>
  githubUrl?: InputMaybe<FieldSelectorEnum>
  devUrl?: InputMaybe<FieldSelectorEnum>
}

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
  field: SiteFieldSelector
}

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector
}

export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFieldSelector
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
  buildTime?: InputMaybe<SortOrderEnum>
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>
  polyfill?: InputMaybe<SortOrderEnum>
  pathPrefix?: InputMaybe<SortOrderEnum>
  jsxRuntime?: InputMaybe<SortOrderEnum>
  trailingSlash?: InputMaybe<SortOrderEnum>
  graphqlTypegen?: InputMaybe<SortOrderEnum>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
}

export type SiteSiteMetadataSortInput = {
  title?: InputMaybe<SortOrderEnum>
  description?: InputMaybe<SortOrderEnum>
  titleTemplate?: InputMaybe<SortOrderEnum>
  headline?: InputMaybe<SortOrderEnum>
  keywords?: InputMaybe<SortOrderEnum>
  author?: InputMaybe<SortOrderEnum>
  siteUrl?: InputMaybe<SortOrderEnum>
  siteLanguage?: InputMaybe<SortOrderEnum>
  siteLocale?: InputMaybe<SortOrderEnum>
  image?: InputMaybe<SortOrderEnum>
  twitter?: InputMaybe<SortOrderEnum>
  twitterUrl?: InputMaybe<SortOrderEnum>
  facebook?: InputMaybe<SortOrderEnum>
  facebookUrl?: InputMaybe<SortOrderEnum>
  instagramUrl?: InputMaybe<SortOrderEnum>
  youtubeUrl?: InputMaybe<SortOrderEnum>
  linkedinUrl?: InputMaybe<SortOrderEnum>
  githubUrl?: InputMaybe<SortOrderEnum>
  devUrl?: InputMaybe<SortOrderEnum>
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
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFunctionFieldSelector
}

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>
  node: SiteFunction
  previous?: Maybe<SiteFunction>
}

export type SiteFunctionFieldSelector = {
  functionRoute?: InputMaybe<FieldSelectorEnum>
  pluginName?: InputMaybe<FieldSelectorEnum>
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>
  matchPath?: InputMaybe<FieldSelectorEnum>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

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
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector
}

export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteFunctionFieldSelector
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
  functionRoute?: InputMaybe<SortOrderEnum>
  pluginName?: InputMaybe<SortOrderEnum>
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>
  matchPath?: InputMaybe<SortOrderEnum>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
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
  field: SitePageFieldSelector
}

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector
}

export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePageFieldSelector
}

export type SitePageEdge = {
  next?: Maybe<SitePage>
  node: SitePage
  previous?: Maybe<SitePage>
}

export type SitePageFieldSelector = {
  path?: InputMaybe<FieldSelectorEnum>
  component?: InputMaybe<FieldSelectorEnum>
  internalComponentName?: InputMaybe<FieldSelectorEnum>
  componentChunkName?: InputMaybe<FieldSelectorEnum>
  matchPath?: InputMaybe<FieldSelectorEnum>
  pageContext?: InputMaybe<FieldSelectorEnum>
  pluginCreator?: InputMaybe<SitePluginFieldSelector>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

export type SitePluginFieldSelector = {
  resolve?: InputMaybe<FieldSelectorEnum>
  name?: InputMaybe<FieldSelectorEnum>
  version?: InputMaybe<FieldSelectorEnum>
  nodeAPIs?: InputMaybe<FieldSelectorEnum>
  browserAPIs?: InputMaybe<FieldSelectorEnum>
  ssrAPIs?: InputMaybe<FieldSelectorEnum>
  pluginFilepath?: InputMaybe<FieldSelectorEnum>
  pluginOptions?: InputMaybe<FieldSelectorEnum>
  packageJson?: InputMaybe<FieldSelectorEnum>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

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
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector
}

export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePageFieldSelector
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
  path?: InputMaybe<SortOrderEnum>
  component?: InputMaybe<SortOrderEnum>
  internalComponentName?: InputMaybe<SortOrderEnum>
  componentChunkName?: InputMaybe<SortOrderEnum>
  matchPath?: InputMaybe<SortOrderEnum>
  pageContext?: InputMaybe<SortOrderEnum>
  pluginCreator?: InputMaybe<SitePluginSortInput>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
}

export type SitePluginSortInput = {
  resolve?: InputMaybe<SortOrderEnum>
  name?: InputMaybe<SortOrderEnum>
  version?: InputMaybe<SortOrderEnum>
  nodeAPIs?: InputMaybe<SortOrderEnum>
  browserAPIs?: InputMaybe<SortOrderEnum>
  ssrAPIs?: InputMaybe<SortOrderEnum>
  pluginFilepath?: InputMaybe<SortOrderEnum>
  pluginOptions?: InputMaybe<SortOrderEnum>
  packageJson?: InputMaybe<SortOrderEnum>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
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
  field: SitePluginFieldSelector
}

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePluginFieldSelector
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

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
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector
}

export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SitePluginFieldSelector
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
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>
  id?: InputMaybe<FieldSelectorEnum>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

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
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: SiteBuildMetadataFieldSelector
}

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>
  id?: InputMaybe<StringQueryOperatorInput>
  parent?: InputMaybe<NodeFilterInput>
  children?: InputMaybe<NodeFilterListInput>
  internal?: InputMaybe<InternalFilterInput>
}

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>
  id?: InputMaybe<SortOrderEnum>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
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
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImageSharpFieldSelector
}

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>
  node: ImageSharp
  previous?: Maybe<ImageSharp>
}

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
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector
}

export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImageSharpFieldSelector
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
  field: MdxFieldSelector
}

export type MdxConnectionMaxArgs = {
  field: MdxFieldSelector
}

export type MdxConnectionMinArgs = {
  field: MdxFieldSelector
}

export type MdxConnectionSumArgs = {
  field: MdxFieldSelector
}

export type MdxConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MdxFieldSelector
}

export type MdxEdge = {
  next?: Maybe<Mdx>
  node: Mdx
  previous?: Maybe<Mdx>
}

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
  field: MdxFieldSelector
}

export type MdxGroupConnectionMaxArgs = {
  field: MdxFieldSelector
}

export type MdxGroupConnectionMinArgs = {
  field: MdxFieldSelector
}

export type MdxGroupConnectionSumArgs = {
  field: MdxFieldSelector
}

export type MdxGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MdxFieldSelector
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
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkEdge = {
  next?: Maybe<MarkdownRemark>
  node: MarkdownRemark
  previous?: Maybe<MarkdownRemark>
}

export type MarkdownRemarkFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>
  html?: InputMaybe<FieldSelectorEnum>
  htmlAst?: InputMaybe<FieldSelectorEnum>
  excerpt?: InputMaybe<FieldSelectorEnum>
  excerptAst?: InputMaybe<FieldSelectorEnum>
  headings?: InputMaybe<MarkdownHeadingFieldSelector>
  timeToRead?: InputMaybe<FieldSelectorEnum>
  tableOfContents?: InputMaybe<FieldSelectorEnum>
  wordCount?: InputMaybe<MarkdownWordCountFieldSelector>
  parent?: InputMaybe<NodeFieldSelector>
  children?: InputMaybe<NodeFieldSelector>
  internal?: InputMaybe<InternalFieldSelector>
}

export type MarkdownHeadingFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>
  value?: InputMaybe<FieldSelectorEnum>
  depth?: InputMaybe<FieldSelectorEnum>
}

export type MarkdownWordCountFieldSelector = {
  paragraphs?: InputMaybe<FieldSelectorEnum>
  sentences?: InputMaybe<FieldSelectorEnum>
  words?: InputMaybe<FieldSelectorEnum>
}

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
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionMaxArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionMinArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionSumArgs = {
  field: MarkdownRemarkFieldSelector
}

export type MarkdownRemarkGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MarkdownRemarkFieldSelector
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
  id?: InputMaybe<SortOrderEnum>
  html?: InputMaybe<SortOrderEnum>
  htmlAst?: InputMaybe<SortOrderEnum>
  excerpt?: InputMaybe<SortOrderEnum>
  excerptAst?: InputMaybe<SortOrderEnum>
  headings?: InputMaybe<MarkdownHeadingSortInput>
  timeToRead?: InputMaybe<SortOrderEnum>
  tableOfContents?: InputMaybe<SortOrderEnum>
  wordCount?: InputMaybe<MarkdownWordCountSortInput>
  parent?: InputMaybe<NodeSortInput>
  children?: InputMaybe<NodeSortInput>
  internal?: InputMaybe<InternalSortInput>
}

export type MarkdownHeadingSortInput = {
  id?: InputMaybe<SortOrderEnum>
  value?: InputMaybe<SortOrderEnum>
  depth?: InputMaybe<SortOrderEnum>
}

export type MarkdownWordCountSortInput = {
  paragraphs?: InputMaybe<SortOrderEnum>
  sentences?: InputMaybe<SortOrderEnum>
  words?: InputMaybe<SortOrderEnum>
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
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterConnectionMaxArgs = {
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterConnectionMinArgs = {
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterConnectionSumArgs = {
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterEdge = {
  next?: Maybe<MdxFrontmatter>
  node: MdxFrontmatter
  previous?: Maybe<MdxFrontmatter>
}

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
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterGroupConnectionMaxArgs = {
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterGroupConnectionMinArgs = {
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterGroupConnectionSumArgs = {
  field: MdxFrontmatterFieldSelector
}

export type MdxFrontmatterGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: MdxFrontmatterFieldSelector
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
  field: PagesJsonFieldSelector
}

export type PagesJsonConnectionMaxArgs = {
  field: PagesJsonFieldSelector
}

export type PagesJsonConnectionMinArgs = {
  field: PagesJsonFieldSelector
}

export type PagesJsonConnectionSumArgs = {
  field: PagesJsonFieldSelector
}

export type PagesJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: PagesJsonFieldSelector
}

export type PagesJsonEdge = {
  next?: Maybe<PagesJson>
  node: PagesJson
  previous?: Maybe<PagesJson>
}

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
  field: PagesJsonFieldSelector
}

export type PagesJsonGroupConnectionMaxArgs = {
  field: PagesJsonFieldSelector
}

export type PagesJsonGroupConnectionMinArgs = {
  field: PagesJsonFieldSelector
}

export type PagesJsonGroupConnectionSumArgs = {
  field: PagesJsonFieldSelector
}

export type PagesJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: PagesJsonFieldSelector
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
  field: ImagesJsonFieldSelector
}

export type ImagesJsonConnectionMaxArgs = {
  field: ImagesJsonFieldSelector
}

export type ImagesJsonConnectionMinArgs = {
  field: ImagesJsonFieldSelector
}

export type ImagesJsonConnectionSumArgs = {
  field: ImagesJsonFieldSelector
}

export type ImagesJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImagesJsonFieldSelector
}

export type ImagesJsonEdge = {
  next?: Maybe<ImagesJson>
  node: ImagesJson
  previous?: Maybe<ImagesJson>
}

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
  field: ImagesJsonFieldSelector
}

export type ImagesJsonGroupConnectionMaxArgs = {
  field: ImagesJsonFieldSelector
}

export type ImagesJsonGroupConnectionMinArgs = {
  field: ImagesJsonFieldSelector
}

export type ImagesJsonGroupConnectionSumArgs = {
  field: ImagesJsonFieldSelector
}

export type ImagesJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: ImagesJsonFieldSelector
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
  field: DataJsonFieldSelector
}

export type DataJsonConnectionMaxArgs = {
  field: DataJsonFieldSelector
}

export type DataJsonConnectionMinArgs = {
  field: DataJsonFieldSelector
}

export type DataJsonConnectionSumArgs = {
  field: DataJsonFieldSelector
}

export type DataJsonConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DataJsonFieldSelector
}

export type DataJsonEdge = {
  next?: Maybe<DataJson>
  node: DataJson
  previous?: Maybe<DataJson>
}

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
  field: DataJsonFieldSelector
}

export type DataJsonGroupConnectionMaxArgs = {
  field: DataJsonFieldSelector
}

export type DataJsonGroupConnectionMinArgs = {
  field: DataJsonFieldSelector
}

export type DataJsonGroupConnectionSumArgs = {
  field: DataJsonFieldSelector
}

export type DataJsonGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>
  limit?: InputMaybe<Scalars['Int']>
  field: DataJsonFieldSelector
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
      devUrl?: string | null
    } | null
  } | null
}

export type Style_GuideQueryVariables = Exact<{ [key: string]: never }>

export type Style_GuideQuery = {
  file?: { childImageSharp?: { gatsbyImageData: any } | null } | null
  allMdx: {
    nodes: Array<{
      id: string
      frontmatter?: {
        title: string
        date: any
        slug: string
        keywords?: Array<string | null> | null
        alt_text?: string | null
        excerpt?: string | null
        featured_image?: { childImageSharp?: { gatsbyImageData: any } | null } | null
      } | null
    }>
  }
}

export type Blog_ListQueryVariables = Exact<{
  skip: Scalars['Int']
  limit: Scalars['Int']
}>

export type Blog_ListQuery = {
  allMdx: {
    nodes: Array<{
      id: string
      frontmatter?: {
        title: string
        date: any
        slug: string
        keywords?: Array<string | null> | null
        alt_text?: string | null
        excerpt?: string | null
        featured_image?: { childImageSharp?: { gatsbyImageData: any } | null } | null
      } | null
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
    body?: string | null
    frontmatter?: {
      title: string
      description?: string | null
      date: any
      keywords?: Array<string | null> | null
      slug: string
      alt_text?: string | null
      image_caption?: string | null
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
      node: {
        absolutePath: string
        publicURL?: string | null
        extension: string
        childImageSharp?: { gatsbyImageData: any } | null
      }
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
