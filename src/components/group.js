import React from 'react';
import Button from '@material-ui/core/Button';
import GroupImg from '../img/people_blur.jpg';
import Group1 from '../img/group-1.png';
import Group2 from '../img/group-2.png';
import Group3 from '../img/group-3.png';

class Group extends React.Component {
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
        <img src={GroupImg} className='full-img'/>
      </div>
      <div className='wrap-content wrap-three'>
        <div className='wrap-text'>Who am I spending the weekend with?</div>
        <Button onClick={(e) => this.handleClick(e)} >
          <img src={Group1} />
          Flying solo
        </Button>
        <Button onClick={(e) => this.handleClick(e)} >
          <img src={Group2} />
          Two's a pair
        </Button>
        <Button onClick={(e) => this.handleClick(e)} >
          <img src={Group3} />
          We're a group
        </Button>
      </div>
    </div>
  )
  }
}

export default Group;
