import React from 'react';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import PostcodeImg from '../img/map-blur-colors-folded.jpg';

class Postcode extends React.Component {
  constructor(props) {
    super(props);
  }

  handleChange(e) {
    const postcode = e.target.value;
    if (postcode > 1000) {
      this.props.callback(postcode);
    }
  }


  render() {
  return (
    <div className='wrap postcode'>
      <div className='wrap-bg'>
        <img src={PostcodeImg} className='full-img'/>
      </div>
      <div className='wrap-content'>
        <h1 className='wrap-text'>Where am I spending my weekend?</h1>
        <InputLabel htmlFor="postcode">Postcode</InputLabel>
          <Input id="postcode" onChange={(e) => this.handleChange(e)}
            startAdornment={<InputAdornment position="start"></InputAdornment>}
          />
      </div>
    </div>
  )
  }
}

export default Postcode;
