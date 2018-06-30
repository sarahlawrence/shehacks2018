import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button';
import './index.css';

const IndexPage = () => (
    <div className='container'>
    <div className='title'>
      <div className='intro'>
      <h1>
        Wander like a local
      </h1>

      <h2 className='white'>Discover what's on this weekend</h2>
        <Link to="/landing-page/" className='plan'>
          <Button variant="contained" color="primary" >
          Start
          </Button>
        </Link>
      </div>
    </div>



  </div>
)

export default IndexPage
