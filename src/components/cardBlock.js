import React from 'react';
import ImIn from './imIn';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

class CardBlock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const blockData = this.props.data;
    return (
      <Paper className='card'>
        <Grid container direction='row' spacing={8} >
          <Grid item className='card-content card-img'>
            <img src={blockData.image} alt={blockData.name} className='card-img'/>
          </Grid>

          <Grid item className='card-content card-text'>
            <h2>
              {blockData.name}
            </h2>
            <p>
              {blockData.description}
            </p>
            <p className='card-details'>
              {blockData.location}, {blockData.day} ({blockData.time})
            </p>
          </Grid>

          <Grid item className='card-content card-action'>
            <ImIn />
          </Grid>
        </Grid>

      </Paper>
  )
  }
}

export default CardBlock;
