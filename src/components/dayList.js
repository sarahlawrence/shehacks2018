import React from 'react'
import CardBlock from './cardBlock'
import Grid from '@material-ui/core/Grid';

class DayList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  buildList() {
    return this.props.data.map((e) => {
      return (
        <Grid item key={e.name}>
          <CardBlock data={e} />
        </Grid>
      )
    });
  }

  render() {
    return (
      <div>
        <h1 className='day-name'>{ this.props.day }</h1>
        <Grid container spacing={8} justify='center' direction='column'>
          {this.buildList()}
        </Grid>
      </div>
    );
  }
}

export default DayList;
