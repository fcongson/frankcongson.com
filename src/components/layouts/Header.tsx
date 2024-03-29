import { Container, Section, useTheme } from '@fcongson/lagom-ui'
import logo from 'content/images/logo.svg'
import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'

const HeaderStyles = styled.header<{ overlay: boolean; backgroundColor?: string }>`
  display: block;
  position: ${(props) => (props.overlay ? 'absolute' : 'relative')};
  width: 100%;
  z-index: 1000;

  a {
    padding: 0;
    border: none;
    &:hover {
      border: none;
    }
  }

  .lagom-section {
    background-color: ${(props) => props.backgroundColor};
    backdrop-filter: blur(8px);
  }

  .lagom-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto 4rem auto;

    ${(props) => props.theme.mediaQueries.large} {
      margin: 0 auto 2rem auto;
      flex-wrap: wrap;
    }
  }

  .logo-container {
    height: 64px;
  }
`

const NavigationMenu = styled.nav<{ overlay: boolean; open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  ${(props) => props.theme.mediaQueries.large} {
    flex-direction: column;
    order: 2;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition:
      height 200ms ease-in-out,
      padding-bottom 200ms ease-in-out;

    ${(props) =>
      props.open &&
      `
      margin-top: 2rem;
      height: ${props.overlay ? `calc(100vh - 2rem - 64px);` : `calc(54px * 4 + 32px);`}
      padding-bottom: 0rem;
      `}
  }

  .navigation-link {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    width: fit-content;
    margin: 0 0 0 2rem;
    padding: 30px 0 0 0;
    border-bottom: 2px solid transparent;
    transition: border-bottom 200ms ease-in-out;
    color: var(--lagom-semantic-color-fg-default);

    &:hover {
      border-bottom: 2px solid var(--lagom-semantic-color-border-default);
    }

    &[aria-current='page'] {
      border-bottom: 2px solid var(--lagom-semantic-color-border-default);
    }

    ${(props) => props.theme.mediaQueries.large} {
      /* TODO: display none breaks the transition when closing */
      display: ${(props) => (props.open ? 'block' : 'none')};
      font-size: 36px;
      line-height: 44px;
      margin: 0 0 8px 0;
      padding: 0 0 8px 0;
    }
  }
`

const NavigationToggle = styled.button<{ open: boolean }>`
  display: none;
  height: 64px;

  .toggle-line {
    position: relative;
    width: 32px;
    height: 2px;
    background-color: var(--lagom-semantic-color-fg-default);
    transition:
      transform 100ms ease-in-out 0ms,
      top 100ms ease-in-out 100ms;

    &.top {
      top: 1px;
    }

    &.bottom {
      top: 13px;
    }

    ${(props) =>
      props.open &&
      `
        transition: top 100ms ease-in-out 0ms, transform 100ms ease-in-out 100ms;
        
        &.top {
          top: 8px;
          transform: rotate(45deg);
        }

        &.bottom {
          top: 6px;
          transform: rotate(-45deg);
        }
      `}
  }

  &:hover {
    cursor: pointer;
  }

  ${(props) => props.theme.mediaQueries.large} {
    display: block;
    order: 1;
  }
`

export const Header: React.FunctionComponent<{ overlay: boolean; backgroundColor?: string }> = ({
  overlay,
  backgroundColor,
}) => {
  const theme = useTheme()
  const [open, setOpen] = useState(false)
  return (
    <HeaderStyles theme={theme} className='header' overlay={overlay} backgroundColor={backgroundColor}>
      <Section>
        <Container>
          <div className='logo-container'>
            <Link to='/'>
              <img src={logo} alt='Frank Congson logo' />
            </Link>
          </div>
          <NavigationToggle
            theme={theme}
            aria-label={`${open ? 'Close' : 'Open'} navigation menu`}
            onClick={() => setOpen(!open)}
            open={open}
          >
            <div className='toggle-line top' />
            <div className='toggle-line bottom' />
          </NavigationToggle>
          <NavigationMenu theme={theme} overlay={overlay} open={open}>
            <Link className='navigation-link' to='/'>
              Home
            </Link>
            <Link className='navigation-link' to='/photography/'>
              Photography
            </Link>
            <Link className='navigation-link' to='/about/'>
              About
            </Link>
            <Link className='navigation-link' to='/blog/'>
              Blog
            </Link>
          </NavigationMenu>
        </Container>
      </Section>
    </HeaderStyles>
  )
}
