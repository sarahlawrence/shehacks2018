import React from 'react'
import Link from 'gatsby-link'
import Button from '@material-ui/core/Button';
import './index.css';

const IndexPage = () => (
    <div className='container'>
    <div className='title'>
    <div className='intro'>
    <h1>
Still not sure what to do for upcoming weekend
      </h1>

      <p> <h1> Let us help you</h1></p>
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
