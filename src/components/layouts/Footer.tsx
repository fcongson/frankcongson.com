import { Container, Section, useTheme } from '@fcongson/lagom-ui'
import { faGithub, faInstagram, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from 'content/images/logo-light.svg'
import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'

const FooterStyles = styled.footer`
  background-color: var(--lagom-core-colors-black);
  color: var(--lagom-core-colors-grey-lighter40);
  text-align: center;
  flex-shrink: 0;

  a {
    padding: 0;
    border: none;
    &:hover {
      border: none;
    }
  }

  .lagom-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    min-height: 256px;
    margin: 0 auto;

    ${(props) => props.theme.mediaQueries.large} {
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
        color: var(--lagom-core-colors-grey-lighter40);
      }

      ${(props) => props.theme.mediaQueries.large} {
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
      text-align: right;

      & a {
        padding: 1rem;
        color: var(--lagom-core-colors-grey-lighter40);
      }

      & svg {
        width: 1.5rem;
        height: 1.5rem;
        color: var(--lagom-core-colors-grey-lighter40);
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

export const Footer: React.FunctionComponent<{ social: { [key: string]: string } }> = ({ social, ...restProps }) => {
  const theme = useTheme()
  return (
    <FooterStyles theme={theme} className='footer' {...restProps}>
      <Section>
        <Container>
          <Link to='/'>
            <img className='footer-logo' src={logo} alt='Frank Congson logo' />
          </Link>
          <div className='footer-content'>
            <div className='content-links'>
              <Link to='/photography/'>Photography</Link>
              <Link to='/about/'>About</Link>
              <Link className='navigation-link' to='/blog/'>
                Blog
              </Link>
              <Link to='/uses/'>Uses</Link>
              <Link to='/style-guide/'>Style Guide</Link>
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
              <a href={social.devUrl} area-label='FrankCongson.dev'>
                .dev
              </a>
            </div>
            <small className='copyright'>Copyright © {new Date().getFullYear()} Frank Congson</small>
          </div>
        </Container>
      </Section>
    </FooterStyles>
  )
}
