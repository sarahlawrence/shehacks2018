import React from 'react';
import Button from '@material-ui/core/Button';
import DayList from '../components/dayList'
import * as RAW from '../../data.json';

const buttonStyles = {
  'background-color': '#7cac50',
  'color': 'white',
  'padding': '8px',
  'font-weight': 'bolder'
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
      <div>
        <div>
          <DayList day='Saturday' data={saturdayData}/>
          <DayList day='Sunday' data={sundayData}/>
        </div>
        <div className="centerDiv">
          <Button variant="contained" size="large" style={buttonStyles}>Email me my weekend</Button>
          <p></p>
          <Button variant="contained" size="large" style={buttonStyles}>Add to calendar</Button>
        </div>
      </div>
    );
  }
}

export default EventsList;
