import { Link } from 'gatsby'
import styled from 'styled-components'

export const LinkButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 48px;
  width: fit-content;
  border: 1px solid ${(props) => props.theme.colors.greys[0]};
  box-sizing: border-box;
  border-radius: 24px;
  padding: 8px 24px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.theme.colors.greys[0]};
  transition: transform 200ms ease-in-out;

  &:hover {
    border: 1px solid ${(props) => props.theme.colors.greys[0]};
    transform: translateY(-2px);
  }

  &:active {
    border: 1px solid ${(props) => props.theme.colors.greys[0]};
    transform: translateY(1px);
    transition: transform 100ms ease-in-out;
  }
`
