import React from 'react'
import Link from 'gatsby-link'

const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='header-content'>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
