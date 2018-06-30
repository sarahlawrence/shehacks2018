import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button';
const Header = ({ siteTitle }) => (
  <header className='header'>
    <div className='header-content'>
      <h1 style={{ margin: 0 }}>
        <Link to="/">
          {siteTitle}
        </Link>
      </h1>

      <div className='banner'>
        <Button>about</Button>
        <Button>contact</Button>

      </div>
    </div>
  </header>
)

export default Header
