import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ActivityImg from '../img/bike_blur.jpg';
import ActivityEasy from '../img/activity-easy.png';
import ActivityMed from '../img/activity-med.png';
import ActivityHard from '../img/activity-hard.png';

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
        <h1 className='wrap-text'>How intense is my weekend?</h1>
        <Button onClick={(e) => this.handleClick(e)} >
          <img src={ActivityEasy} />
          Easy like Sunday morning
        </Button>
        <Button onClick={(e) => this.handleClick(e)} >
          <img src={ActivityMed} />
          Ready for some activity
        </Button>
        <Button onClick={(e) => this.handleClick(e)} >
          <img src={ActivityHard} />
          Make it hardcore
        </Button>
      </div>
    </div>
  )
  }
}

export default Activity;
