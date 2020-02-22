import { Link } from 'gatsby'
import React from 'react'
import logo from '../../images/logo.svg'

export default () => (
  <header>
    <div className='header-container'>
      <Link to='/'>
        <img className='header-logo' src={logo} alt='Frank Congson logo' />
      </Link>
      <div className='navigation-container'>
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
      </div>
    </div>
  </header>
)
