import { createGlobalStyle } from 'styled-components'
import { ThemeType } from './theme'

export const GlobalStyle = createGlobalStyle<{
  noFocusOutline: boolean
  theme: ThemeType
}>`
  * {
    -webkit-font-smoothing: antialiased;
  }
  ::selection {
    background: ${(props) => props.theme.colors.olives[2]}; /* WebKit/Blink Browsers */
  }
  ::-moz-selection {
    background: ${(props) => props.theme.colors.olives[2]}; /* Gecko Browsers */
  }

  ${(props) =>
    props.noFocusOutline &&
    `
    html {
      a:focus,
      button:focus,
      div[role='button']:focus {
        outline: none;
      }
    }
    `}

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  body {
    padding: 0;
    color: ${(props) => props.theme.colors.greys[0]};
    line-height: 1.7;
    font-family: ${(props) => props.theme.fonts.sansSerif};
    font-size: 16px;
  }

  /* typography */

  @font-face {
    font-family: 'silkamono';
    src: url('/fonts/silkamono-regular-webfont.woff2') format('woff2');
  }

  a {
    color: ${(props) => props.theme.colors.greys[0]};
    text-decoration: none;
    font-weight: 600;
    padding-bottom: 4px;
    border-bottom: 2px solid ${(props) => props.theme.colors.olives[2]};
    transition: border-bottom 200ms ease-in-out;

    &:hover {
      border-bottom: 2px solid ${(props) => props.theme.colors.greys[0]};
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: ${(props) => props.theme.fonts.sansSerif};
    font-weight: 700;
    margin-bottom: 1rem;
    a {
      font-weight: inherit;
    }
  }
  h1 {
    font-size: 54px;
    line-height: 66px;
  }
  h2 {
    font-size: 36px;
    line-height: 44px;
  }
  h3 {
    font-size: 24px;
    line-height: 29px;
  }

  p,
  pre,
  ul,
  ol {
    margin-bottom: 2rem;
  }
  ul,
  ol {
    padding-left: 30px;
  }
  ul li,
  ol li {
    margin-left: 1em;
    margin-bottom: 1em;
  }

  code,
  pre {
    font-family: ${(props) => props.theme.fonts.monospace};
    font-weight: ${(props) => props.theme.fontWeights[1]};
    /* background: ${(props) => props.theme.colors.olives[2]}; */
    background: hsla(111, 7%, 80%, 0.5);
  }

  pre code {
    background: none;
  }

  code {
    padding: ${(props) => props.theme.space[1]}px;
    border-radius: 4px;
  }

  pre {
    white-space: pre-wrap; /* css-3 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
    padding: ${(props) => props.theme.space[3]}px;
    border-radius: 4px;
  }

  strong {
    font-weight: bold;
  }
  em {
    font-style: italic;
  }

  ${(props) => props.theme.mediaQueries.medium} {
    h1 {
      font-size: 36px;
      line-height: 44px;
    }
    h2 {
      font-size: 24px;
      line-height: 29px;
    }
    h3 {
      font-size: 16px;
      line-height: 1.7;
    }
    p {
      font-size: 16px;
    }
    pre {
      font-size: 16px;
    }
  }
`
