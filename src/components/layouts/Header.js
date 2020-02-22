import { Link } from 'gatsby'
import React from 'react'
import logo from '../../images/logo.svg'

export default () => (
  <header>
    <div className='header-container'>
      <Link to='/'>
        <img className='header-logo' src={logo} alt='Frank Congson logo' />
      </Link>
      <Link to='/'>Home</Link>
      <Link to='/photography'>Photography</Link>
      <Link to='/about'>About</Link>
      <Link to='/blog'>Blog</Link>
    </div>
  </header>
)
