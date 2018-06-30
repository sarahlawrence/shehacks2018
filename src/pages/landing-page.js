import React from 'react';
import Postcode from '../components/postcode';
import Group from '../components/group';
import Activity from '../components/activity';
import Footer from '../components/footer';
import EventsList from '../components/events';

import './landing-page.css'

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postcode: 0,
      active: 'postcode',
    };
    this.postcodeCallback = this.postcodeCallback.bind(this);
    this.groupCallback = this.groupCallback.bind(this);
    this.activityCallback = this.activityCallback.bind(this);
  }

  postcodeCallback(x) {
    this.setState({postcode: x, active: 'group'});
  }

  groupCallback() {
    this.setState({active: 'activity'});
  }

  activityCallback() {
    this.setState({active: 'events'});
  }

  getActive() {
    switch(this.state.active) {
      case 'postcode':
        return <Postcode callback={this.postcodeCallback}/>
        break;
      case 'group':
        return <Group callback={this.groupCallback}/>
        break;
      case 'activity':
        return <Activity callback={this.activityCallback}/>
        break;
      case 'events':
        return <EventsList postcode={this.state.postcode}/>
        break;
    }
  }

  render() {
    return (
      <div>
        {this.getActive()}
      </div>
    );
  }
}

export default LandingPage;
