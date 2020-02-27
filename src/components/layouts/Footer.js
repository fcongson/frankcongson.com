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
    <div className='footer-container'>
      <img className='footer-logo' src={logo} alt='Frank Congson logo' />
      <div className='footer-content'>
        <div className='social-links'>
          <a href={social.facebookUrl}>
            <FontAwesomeIcon className='social-icon' icon={faFacebookF} />
          </a>
          <a href={social.instagramUrl}>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href={social.twitterUrl}>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href={social.youtubeUrl}>
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href={social.linkedinUrl}>
            <FontAwesomeIcon icon={faLinkedinIn} />
          </a>
          <a href={social.githubUrl}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
        <p className='copyright'>Copyright © {new Date().getFullYear()} Frank Congson</p>
      </div>
    </div>
  </footer>
)
