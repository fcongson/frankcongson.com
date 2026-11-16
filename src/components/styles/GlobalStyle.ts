import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: var(--lagom-semantic-color-bg-default);
  }

  /* Opt-in solid black label behind a page title (set "page_header_label" in the page's JSON),
     same padding as the home page's section labels. */
  .lagom-page-header.page-header--label {
    background-color: #000;
    color: #fff;
    padding: 0.1em 0.4em;
  }
`
