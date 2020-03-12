import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import logo from '../../images/logo-light.svg'

export default ({ social }) => (
  <footer>
    <div className='section'>
      <div className='container footer-container'>
        <img className='footer-logo' src={logo} alt='Frank Congson logo' />
        <div className='footer-content'>
          <div className='social-links'>
            <a href={social.facebookUrl} aria-label='Facbook'>
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href={social.instagramUrl} aria-label='Instagram'>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href={social.twitterUrl} aria-label='Twitter'>
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href={social.youtubeUrl} aria-label='YouTube'>
              <FontAwesomeIcon icon={faYoutube} />
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
      </div>
    </div>
  </footer>
)
