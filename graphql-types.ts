export type Maybe<T> = T | null
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
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type FileModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type FileCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
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
  blksize?: Maybe<Scalars['Int']>
  blocks?: Maybe<Scalars['Int']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type DirectoryModifiedTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAccessTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryChangeTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryBirthTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryAtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryMtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type DirectoryCtimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
}

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>
  siteMetadata?: Maybe<SiteSiteMetadata>
  port?: Maybe<Scalars['Int']>
  host?: Maybe<Scalars['String']>
  polyfill?: Maybe<Scalars['Boolean']>
  pathPrefix?: Maybe<Scalars['String']>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type SiteBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
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
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>
  context?: Maybe<SitePageContext>
  pluginCreator?: Maybe<SitePlugin>
  pluginCreatorId?: Maybe<Scalars['String']>
}

export type SitePageContext = {
  id?: Maybe<Scalars['String']>
  limit?: Maybe<Scalars['Int']>
  skip?: Maybe<Scalars['Int']>
  numPages?: Maybe<Scalars['Int']>
  currentPage?: Maybe<Scalars['Int']>
}

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
  opacity?: Maybe<Scalars['Int']>
}

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY'

export type Potrace = {
  turnPolicy?: Maybe<PotraceTurnPolicy>
  turdSize?: Maybe<Scalars['Float']>
  alphaMax?: Maybe<Scalars['Float']>
  optCurve?: Maybe<Scalars['Boolean']>
  optTolerance?: Maybe<Scalars['Float']>
  threshold?: Maybe<Scalars['Int']>
  blackOnWhite?: Maybe<Scalars['Boolean']>
  color?: Maybe<Scalars['String']>
  background?: Maybe<Scalars['String']>
}

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>
  fluid?: Maybe<ImageSharpFluid>
  gatsbyImageData: Scalars['JSON']
  original?: Maybe<ImageSharpOriginal>
  resize?: Maybe<ImageSharpResize>
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
}

export type ImageSharpFixedArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
}

export type ImageSharpFluidArgs = {
  maxWidth?: Maybe<Scalars['Int']>
  maxHeight?: Maybe<Scalars['Int']>
  base64Width?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  duotone?: Maybe<DuotoneGradient>
  traceSVG?: Maybe<Potrace>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  toFormat?: Maybe<ImageFormat>
  toFormatBase64?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  sizes?: Maybe<Scalars['String']>
  srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type ImageSharpGatsbyImageDataArgs = {
  layout?: Maybe<ImageLayout>
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  aspectRatio?: Maybe<Scalars['Float']>
  placeholder?: Maybe<ImagePlaceholder>
  blurredOptions?: Maybe<BlurredOptions>
  tracedSVGOptions?: Maybe<Potrace>
  formats?: Maybe<Array<Maybe<ImageFormat>>>
  outputPixelDensities?: Maybe<Array<Maybe<Scalars['Float']>>>
  breakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>
  sizes?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  jpgOptions?: Maybe<JpgOptions>
  pngOptions?: Maybe<PngOptions>
  webpOptions?: Maybe<WebPOptions>
  avifOptions?: Maybe<AvifOptions>
  transformOptions?: Maybe<TransformOptions>
  backgroundColor?: Maybe<Scalars['String']>
}

export type ImageSharpResizeArgs = {
  width?: Maybe<Scalars['Int']>
  height?: Maybe<Scalars['Int']>
  quality?: Maybe<Scalars['Int']>
  jpegQuality?: Maybe<Scalars['Int']>
  pngQuality?: Maybe<Scalars['Int']>
  webpQuality?: Maybe<Scalars['Int']>
  jpegProgressive?: Maybe<Scalars['Boolean']>
  pngCompressionLevel?: Maybe<Scalars['Int']>
  pngCompressionSpeed?: Maybe<Scalars['Int']>
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  base64?: Maybe<Scalars['Boolean']>
  traceSVG?: Maybe<Potrace>
  toFormat?: Maybe<ImageFormat>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
  background?: Maybe<Scalars['String']>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
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
  width?: Maybe<Scalars['Int']>
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: Maybe<ImageFormat>
}

export type JpgOptions = {
  quality?: Maybe<Scalars['Int']>
  progressive?: Maybe<Scalars['Boolean']>
}

export type PngOptions = {
  quality?: Maybe<Scalars['Int']>
  compressionSpeed?: Maybe<Scalars['Int']>
}

export type WebPOptions = {
  quality?: Maybe<Scalars['Int']>
}

export type AvifOptions = {
  quality?: Maybe<Scalars['Int']>
  lossless?: Maybe<Scalars['Boolean']>
  speed?: Maybe<Scalars['Int']>
}

export type TransformOptions = {
  grayscale?: Maybe<Scalars['Boolean']>
  duotone?: Maybe<DuotoneGradient>
  rotate?: Maybe<Scalars['Int']>
  trim?: Maybe<Scalars['Float']>
  cropFocus?: Maybe<ImageCropFocus>
  fit?: Maybe<ImageFit>
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
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
  format?: Maybe<MarkdownExcerptFormats>
}

export type MarkdownRemarkExcerptAstArgs = {
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MarkdownRemarkHeadingsArgs = {
  depth?: Maybe<MarkdownHeadingLevels>
}

export type MarkdownRemarkTableOfContentsArgs = {
  absolute?: Maybe<Scalars['Boolean']>
  pathToSlugField?: Maybe<Scalars['String']>
  maxDepth?: Maybe<Scalars['Int']>
  heading?: Maybe<Scalars['String']>
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
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
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
  pruneLength?: Maybe<Scalars['Int']>
  truncate?: Maybe<Scalars['Boolean']>
}

export type MdxHeadingsArgs = {
  depth?: Maybe<HeadingsMdx>
}

export type MdxTableOfContentsArgs = {
  maxDepth?: Maybe<Scalars['Int']>
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

export type SitePlugin = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  resolve?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
  packageJson?: Maybe<SitePluginPackageJson>
}

export type SitePluginPluginOptions = {
  plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>
  displayName?: Maybe<Scalars['Boolean']>
  fileName?: Maybe<Scalars['Boolean']>
  minify?: Maybe<Scalars['Boolean']>
  namespace?: Maybe<Scalars['String']>
  transpileTemplateLiterals?: Maybe<Scalars['Boolean']>
  pure?: Maybe<Scalars['Boolean']>
  name?: Maybe<Scalars['String']>
  short_name?: Maybe<Scalars['String']>
  start_url?: Maybe<Scalars['String']>
  background_color?: Maybe<Scalars['String']>
  theme_color?: Maybe<Scalars['String']>
  display?: Maybe<Scalars['String']>
  icon?: Maybe<Scalars['String']>
  legacy?: Maybe<Scalars['Boolean']>
  theme_color_in_head?: Maybe<Scalars['Boolean']>
  cache_busting_mode?: Maybe<Scalars['String']>
  crossOrigin?: Maybe<Scalars['String']>
  include_favicon?: Maybe<Scalars['Boolean']>
  cacheDigest?: Maybe<Scalars['String']>
  base64Width?: Maybe<Scalars['Int']>
  stripMetadata?: Maybe<Scalars['Boolean']>
  defaultQuality?: Maybe<Scalars['Int']>
  failOnError?: Maybe<Scalars['Boolean']>
  path?: Maybe<Scalars['String']>
  extensions?: Maybe<Array<Maybe<Scalars['String']>>>
  lessBabel?: Maybe<Scalars['Boolean']>
  mediaTypes?: Maybe<Array<Maybe<Scalars['String']>>>
  root?: Maybe<Scalars['String']>
  staticFolderName?: Maybe<Scalars['String']>
  maxWidth?: Maybe<Scalars['Int']>
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>
  showCaptions?: Maybe<Scalars['Boolean']>
  markdownCaptions?: Maybe<Scalars['Boolean']>
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  withWebp?: Maybe<Scalars['Boolean']>
  tracedSVG?: Maybe<Scalars['Boolean']>
  loading?: Maybe<Scalars['String']>
  decoding?: Maybe<Scalars['String']>
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>
  disableBgImage?: Maybe<Scalars['Boolean']>
  trackingIds?: Maybe<Array<Maybe<Scalars['String']>>>
  gtagConfig?: Maybe<SitePluginPluginOptionsGtagConfig>
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfig>
  isTSX?: Maybe<Scalars['Boolean']>
  jsxPragma?: Maybe<Scalars['String']>
  allExtensions?: Maybe<Scalars['Boolean']>
  content?: Maybe<Scalars['String']>
  components?: Maybe<Scalars['String']>
  pages?: Maybe<Scalars['String']>
  stylesheets?: Maybe<Scalars['String']>
  templates?: Maybe<Scalars['String']>
  utils?: Maybe<Scalars['String']>
  pathCheck?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsPlugins = {
  resolve?: Maybe<Scalars['String']>
  id?: Maybe<Scalars['String']>
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>
  pluginFilepath?: Maybe<Scalars['String']>
}

export type SitePluginPluginOptionsPluginsPluginOptions = {
  staticFolderName?: Maybe<Scalars['String']>
  maxWidth?: Maybe<Scalars['Int']>
  linkImagesToOriginal?: Maybe<Scalars['Boolean']>
  showCaptions?: Maybe<Scalars['Boolean']>
  markdownCaptions?: Maybe<Scalars['Boolean']>
  sizeByPixelDensity?: Maybe<Scalars['Boolean']>
  backgroundColor?: Maybe<Scalars['String']>
  quality?: Maybe<Scalars['Int']>
  withWebp?: Maybe<Scalars['Boolean']>
  tracedSVG?: Maybe<Scalars['Boolean']>
  loading?: Maybe<Scalars['String']>
  decoding?: Maybe<Scalars['String']>
  disableBgImageOnAlpha?: Maybe<Scalars['Boolean']>
  disableBgImage?: Maybe<Scalars['Boolean']>
}

export type SitePluginPluginOptionsGtagConfig = {
  anonymize_ip?: Maybe<Scalars['Boolean']>
  cookie_expires?: Maybe<Scalars['Int']>
}

export type SitePluginPluginOptionsPluginConfig = {
  head?: Maybe<Scalars['Boolean']>
  respectDNT?: Maybe<Scalars['Boolean']>
}

export type SitePluginPackageJson = {
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
  main?: Maybe<Scalars['String']>
  author?: Maybe<Scalars['String']>
  license?: Maybe<Scalars['String']>
  dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>
  devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>
  peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>
  keywords?: Maybe<Array<Maybe<Scalars['String']>>>
}

export type SitePluginPackageJsonDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonDevDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SitePluginPackageJsonPeerDependencies = {
  name?: Maybe<Scalars['String']>
  version?: Maybe<Scalars['String']>
}

export type SiteBuildMetadata = Node & {
  id: Scalars['ID']
  parent?: Maybe<Node>
  children: Array<Node>
  internal: Internal
  buildTime?: Maybe<Scalars['Date']>
}

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: Maybe<Scalars['String']>
  fromNow?: Maybe<Scalars['Boolean']>
  difference?: Maybe<Scalars['String']>
  locale?: Maybe<Scalars['String']>
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
  imageSharp?: Maybe<ImageSharp>
  allImageSharp: ImageSharpConnection
  markdownRemark?: Maybe<MarkdownRemark>
  allMarkdownRemark: MarkdownRemarkConnection
  mdxFrontmatter?: Maybe<MdxFrontmatter>
  allMdxFrontmatter: MdxFrontmatterConnection
  mdx?: Maybe<Mdx>
  allMdx: MdxConnection
  sitePlugin?: Maybe<SitePlugin>
  allSitePlugin: SitePluginConnection
  siteBuildMetadata?: Maybe<SiteBuildMetadata>
  allSiteBuildMetadata: SiteBuildMetadataConnection
  pagesJson?: Maybe<PagesJson>
  allPagesJson: PagesJsonConnection
}

export type QueryFileArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  childrenMdx?: Maybe<MdxFilterListInput>
  childMdx?: Maybe<MdxFilterInput>
  childrenPagesJson?: Maybe<PagesJsonFilterListInput>
  childPagesJson?: Maybe<PagesJsonFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllFileArgs = {
  filter?: Maybe<FileFilterInput>
  sort?: Maybe<FileSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryDirectoryArgs = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllDirectoryArgs = {
  filter?: Maybe<DirectoryFilterInput>
  sort?: Maybe<DirectorySortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteArgs = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteArgs = {
  filter?: Maybe<SiteFilterInput>
  sort?: Maybe<SiteSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteFunctionArgs = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllSiteFunctionArgs = {
  filter?: Maybe<SiteFunctionFilterInput>
  sort?: Maybe<SiteFunctionSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePageArgs = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type QueryAllSitePageArgs = {
  filter?: Maybe<SitePageFilterInput>
  sort?: Maybe<SitePageSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryImageSharpArgs = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllImageSharpArgs = {
  filter?: Maybe<ImageSharpFilterInput>
  sort?: Maybe<ImageSharpSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMarkdownRemarkArgs = {
  id?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMarkdownRemarkArgs = {
  filter?: Maybe<MarkdownRemarkFilterInput>
  sort?: Maybe<MarkdownRemarkSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMdxFrontmatterArgs = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  featured_image?: Maybe<FileFilterInput>
  alt_text?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  seo?: Maybe<SeoFilterInput>
  published?: Maybe<BooleanQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMdxFrontmatterArgs = {
  filter?: Maybe<MdxFrontmatterFilterInput>
  sort?: Maybe<MdxFrontmatterSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryMdxArgs = {
  rawBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  headings?: Maybe<MdxHeadingMdxFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  mdxAST?: Maybe<JsonQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MdxWordCountFilterInput>
  fields?: Maybe<FieldsFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type QueryAllMdxArgs = {
  filter?: Maybe<MdxFilterInput>
  sort?: Maybe<MdxSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySitePluginArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type QueryAllSitePluginArgs = {
  filter?: Maybe<SitePluginFilterInput>
  sort?: Maybe<SitePluginSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QuerySiteBuildMetadataArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type QueryAllSiteBuildMetadataArgs = {
  filter?: Maybe<SiteBuildMetadataFilterInput>
  sort?: Maybe<SiteBuildMetadataSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type QueryPagesJsonArgs = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  hero_image?: Maybe<PagesJsonHero_ImageFilterInput>
  page_header?: Maybe<StringQueryOperatorInput>
  sections?: Maybe<PagesJsonSectionsFilterListInput>
  seo?: Maybe<PagesJsonSeoFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
}

export type QueryAllPagesJsonArgs = {
  filter?: Maybe<PagesJsonFilterInput>
  sort?: Maybe<PagesJsonSortInput>
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
}

export type StringQueryOperatorInput = {
  eq?: Maybe<Scalars['String']>
  ne?: Maybe<Scalars['String']>
  in?: Maybe<Array<Maybe<Scalars['String']>>>
  nin?: Maybe<Array<Maybe<Scalars['String']>>>
  regex?: Maybe<Scalars['String']>
  glob?: Maybe<Scalars['String']>
}

export type IntQueryOperatorInput = {
  eq?: Maybe<Scalars['Int']>
  ne?: Maybe<Scalars['Int']>
  gt?: Maybe<Scalars['Int']>
  gte?: Maybe<Scalars['Int']>
  lt?: Maybe<Scalars['Int']>
  lte?: Maybe<Scalars['Int']>
  in?: Maybe<Array<Maybe<Scalars['Int']>>>
  nin?: Maybe<Array<Maybe<Scalars['Int']>>>
}

export type DateQueryOperatorInput = {
  eq?: Maybe<Scalars['Date']>
  ne?: Maybe<Scalars['Date']>
  gt?: Maybe<Scalars['Date']>
  gte?: Maybe<Scalars['Date']>
  lt?: Maybe<Scalars['Date']>
  lte?: Maybe<Scalars['Date']>
  in?: Maybe<Array<Maybe<Scalars['Date']>>>
  nin?: Maybe<Array<Maybe<Scalars['Date']>>>
}

export type FloatQueryOperatorInput = {
  eq?: Maybe<Scalars['Float']>
  ne?: Maybe<Scalars['Float']>
  gt?: Maybe<Scalars['Float']>
  gte?: Maybe<Scalars['Float']>
  lt?: Maybe<Scalars['Float']>
  lte?: Maybe<Scalars['Float']>
  in?: Maybe<Array<Maybe<Scalars['Float']>>>
  nin?: Maybe<Array<Maybe<Scalars['Float']>>>
}

export type ImageSharpFilterListInput = {
  elemMatch?: Maybe<ImageSharpFilterInput>
}

export type ImageSharpFilterInput = {
  fixed?: Maybe<ImageSharpFixedFilterInput>
  fluid?: Maybe<ImageSharpFluidFilterInput>
  gatsbyImageData?: Maybe<JsonQueryOperatorInput>
  original?: Maybe<ImageSharpOriginalFilterInput>
  resize?: Maybe<ImageSharpResizeFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type ImageSharpFixedFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpFluidFilterInput = {
  base64?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
  srcSet?: Maybe<StringQueryOperatorInput>
  srcWebp?: Maybe<StringQueryOperatorInput>
  srcSetWebp?: Maybe<StringQueryOperatorInput>
  sizes?: Maybe<StringQueryOperatorInput>
  originalImg?: Maybe<StringQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
  presentationWidth?: Maybe<IntQueryOperatorInput>
  presentationHeight?: Maybe<IntQueryOperatorInput>
}

export type JsonQueryOperatorInput = {
  eq?: Maybe<Scalars['JSON']>
  ne?: Maybe<Scalars['JSON']>
  in?: Maybe<Array<Maybe<Scalars['JSON']>>>
  nin?: Maybe<Array<Maybe<Scalars['JSON']>>>
  regex?: Maybe<Scalars['JSON']>
  glob?: Maybe<Scalars['JSON']>
}

export type ImageSharpOriginalFilterInput = {
  width?: Maybe<FloatQueryOperatorInput>
  height?: Maybe<FloatQueryOperatorInput>
  src?: Maybe<StringQueryOperatorInput>
}

export type ImageSharpResizeFilterInput = {
  src?: Maybe<StringQueryOperatorInput>
  tracedSVG?: Maybe<StringQueryOperatorInput>
  width?: Maybe<IntQueryOperatorInput>
  height?: Maybe<IntQueryOperatorInput>
  aspectRatio?: Maybe<FloatQueryOperatorInput>
  originalName?: Maybe<StringQueryOperatorInput>
}

export type NodeFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type NodeFilterListInput = {
  elemMatch?: Maybe<NodeFilterInput>
}

export type InternalFilterInput = {
  content?: Maybe<StringQueryOperatorInput>
  contentDigest?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  fieldOwners?: Maybe<StringQueryOperatorInput>
  ignoreType?: Maybe<BooleanQueryOperatorInput>
  mediaType?: Maybe<StringQueryOperatorInput>
  owner?: Maybe<StringQueryOperatorInput>
  type?: Maybe<StringQueryOperatorInput>
}

export type BooleanQueryOperatorInput = {
  eq?: Maybe<Scalars['Boolean']>
  ne?: Maybe<Scalars['Boolean']>
  in?: Maybe<Array<Maybe<Scalars['Boolean']>>>
  nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>
}

export type MdxFilterListInput = {
  elemMatch?: Maybe<MdxFilterInput>
}

export type MdxFilterInput = {
  rawBody?: Maybe<StringQueryOperatorInput>
  fileAbsolutePath?: Maybe<StringQueryOperatorInput>
  frontmatter?: Maybe<MdxFrontmatterFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
  body?: Maybe<StringQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  headings?: Maybe<MdxHeadingMdxFilterListInput>
  html?: Maybe<StringQueryOperatorInput>
  mdxAST?: Maybe<JsonQueryOperatorInput>
  tableOfContents?: Maybe<JsonQueryOperatorInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  wordCount?: Maybe<MdxWordCountFilterInput>
  fields?: Maybe<FieldsFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MdxFrontmatterFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  date?: Maybe<DateQueryOperatorInput>
  slug?: Maybe<StringQueryOperatorInput>
  featured_image?: Maybe<FileFilterInput>
  alt_text?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  seo?: Maybe<SeoFilterInput>
  published?: Maybe<BooleanQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type FileFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  publicURL?: Maybe<StringQueryOperatorInput>
  childrenImageSharp?: Maybe<ImageSharpFilterListInput>
  childImageSharp?: Maybe<ImageSharpFilterInput>
  childrenMdx?: Maybe<MdxFilterListInput>
  childMdx?: Maybe<MdxFilterInput>
  childrenPagesJson?: Maybe<PagesJsonFilterListInput>
  childPagesJson?: Maybe<PagesJsonFilterInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type PagesJsonFilterListInput = {
  elemMatch?: Maybe<PagesJsonFilterInput>
}

export type PagesJsonFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  hero_image?: Maybe<PagesJsonHero_ImageFilterInput>
  page_header?: Maybe<StringQueryOperatorInput>
  sections?: Maybe<PagesJsonSectionsFilterListInput>
  seo?: Maybe<PagesJsonSeoFilterInput>
  slug?: Maybe<StringQueryOperatorInput>
}

export type PagesJsonHero_ImageFilterInput = {
  image?: Maybe<StringQueryOperatorInput>
  alt_text?: Maybe<StringQueryOperatorInput>
}

export type PagesJsonSectionsFilterListInput = {
  elemMatch?: Maybe<PagesJsonSectionsFilterInput>
}

export type PagesJsonSectionsFilterInput = {
  template?: Maybe<StringQueryOperatorInput>
  text?: Maybe<StringQueryOperatorInput>
}

export type PagesJsonSeoFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  image?: Maybe<StringQueryOperatorInput>
  alt_text?: Maybe<StringQueryOperatorInput>
}

export type SeoFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  image?: Maybe<FileFilterInput>
  alt_text?: Maybe<StringQueryOperatorInput>
}

export type MdxHeadingMdxFilterListInput = {
  elemMatch?: Maybe<MdxHeadingMdxFilterInput>
}

export type MdxHeadingMdxFilterInput = {
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
}

export type MdxWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
}

export type FieldsFilterInput = {
  slug?: Maybe<StringQueryOperatorInput>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type FileSortInput = {
  fields?: Maybe<Array<Maybe<FileFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  | 'blksize'
  | 'blocks'
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type DirectoryFilterInput = {
  sourceInstanceName?: Maybe<StringQueryOperatorInput>
  absolutePath?: Maybe<StringQueryOperatorInput>
  relativePath?: Maybe<StringQueryOperatorInput>
  extension?: Maybe<StringQueryOperatorInput>
  size?: Maybe<IntQueryOperatorInput>
  prettySize?: Maybe<StringQueryOperatorInput>
  modifiedTime?: Maybe<DateQueryOperatorInput>
  accessTime?: Maybe<DateQueryOperatorInput>
  changeTime?: Maybe<DateQueryOperatorInput>
  birthTime?: Maybe<DateQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  dir?: Maybe<StringQueryOperatorInput>
  base?: Maybe<StringQueryOperatorInput>
  ext?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  relativeDirectory?: Maybe<StringQueryOperatorInput>
  dev?: Maybe<IntQueryOperatorInput>
  mode?: Maybe<IntQueryOperatorInput>
  nlink?: Maybe<IntQueryOperatorInput>
  uid?: Maybe<IntQueryOperatorInput>
  gid?: Maybe<IntQueryOperatorInput>
  rdev?: Maybe<IntQueryOperatorInput>
  ino?: Maybe<FloatQueryOperatorInput>
  atimeMs?: Maybe<FloatQueryOperatorInput>
  mtimeMs?: Maybe<FloatQueryOperatorInput>
  ctimeMs?: Maybe<FloatQueryOperatorInput>
  atime?: Maybe<DateQueryOperatorInput>
  mtime?: Maybe<DateQueryOperatorInput>
  ctime?: Maybe<DateQueryOperatorInput>
  birthtime?: Maybe<DateQueryOperatorInput>
  birthtimeMs?: Maybe<FloatQueryOperatorInput>
  blksize?: Maybe<IntQueryOperatorInput>
  blocks?: Maybe<IntQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type DirectorySortInput = {
  fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SiteSiteMetadataFilterInput = {
  title?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  titleTemplate?: Maybe<StringQueryOperatorInput>
  headline?: Maybe<StringQueryOperatorInput>
  keywords?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  siteUrl?: Maybe<StringQueryOperatorInput>
  siteLanguage?: Maybe<StringQueryOperatorInput>
  siteLocale?: Maybe<StringQueryOperatorInput>
  image?: Maybe<StringQueryOperatorInput>
  twitter?: Maybe<StringQueryOperatorInput>
  twitterUrl?: Maybe<StringQueryOperatorInput>
  facebook?: Maybe<StringQueryOperatorInput>
  facebookUrl?: Maybe<StringQueryOperatorInput>
  instagramUrl?: Maybe<StringQueryOperatorInput>
  youtubeUrl?: Maybe<StringQueryOperatorInput>
  linkedinUrl?: Maybe<StringQueryOperatorInput>
  githubUrl?: Maybe<StringQueryOperatorInput>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  | 'port'
  | 'host'
  | 'polyfill'
  | 'pathPrefix'
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteFilterInput = {
  buildTime?: Maybe<DateQueryOperatorInput>
  siteMetadata?: Maybe<SiteSiteMetadataFilterInput>
  port?: Maybe<IntQueryOperatorInput>
  host?: Maybe<StringQueryOperatorInput>
  polyfill?: Maybe<BooleanQueryOperatorInput>
  pathPrefix?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteSortInput = {
  fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteFunctionFilterInput = {
  functionRoute?: Maybe<StringQueryOperatorInput>
  pluginName?: Maybe<StringQueryOperatorInput>
  originalAbsoluteFilePath?: Maybe<StringQueryOperatorInput>
  originalRelativeFilePath?: Maybe<StringQueryOperatorInput>
  relativeCompiledFilePath?: Maybe<StringQueryOperatorInput>
  absoluteCompiledFilePath?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type SiteFunctionSortInput = {
  fields?: Maybe<Array<Maybe<SiteFunctionFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SitePageContextFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  limit?: Maybe<IntQueryOperatorInput>
  skip?: Maybe<IntQueryOperatorInput>
  numPages?: Maybe<IntQueryOperatorInput>
  currentPage?: Maybe<IntQueryOperatorInput>
}

export type SitePluginFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  resolve?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  ssrAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
  packageJson?: Maybe<SitePluginPackageJsonFilterInput>
}

export type SitePluginPluginOptionsFilterInput = {
  plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>
  displayName?: Maybe<BooleanQueryOperatorInput>
  fileName?: Maybe<BooleanQueryOperatorInput>
  minify?: Maybe<BooleanQueryOperatorInput>
  namespace?: Maybe<StringQueryOperatorInput>
  transpileTemplateLiterals?: Maybe<BooleanQueryOperatorInput>
  pure?: Maybe<BooleanQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  short_name?: Maybe<StringQueryOperatorInput>
  start_url?: Maybe<StringQueryOperatorInput>
  background_color?: Maybe<StringQueryOperatorInput>
  theme_color?: Maybe<StringQueryOperatorInput>
  display?: Maybe<StringQueryOperatorInput>
  icon?: Maybe<StringQueryOperatorInput>
  legacy?: Maybe<BooleanQueryOperatorInput>
  theme_color_in_head?: Maybe<BooleanQueryOperatorInput>
  cache_busting_mode?: Maybe<StringQueryOperatorInput>
  crossOrigin?: Maybe<StringQueryOperatorInput>
  include_favicon?: Maybe<BooleanQueryOperatorInput>
  cacheDigest?: Maybe<StringQueryOperatorInput>
  base64Width?: Maybe<IntQueryOperatorInput>
  stripMetadata?: Maybe<BooleanQueryOperatorInput>
  defaultQuality?: Maybe<IntQueryOperatorInput>
  failOnError?: Maybe<BooleanQueryOperatorInput>
  path?: Maybe<StringQueryOperatorInput>
  extensions?: Maybe<StringQueryOperatorInput>
  lessBabel?: Maybe<BooleanQueryOperatorInput>
  mediaTypes?: Maybe<StringQueryOperatorInput>
  root?: Maybe<StringQueryOperatorInput>
  staticFolderName?: Maybe<StringQueryOperatorInput>
  maxWidth?: Maybe<IntQueryOperatorInput>
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
  showCaptions?: Maybe<BooleanQueryOperatorInput>
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  quality?: Maybe<IntQueryOperatorInput>
  withWebp?: Maybe<BooleanQueryOperatorInput>
  tracedSVG?: Maybe<BooleanQueryOperatorInput>
  loading?: Maybe<StringQueryOperatorInput>
  decoding?: Maybe<StringQueryOperatorInput>
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>
  disableBgImage?: Maybe<BooleanQueryOperatorInput>
  trackingIds?: Maybe<StringQueryOperatorInput>
  gtagConfig?: Maybe<SitePluginPluginOptionsGtagConfigFilterInput>
  pluginConfig?: Maybe<SitePluginPluginOptionsPluginConfigFilterInput>
  isTSX?: Maybe<BooleanQueryOperatorInput>
  jsxPragma?: Maybe<StringQueryOperatorInput>
  allExtensions?: Maybe<BooleanQueryOperatorInput>
  content?: Maybe<StringQueryOperatorInput>
  components?: Maybe<StringQueryOperatorInput>
  pages?: Maybe<StringQueryOperatorInput>
  stylesheets?: Maybe<StringQueryOperatorInput>
  templates?: Maybe<StringQueryOperatorInput>
  utils?: Maybe<StringQueryOperatorInput>
  pathCheck?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginsFilterListInput = {
  elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>
}

export type SitePluginPluginOptionsPluginsFilterInput = {
  resolve?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>
  nodeAPIs?: Maybe<StringQueryOperatorInput>
  browserAPIs?: Maybe<StringQueryOperatorInput>
  pluginFilepath?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
  staticFolderName?: Maybe<StringQueryOperatorInput>
  maxWidth?: Maybe<IntQueryOperatorInput>
  linkImagesToOriginal?: Maybe<BooleanQueryOperatorInput>
  showCaptions?: Maybe<BooleanQueryOperatorInput>
  markdownCaptions?: Maybe<BooleanQueryOperatorInput>
  sizeByPixelDensity?: Maybe<BooleanQueryOperatorInput>
  backgroundColor?: Maybe<StringQueryOperatorInput>
  quality?: Maybe<IntQueryOperatorInput>
  withWebp?: Maybe<BooleanQueryOperatorInput>
  tracedSVG?: Maybe<BooleanQueryOperatorInput>
  loading?: Maybe<StringQueryOperatorInput>
  decoding?: Maybe<StringQueryOperatorInput>
  disableBgImageOnAlpha?: Maybe<BooleanQueryOperatorInput>
  disableBgImage?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPluginOptionsGtagConfigFilterInput = {
  anonymize_ip?: Maybe<BooleanQueryOperatorInput>
  cookie_expires?: Maybe<IntQueryOperatorInput>
}

export type SitePluginPluginOptionsPluginConfigFilterInput = {
  head?: Maybe<BooleanQueryOperatorInput>
  respectDNT?: Maybe<BooleanQueryOperatorInput>
}

export type SitePluginPackageJsonFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  description?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
  main?: Maybe<StringQueryOperatorInput>
  author?: Maybe<StringQueryOperatorInput>
  license?: Maybe<StringQueryOperatorInput>
  dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>
  devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>
  peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>
  keywords?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>
}

export type SitePluginPackageJsonDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>
}

export type SitePluginPackageJsonDevDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
  elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>
}

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
  name?: Maybe<StringQueryOperatorInput>
  version?: Maybe<StringQueryOperatorInput>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  | 'isCreatedByStatefulCreatePages'
  | 'context___id'
  | 'context___limit'
  | 'context___skip'
  | 'context___numPages'
  | 'context___currentPage'
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
  | 'pluginCreator___resolve'
  | 'pluginCreator___name'
  | 'pluginCreator___version'
  | 'pluginCreator___pluginOptions___plugins'
  | 'pluginCreator___pluginOptions___plugins___resolve'
  | 'pluginCreator___pluginOptions___plugins___id'
  | 'pluginCreator___pluginOptions___plugins___name'
  | 'pluginCreator___pluginOptions___plugins___version'
  | 'pluginCreator___pluginOptions___plugins___nodeAPIs'
  | 'pluginCreator___pluginOptions___plugins___browserAPIs'
  | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
  | 'pluginCreator___pluginOptions___displayName'
  | 'pluginCreator___pluginOptions___fileName'
  | 'pluginCreator___pluginOptions___minify'
  | 'pluginCreator___pluginOptions___namespace'
  | 'pluginCreator___pluginOptions___transpileTemplateLiterals'
  | 'pluginCreator___pluginOptions___pure'
  | 'pluginCreator___pluginOptions___name'
  | 'pluginCreator___pluginOptions___short_name'
  | 'pluginCreator___pluginOptions___start_url'
  | 'pluginCreator___pluginOptions___background_color'
  | 'pluginCreator___pluginOptions___theme_color'
  | 'pluginCreator___pluginOptions___display'
  | 'pluginCreator___pluginOptions___icon'
  | 'pluginCreator___pluginOptions___legacy'
  | 'pluginCreator___pluginOptions___theme_color_in_head'
  | 'pluginCreator___pluginOptions___cache_busting_mode'
  | 'pluginCreator___pluginOptions___crossOrigin'
  | 'pluginCreator___pluginOptions___include_favicon'
  | 'pluginCreator___pluginOptions___cacheDigest'
  | 'pluginCreator___pluginOptions___base64Width'
  | 'pluginCreator___pluginOptions___stripMetadata'
  | 'pluginCreator___pluginOptions___defaultQuality'
  | 'pluginCreator___pluginOptions___failOnError'
  | 'pluginCreator___pluginOptions___path'
  | 'pluginCreator___pluginOptions___extensions'
  | 'pluginCreator___pluginOptions___lessBabel'
  | 'pluginCreator___pluginOptions___mediaTypes'
  | 'pluginCreator___pluginOptions___root'
  | 'pluginCreator___pluginOptions___staticFolderName'
  | 'pluginCreator___pluginOptions___maxWidth'
  | 'pluginCreator___pluginOptions___linkImagesToOriginal'
  | 'pluginCreator___pluginOptions___showCaptions'
  | 'pluginCreator___pluginOptions___markdownCaptions'
  | 'pluginCreator___pluginOptions___sizeByPixelDensity'
  | 'pluginCreator___pluginOptions___backgroundColor'
  | 'pluginCreator___pluginOptions___quality'
  | 'pluginCreator___pluginOptions___withWebp'
  | 'pluginCreator___pluginOptions___tracedSVG'
  | 'pluginCreator___pluginOptions___loading'
  | 'pluginCreator___pluginOptions___decoding'
  | 'pluginCreator___pluginOptions___disableBgImageOnAlpha'
  | 'pluginCreator___pluginOptions___disableBgImage'
  | 'pluginCreator___pluginOptions___trackingIds'
  | 'pluginCreator___pluginOptions___gtagConfig___anonymize_ip'
  | 'pluginCreator___pluginOptions___gtagConfig___cookie_expires'
  | 'pluginCreator___pluginOptions___pluginConfig___head'
  | 'pluginCreator___pluginOptions___pluginConfig___respectDNT'
  | 'pluginCreator___pluginOptions___isTSX'
  | 'pluginCreator___pluginOptions___jsxPragma'
  | 'pluginCreator___pluginOptions___allExtensions'
  | 'pluginCreator___pluginOptions___content'
  | 'pluginCreator___pluginOptions___components'
  | 'pluginCreator___pluginOptions___pages'
  | 'pluginCreator___pluginOptions___stylesheets'
  | 'pluginCreator___pluginOptions___templates'
  | 'pluginCreator___pluginOptions___utils'
  | 'pluginCreator___pluginOptions___pathCheck'
  | 'pluginCreator___nodeAPIs'
  | 'pluginCreator___browserAPIs'
  | 'pluginCreator___ssrAPIs'
  | 'pluginCreator___pluginFilepath'
  | 'pluginCreator___packageJson___name'
  | 'pluginCreator___packageJson___description'
  | 'pluginCreator___packageJson___version'
  | 'pluginCreator___packageJson___main'
  | 'pluginCreator___packageJson___author'
  | 'pluginCreator___packageJson___license'
  | 'pluginCreator___packageJson___dependencies'
  | 'pluginCreator___packageJson___dependencies___name'
  | 'pluginCreator___packageJson___dependencies___version'
  | 'pluginCreator___packageJson___devDependencies'
  | 'pluginCreator___packageJson___devDependencies___name'
  | 'pluginCreator___packageJson___devDependencies___version'
  | 'pluginCreator___packageJson___peerDependencies'
  | 'pluginCreator___packageJson___peerDependencies___name'
  | 'pluginCreator___packageJson___peerDependencies___version'
  | 'pluginCreator___packageJson___keywords'
  | 'pluginCreatorId'

export type SitePageGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePageEdge>
  nodes: Array<SitePage>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePageFilterInput = {
  path?: Maybe<StringQueryOperatorInput>
  component?: Maybe<StringQueryOperatorInput>
  internalComponentName?: Maybe<StringQueryOperatorInput>
  componentChunkName?: Maybe<StringQueryOperatorInput>
  matchPath?: Maybe<StringQueryOperatorInput>
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>
  context?: Maybe<SitePageContextFilterInput>
  pluginCreator?: Maybe<SitePluginFilterInput>
  pluginCreatorId?: Maybe<StringQueryOperatorInput>
}

export type SitePageSortInput = {
  fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type ImageSharpSortInput = {
  fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type MarkdownHeadingFilterListInput = {
  elemMatch?: Maybe<MarkdownHeadingFilterInput>
}

export type MarkdownHeadingFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  value?: Maybe<StringQueryOperatorInput>
  depth?: Maybe<IntQueryOperatorInput>
}

export type MarkdownWordCountFilterInput = {
  paragraphs?: Maybe<IntQueryOperatorInput>
  sentences?: Maybe<IntQueryOperatorInput>
  words?: Maybe<IntQueryOperatorInput>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MarkdownRemarkFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  html?: Maybe<StringQueryOperatorInput>
  htmlAst?: Maybe<JsonQueryOperatorInput>
  excerpt?: Maybe<StringQueryOperatorInput>
  excerptAst?: Maybe<JsonQueryOperatorInput>
  headings?: Maybe<MarkdownHeadingFilterListInput>
  timeToRead?: Maybe<IntQueryOperatorInput>
  tableOfContents?: Maybe<StringQueryOperatorInput>
  wordCount?: Maybe<MarkdownWordCountFilterInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
}

export type MarkdownRemarkSortInput = {
  fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MdxFrontmatterSortInput = {
  fields?: Maybe<Array<Maybe<MdxFrontmatterFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type MdxSortInput = {
  fields?: Maybe<Array<Maybe<MdxFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SitePluginFieldsEnum
}

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>
  node: SitePlugin
  previous?: Maybe<SitePlugin>
}

export type SitePluginFieldsEnum =
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
  | 'resolve'
  | 'name'
  | 'version'
  | 'pluginOptions___plugins'
  | 'pluginOptions___plugins___resolve'
  | 'pluginOptions___plugins___id'
  | 'pluginOptions___plugins___name'
  | 'pluginOptions___plugins___version'
  | 'pluginOptions___plugins___pluginOptions___staticFolderName'
  | 'pluginOptions___plugins___pluginOptions___maxWidth'
  | 'pluginOptions___plugins___pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___plugins___pluginOptions___showCaptions'
  | 'pluginOptions___plugins___pluginOptions___markdownCaptions'
  | 'pluginOptions___plugins___pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___plugins___pluginOptions___backgroundColor'
  | 'pluginOptions___plugins___pluginOptions___quality'
  | 'pluginOptions___plugins___pluginOptions___withWebp'
  | 'pluginOptions___plugins___pluginOptions___tracedSVG'
  | 'pluginOptions___plugins___pluginOptions___loading'
  | 'pluginOptions___plugins___pluginOptions___decoding'
  | 'pluginOptions___plugins___pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___plugins___pluginOptions___disableBgImage'
  | 'pluginOptions___plugins___nodeAPIs'
  | 'pluginOptions___plugins___browserAPIs'
  | 'pluginOptions___plugins___pluginFilepath'
  | 'pluginOptions___displayName'
  | 'pluginOptions___fileName'
  | 'pluginOptions___minify'
  | 'pluginOptions___namespace'
  | 'pluginOptions___transpileTemplateLiterals'
  | 'pluginOptions___pure'
  | 'pluginOptions___name'
  | 'pluginOptions___short_name'
  | 'pluginOptions___start_url'
  | 'pluginOptions___background_color'
  | 'pluginOptions___theme_color'
  | 'pluginOptions___display'
  | 'pluginOptions___icon'
  | 'pluginOptions___legacy'
  | 'pluginOptions___theme_color_in_head'
  | 'pluginOptions___cache_busting_mode'
  | 'pluginOptions___crossOrigin'
  | 'pluginOptions___include_favicon'
  | 'pluginOptions___cacheDigest'
  | 'pluginOptions___base64Width'
  | 'pluginOptions___stripMetadata'
  | 'pluginOptions___defaultQuality'
  | 'pluginOptions___failOnError'
  | 'pluginOptions___path'
  | 'pluginOptions___extensions'
  | 'pluginOptions___lessBabel'
  | 'pluginOptions___mediaTypes'
  | 'pluginOptions___root'
  | 'pluginOptions___staticFolderName'
  | 'pluginOptions___maxWidth'
  | 'pluginOptions___linkImagesToOriginal'
  | 'pluginOptions___showCaptions'
  | 'pluginOptions___markdownCaptions'
  | 'pluginOptions___sizeByPixelDensity'
  | 'pluginOptions___backgroundColor'
  | 'pluginOptions___quality'
  | 'pluginOptions___withWebp'
  | 'pluginOptions___tracedSVG'
  | 'pluginOptions___loading'
  | 'pluginOptions___decoding'
  | 'pluginOptions___disableBgImageOnAlpha'
  | 'pluginOptions___disableBgImage'
  | 'pluginOptions___trackingIds'
  | 'pluginOptions___gtagConfig___anonymize_ip'
  | 'pluginOptions___gtagConfig___cookie_expires'
  | 'pluginOptions___pluginConfig___head'
  | 'pluginOptions___pluginConfig___respectDNT'
  | 'pluginOptions___isTSX'
  | 'pluginOptions___jsxPragma'
  | 'pluginOptions___allExtensions'
  | 'pluginOptions___content'
  | 'pluginOptions___components'
  | 'pluginOptions___pages'
  | 'pluginOptions___stylesheets'
  | 'pluginOptions___templates'
  | 'pluginOptions___utils'
  | 'pluginOptions___pathCheck'
  | 'nodeAPIs'
  | 'browserAPIs'
  | 'ssrAPIs'
  | 'pluginFilepath'
  | 'packageJson___name'
  | 'packageJson___description'
  | 'packageJson___version'
  | 'packageJson___main'
  | 'packageJson___author'
  | 'packageJson___license'
  | 'packageJson___dependencies'
  | 'packageJson___dependencies___name'
  | 'packageJson___dependencies___version'
  | 'packageJson___devDependencies'
  | 'packageJson___devDependencies___name'
  | 'packageJson___devDependencies___version'
  | 'packageJson___peerDependencies'
  | 'packageJson___peerDependencies___name'
  | 'packageJson___peerDependencies___version'
  | 'packageJson___keywords'

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SitePluginEdge>
  nodes: Array<SitePlugin>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SitePluginSortInput = {
  fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
  field: SiteBuildMetadataFieldsEnum
}

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>
  node: SiteBuildMetadata
  previous?: Maybe<SiteBuildMetadata>
}

export type SiteBuildMetadataFieldsEnum =
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
  | 'buildTime'

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int']
  edges: Array<SiteBuildMetadataEdge>
  nodes: Array<SiteBuildMetadata>
  pageInfo: PageInfo
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type SiteBuildMetadataFilterInput = {
  id?: Maybe<StringQueryOperatorInput>
  parent?: Maybe<NodeFilterInput>
  children?: Maybe<NodeFilterListInput>
  internal?: Maybe<InternalFilterInput>
  buildTime?: Maybe<DateQueryOperatorInput>
}

export type SiteBuildMetadataSortInput = {
  fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
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
  skip?: Maybe<Scalars['Int']>
  limit?: Maybe<Scalars['Int']>
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
  field: Scalars['String']
  fieldValue?: Maybe<Scalars['String']>
}

export type PagesJsonSortInput = {
  fields?: Maybe<Array<Maybe<PagesJsonFieldsEnum>>>
  order?: Maybe<Array<Maybe<SortOrderEnum>>>
}

export type SeoQueryVariables = Exact<{ [key: string]: never }>

export type SeoQuery = {
  site?: Maybe<
    Pick<Site, 'buildTime'> & {
      siteMetadata?: Maybe<
        Pick<
          SiteSiteMetadata,
          | 'siteUrl'
          | 'title'
          | 'description'
          | 'keywords'
          | 'image'
          | 'headline'
          | 'siteLanguage'
          | 'siteLocale'
          | 'author'
          | 'twitter'
          | 'facebook'
        >
      >
    }
  >
}

export type SiteQueryVariables = Exact<{ [key: string]: never }>

export type SiteQuery = {
  site?: Maybe<{
    siteMetadata?: Maybe<
      Pick<
        SiteSiteMetadata,
        'title' | 'twitterUrl' | 'facebookUrl' | 'instagramUrl' | 'youtubeUrl' | 'linkedinUrl' | 'githubUrl'
      >
    >
  }>
}

export type Style_GuideQueryVariables = Exact<{ [key: string]: never }>

export type Style_GuideQuery = {
  file?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>
  allMdx: {
    edges: Array<{
      node: Pick<Mdx, 'id' | 'excerpt'> & {
        frontmatter?: Maybe<
          Pick<MdxFrontmatter, 'title' | 'date' | 'slug' | 'keywords'> & {
            featured_image?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>
          }
        >
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
      node: Pick<Mdx, 'id' | 'excerpt'> & {
        frontmatter?: Maybe<
          Pick<MdxFrontmatter, 'title' | 'date' | 'slug' | 'keywords'> & {
            featured_image?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>
          }
        >
      }
    }>
  }
}

export type PageQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>
}>

export type PageQuery = {
  pagesJson?: Maybe<
    Pick<PagesJson, 'id' | 'slug' | 'page_header'> & {
      seo?: Maybe<Pick<PagesJsonSeo, 'title' | 'description' | 'keywords' | 'image' | 'alt_text'>>
      hero_image?: Maybe<Pick<PagesJsonHero_Image, 'image' | 'alt_text'>>
      sections?: Maybe<Array<Maybe<Pick<PagesJsonSections, 'template' | 'text'>>>>
    }
  >
}

export type Blog_PostQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>
}>

export type Blog_PostQuery = {
  mdx?: Maybe<
    Pick<Mdx, 'id' | 'body'> & {
      frontmatter?: Maybe<
        Pick<MdxFrontmatter, 'title' | 'description' | 'date' | 'keywords' | 'slug'> & {
          seo?: Maybe<Pick<Seo, 'alt_text'> & { image?: Maybe<Pick<File, 'publicURL'>> }>
          featured_image?: Maybe<{ childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>
        }
      >
    }
  >
}

export type All_ImagesQueryVariables = Exact<{ [key: string]: never }>

export type All_ImagesQuery = {
  allFile: {
    edges: Array<{
      node: Pick<File, 'absolutePath' | 'publicURL'> & { childImageSharp?: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }
    }>
  }
}
