import React from 'react';
import DayList from '../components/dayList'
import * as RAW from '../../data.json';

class EventsList extends React.Component {
  constructor(props) {
    super(props);
    const selectedIds = [1,2,3,4,5,6,7,8]; // REPLACE
    const data = RAW.data.filter(x => selectedIds.includes(x.id));
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
