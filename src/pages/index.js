import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/landing-page/landing-page/">Go to Landing page</Link>

     <Button variant="contained" color="primary">
        Primary
      </Button>
  </div>
)

export default IndexPage
