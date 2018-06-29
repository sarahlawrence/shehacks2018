import React from 'react';
import ImIn from './imIn';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const CardBlock = (x) => {
  const blockData = x.data;
  return (

    <Paper className='card'>
      <Grid container direction='row' spacing={8} >
        <Grid item className='card-content card-img'>
          <img src={blockData.image} alt={blockData.name} className='card-img'/>
        </Grid>

        <Grid item className='card-content card-text'>
          <Typography gutterBottom variant="headline" component="h2">
            {blockData.name}
          </Typography>
          <Typography component="p">
            {blockData.description}
          </Typography>
          <Typography component="p">
            {blockData.location}, {blockData.day} ({blockData.time})
          </Typography>
        </Grid>

        <Grid item className='card-content card-action'>
          <ImIn />
        </Grid>
      </Grid>

    </Paper>
)}

export default CardBlock
