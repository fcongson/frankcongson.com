import { Link } from 'gatsby'
import styled from 'styled-components'

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: fit-content;
  border: 1px solid ${(props) => props.theme.colors.greyDark40};
  box-sizing: border-box;
  border-radius: 24px;
  padding: 8px 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.greyDark40};
`
