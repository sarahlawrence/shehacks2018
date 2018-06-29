import React from 'react'
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const buttonText = "I'm in!";
const ImIn = () => (
  <div className='im-in'>
    <Checkbox className='checkbox' style={{'color': 'white'}}/>
    <p className='im-in-text'>
      {buttonText}
    </p>
  </div>
)

export default ImIn
