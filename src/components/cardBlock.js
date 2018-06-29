import React from 'react';
import ImIn from './imIn';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const CardBlock = (x) => {
  const blockData = x.data;
  return (

    <Card className='card'>
      <img src={blockData.image} alt={blockData.name} className='card-img'/>
      <CardContent>
        <Typography gutterBottom variant="headline" component="h2">
          {blockData.name}
        </Typography>
        <Typography component="p">
          {blockData.description}
        </Typography>
        <Typography component="p">
          {blockData.location}
        </Typography>
        <Typography component="p">
          {blockData.time}
        </Typography>
      </CardContent>
      <CardActions>
        <ImIn />
      </CardActions>
    </Card>
)}

export default CardBlock
