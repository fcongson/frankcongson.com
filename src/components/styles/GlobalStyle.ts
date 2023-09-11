import { createGlobalStyle } from 'styled-components'

import '@fcongson/lagom-tokens/css/theme/_dark.css'
import '@fcongson/lagom-tokens/css/theme/_light.css'
import '@fcongson/lagom-tokens/css/variables/_core.css'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'silkamono';
    src: url('/fonts/silkamono-regular-webfont.woff2') format('woff2');
  }

  html {
    background-color: var(--lagom-semantic-color-bg-default);
  }
`
