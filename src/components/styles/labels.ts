import { css } from 'styled-components'

// Solid black label behind a heading (white text, hugging the text), used where a title needs to
// stay legible over a photo or a busy background. Include inside a rule that targets the heading.
export const headerLabel = css`
  width: fit-content;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
  padding: 0.1em 0.4em;
  background-color: #000;
  color: #fff;
`
