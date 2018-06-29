import React from 'react'
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

const buttonText = "I'm in!";
const ImIn = () => (
  <div className='im-in'>
    <Checkbox className='checkbox'/>
    <Typography component="p">
      {buttonText}
    </Typography>
  </div>
)

export default ImIn
