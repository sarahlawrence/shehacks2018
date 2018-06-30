import React from 'react';
import Button from '@material-ui/core/Button';
import DayList from './dayList'
import * as RAW from '../../data.json';

const buttonStyles = {
  'background-color': '#3d6570',
  'color': 'white',
  'padding': '8px 16px',
  'text-transform':'lowercase'
}

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    const postcode = 2095; // replace with this.props.postcode - options: 2026, 2042, 2150, 2095
    const data = RAW.data.filter(x => postcode === x.postcode);
    this.state = {
      data,
    };
  }

  render() {
    const saturdayData = this.state.data.filter(x => x.day === 'Saturday');
    const sundayData = this.state.data.filter(x => x.day === 'Sunday');
    return (
      <div className="eventsPage">
        <div>
          <DayList day='Saturday' data={saturdayData}/>
          <div className='day-border' />
          <DayList day='Sunday' data={sundayData}/>
        </div>
        <div className="centerDiv">
          <Button variant="contained" size="large" style={buttonStyles}>Email me my weekend</Button>
          <p></p>
          <Button variant="contained" size="large" style={buttonStyles}>Add to my calendar</Button>
        </div>
      </div>
    );
  }
}

export default EventsList;
