import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button';
import './index.css';

const IndexPage = () => (
    <div className='container'>
    <div className='title'>
    <div className='intro'>
    <h1>
      Wanderlust? Unlock local weekend adventures.
    </h1>

    <h2 className='white'>Discover what's on this weekend with WanderLocal</h2>
    </div>

    <Link to="/landing-page/" className='plan'>
      <Button variant="contained" color="primary" >
      Plan my weekend
      </Button>
    </Link>


    </div>



  </div>
)

export default IndexPage
