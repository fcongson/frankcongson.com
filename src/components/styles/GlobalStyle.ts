import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: var(--lagom-semantic-color-bg-default);
  }

  /* Opt-in solid black label behind a page title (set "page_header_label" in the page's JSON),
     same padding as the home page's section labels. */
  .lagom-container:has(> .page-header--label) {
    text-align: center;
  }

  /* Inline, so each wrapped line gets its own bar that hugs the text, with the bars
     stacking edge to edge (the line-height). */
  .lagom-page-header.page-header--label {
    display: inline;
    line-height: 1.4;
    padding: 0.1em 0.4em;
    background-color: #000;
    color: #fff;
    -webkit-box-decoration-break: clone;
    box-decoration-break: clone;
  }
`
