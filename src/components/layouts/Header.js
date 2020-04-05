import { Link } from 'gatsby'
import React, { useState } from 'react'
import styled from 'styled-components'
import logo from '../../images/logo.svg'
import { Container, Section } from '../styles'

const Header = styled.header`
  display: block;
  z-index: 1000;

  ${Container} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 0 auto 4rem auto;

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      margin: 0 auto;
      flex-wrap: wrap;
    }
  }

  .logo-container {
    height: 64px;
  }
`

const NavigationMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: stretch;

  @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
    flex-direction: column;
    margin-top: 2rem;
    order: 2;
    width: 100%;
    height: 0;
    overflow: hidden;
    transition: height 200ms ease-in-out, padding-bottom 200ms ease-in-out;

    ${props =>
      props.open &&
      `
      height: 312px;
      padding-bottom: 4rem;
      `}

    ${props =>
      props.overlay &&
      `
        position: absolute;
        top: 80px;
      `}
  }

  .navigation-link {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    width: fit-content;
    margin: 0 0 0 32px;
    padding: 30px 0 0 0;
    border-bottom: 2px solid transparent;
    transition: border-bottom 200ms ease-in-out;
    color: ${props => props.theme.colors.greyDark40};

    &:hover {
      border-bottom: 2px solid ${props => props.theme.colors.greyDark40};
    }

    &[aria-current='page'] {
      border-bottom: 2px solid ${props => props.theme.colors.greyDark40};
    }

    @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
      font-size: 36px;
      line-height: 44px;
      margin: 0 0 8px 0;
      padding: 0 0 8px 0;

      &:hover {
        border-bottom: 2px solid ${props => props.theme.colors.greyDark40};
      }

      &[aria-current='page'] {
        border-bottom: 2px solid ${props => props.theme.colors.greyDark40};
      }
    }
  }
`

const NavigationToggle = styled.button`
  display: none;
  height: 64px;

  .toggle-line {
    position: relative;
    width: 32px;
    height: 2px;
    background-color: ${props => props.theme.colors.greyDark40};
    transition: transform 100ms ease-in-out 0ms, top 100ms ease-in-out 100ms;

    &.top {
      top: 1px;
    }

    &.bottom {
      top: 13px;
    }

    ${props =>
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

  @media (max-width: ${props => props.theme.breakpoints.maxWidthTabletLandscape}) {
    display: block;
    order: 1;
  }
`

export default ({ navigationOverlay }) => {
  const [open, setOpen] = useState(false)
  return (
    <Header>
      <Section>
        <Container>
          <div className='logo-container'>
            <Link to='/'>
              <img src={logo} alt='Frank Congson logo' />
            </Link>
          </div>
          <NavigationMenu open={open} overlay={navigationOverlay}>
            <Link className='navigation-link' to='/'>
              Home
            </Link>
            <Link className='navigation-link' to='/photography'>
              Photography
            </Link>
            <Link className='navigation-link' to='/about'>
              About
            </Link>
            <Link className='navigation-link' to='/blog'>
              Blog
            </Link>
          </NavigationMenu>
          <NavigationToggle
            aria-label={`${open ? 'Close' : 'Open'} navigation menu`}
            onClick={() => setOpen(!open)}
            open={open}>
            <div className='toggle-line top' />
            <div className='toggle-line bottom' />
          </NavigationToggle>
        </Container>
      </Section>
    </Header>
  )
}
