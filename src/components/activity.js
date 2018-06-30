import React from 'react';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import ActivityImg from '../img/bike_blur.jpg';
import ActivityEasy from '../img/activity-easy.png';
import ActivityMed from '../img/activity-med.png';
import ActivityHard from '../img/activity-hard.png';
import Block from '../components/block';

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
            <Block image={ActivityEasy} text='Easy like Sunday morning'/>
          </Button>
          <Button onClick={(e) => this.handleClick(e)} >
            <Block image={ActivityMed} text="Ready for some activity"/>
          </Button>
          <Button onClick={(e) => this.handleClick(e)} >
            <Block image={ActivityHard} text="Make it hardcore"/>
          </Button>


      </div>
    </div>
  )
  }
}

export default Activity;
