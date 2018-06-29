import React from 'react';
import DayList from '../components/dayList'
import * as RAW from '../../data.json';

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
        <DayList day='Saturday' data={saturdayData}/>
        <DayList day='Sunday' data={sundayData}/>
      </div>
    );
  }
}

export default EventsList;
