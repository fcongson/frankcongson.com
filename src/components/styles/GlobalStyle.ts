import { createGlobalStyle } from 'styled-components'

import '@fcongson/lagom-tokens/css/theme/_light.css'
import '@fcongson/lagom-tokens/css/theme/_dark.css'

export const GlobalStyle = createGlobalStyle`
  html {
    background-color: var(--lagom-semantic-color-bg-default);
  }
`
