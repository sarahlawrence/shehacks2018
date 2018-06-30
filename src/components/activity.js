import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ActivityImg from '../img/bike_blur.jpg';

class Activity extends React.Component {
  constructor(props) {
    super(props);
  }

  handleClick(e) {
    this.props.callback();
  }


  render() {
  return (
    <div className='wrap'>
      <div className='wrap-bg'>
        <img src={ActivityImg} className='full-img'/>
      </div>
      <div className='wrap-content wrap-three'>
        <Button onClick={(e) => this.handleClick(e)} />
        <Button onClick={(e) => this.handleClick(e)} />
        <Button onClick={(e) => this.handleClick(e)} />
      </div>
    </div>
  )
  }
}

export default Activity;
