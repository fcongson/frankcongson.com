'use client'

import { Container, Section, useTheme } from '@fcongson/lagom-ui'
import Link from 'next/link'
import React, { useState } from 'react'
import styled from 'styled-components'

// Small-viewport menu timing (ms). The menu collapses over MENU_DURATION while the links fade out
// over the shorter LINK_DURATION, so they are still partly visible as the menu closes.
const MENU_DURATION = 300
const LINK_DURATION = 250
const LINK_DELAY = 80
const LINK_STAGGER = 40

const HeaderStyles = styled.header<{ $overlay: boolean; $backgroundColor?: string; $menuOpen: boolean }>`
  display: block;
  position: ${(props) => (props.$overlay ? 'absolute' : 'relative')};
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
    background-color: ${(props) => props.$backgroundColor};
    backdrop-filter: blur(8px);
    transition: background-color ${MENU_DURATION}ms ease-in-out;

    /* In dark mode, while the small-viewport menu is open, tint the blurred page toward the theme
       background so the light links keep their contrast over bright content. */
    ${(props) => props.theme.mediaQueries!.large} {
      [data-lagom-theme~='dark'] & {
        ${(props) =>
          props.$menuOpen &&
          !props.$backgroundColor &&
          'background-color: color-mix(in srgb, var(--lagom-semantic-color-bg-default) 72%, transparent);'}
      }
    }
  }

  .lagom-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto 4rem auto;

    ${(props) => props.theme.mediaQueries!.large} {
      margin: 0 auto 2rem auto;
      flex-wrap: wrap;
    }
  }

  .logo-container {
    height: 64px;
  }
`

const NavigationMenu = styled.nav<{ $overlay: boolean; $open: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  ${(props) => props.theme.mediaQueries!.large} {
    flex-direction: column;
    order: 2;
    width: 100%;
    height: 0;
    overflow: hidden;
    /* Hidden (and out of the tab order) only once the close transition has finished. */
    visibility: hidden;
    transition:
      height ${MENU_DURATION}ms ease-in-out,
      margin-top ${MENU_DURATION}ms ease-in-out,
      visibility 0s linear ${MENU_DURATION}ms;

    ${(props) =>
      props.$open &&
      `
      margin-top: 2rem;
      height: ${props.$overlay ? `calc(100vh - 2rem - 64px);` : `calc(54px * 4 + 32px);`}
      visibility: visible;
      transition:
        height ${MENU_DURATION}ms ease-in-out,
        margin-top ${MENU_DURATION}ms ease-in-out,
        visibility 0s;
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

    ${(props) => props.theme.mediaQueries!.large} {
      font-size: 36px;
      line-height: 44px;
      margin: 0 0 8px 0;
      padding: 0 0 8px 0;

      /* Links stay rendered so they can fade with the menu instead of vanishing when it closes.
         On open they follow the menu with a short stagger; on close they fade out together, fast. */
      opacity: ${(props) => (props.$open ? 1 : 0)};
      transform: translateY(${(props) => (props.$open ? '0' : '-8px')});
      transition:
        opacity ${LINK_DURATION}ms ease-in-out ${(props) => (props.$open ? LINK_DELAY : 0)}ms,
        transform ${LINK_DURATION}ms ease-in-out ${(props) => (props.$open ? LINK_DELAY : 0)}ms,
        border-bottom 200ms ease-in-out;

      ${(props) =>
        props.$open &&
        [1, 2, 3, 4]
          .map(
            (n) =>
              `&:nth-child(${n}) { transition-delay: ${LINK_DELAY + (n - 1) * LINK_STAGGER}ms, ${LINK_DELAY + (n - 1) * LINK_STAGGER}ms, 0ms; }`,
          )
          .join('\n')}
    }
  }
`

const NavigationToggle = styled.button<{ $open: boolean }>`
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
      props.$open &&
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

  ${(props) => props.theme.mediaQueries!.large} {
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
    <HeaderStyles
      theme={theme}
      className='header'
      $overlay={overlay}
      $backgroundColor={backgroundColor}
      $menuOpen={open}
    >
      <Section>
        <Container>
          <div className='logo-container'>
            <Link href='/'>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src='/content/images/logo.svg' alt='Frank Congson logo' />
            </Link>
          </div>
          <NavigationToggle
            theme={theme}
            aria-label={`${open ? 'Close' : 'Open'} navigation menu`}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            $open={open}
          >
            <div className='toggle-line top' />
            <div className='toggle-line bottom' />
          </NavigationToggle>
          <NavigationMenu theme={theme} $overlay={overlay} $open={open}>
            <Link className='navigation-link' href='/'>
              Home
            </Link>
            <Link className='navigation-link' href='/photography/'>
              Photography
            </Link>
            <Link className='navigation-link' href='/about/'>
              About
            </Link>
            <Link className='navigation-link' href='/blog/'>
              Blog
            </Link>
          </NavigationMenu>
        </Container>
      </Section>
    </HeaderStyles>
  )
}
