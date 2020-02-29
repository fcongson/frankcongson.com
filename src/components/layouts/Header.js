import { Link } from 'gatsby'
import React, { useState } from 'react'
import logo from '../../images/logo.svg'

export default () => {
  const [open, setOpen] = useState(false)
  return (
    <header>
      <div className='section'>
        <div className='container header-container'>
          <div className='logo-container'>
            <Link to='/'>
              <img className='header-logo' src={logo} alt='Frank Congson logo' />
            </Link>
          </div>
          <div className={`navigation-container${open ? ' open' : ''}`}>
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
          <div
            className='navigation-menu-toggle'
            onClick={() => setOpen(!open)}
            onKeyUp={({ keyCode }) => {
              if (keyCode === 13) setOpen(!open)
            }}
            role='button'
            tabIndex={0}>
            <div className={`toggle-line top${open ? ' open' : ''}`} />
            <div className={`toggle-line bottom${open ? ' open' : ''}`} />
          </div>
        </div>
      </div>
    </header>
  )
}
