import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import logo from '../../images/logo-light.svg'
import { Container, Section } from '../styles'

const Footer = styled.footer`
  background-color: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.greyLight40};
  text-align: center;
  flex-shrink: 0;

  ${Container} {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 256px;
    margin: 0 auto;

    @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
      min-height: 128px;
    }
  }

  .footer-logo {
    height: 64px;
    width: 64px;
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .content-links {
      display: flex;
      flex-direction: row;
      margin: 2rem 0;
      & a {
        font-style: normal;
        font-weight: 600;
        font-size: 16px;
        line-height: 20px;
        width: fit-content;
        margin: 0 0 0 2rem;
        color: ${(props) => props.theme.colors.greyLight40};
      }

      @media (max-width: ${(props) => props.theme.breakpoints.maxWidthTabletLandscape}) {
        flex-direction: column;
        align-items: flex-end;
        & a {
          margin: 0 0 1rem 0;
        }
      }
    }

    .social-links {
      font-size: 1.5rem;
      margin-right: -1rem;
      padding: 1rem 0 1rem 0;

      & a {
        padding: 1rem;
      }

      & svg {
        width: 1.5rem;
        height: 1.5rem;
        color: ${(props) => props.theme.colors.greyLight40};
      }
    }

    .copyright {
      font-style: normal;
      font-weight: normal;
      font-size: 12px;
      margin: 0 0 2rem 0;
    }
  }
`

export default ({ social }) => (
  <Footer>
    <Section>
      <Container>
        <Link to='/'>
          <img className='footer-logo' src={logo} alt='Frank Congson logo' />
        </Link>
        <div className='footer-content'>
          <div className='content-links'>
            <Link to='/photography'>Photography</Link>
            <Link to='/about'>About</Link>
            <Link className='navigation-link' to='/blog'>
              Blog
            </Link>
            <Link to='/uses'>Uses</Link>
          </div>
          <div className='social-links'>
            <a href={social.instagramUrl} aria-label='Instagram'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={social.twitterUrl} aria-label='Twitter'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={social.linkedinUrl} aria-label='LinkedIn'>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href={social.githubUrl} aria-label='GitHub'>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
          <p className='copyright'>Copyright © {new Date().getFullYear()} Frank Congson</p>
        </div>
      </Container>
    </Section>
  </Footer>
)
