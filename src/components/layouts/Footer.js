import React from 'react'
import logo from '../../images/logo-light.svg'

export default () => (
  <footer>
    <div className='footer-container'>
      <img className='footer-logo' src={logo} alt='Frank Congson logo' />
      <p className='copyright'>Copyright © {new Date().getFullYear()} Frank Congson</p>
    </div>
  </footer>
)
