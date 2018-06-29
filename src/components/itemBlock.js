import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const ItemBlock = (x) => {
  const blockData = x.data;
  console.log(blockData);


  return (
  <div>
    <Card>
    <CardMedia
          image={blockData.image}
          title={blockData.name}
        />
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
          <Button size="small" color="primary">
            I am in
          </Button>
        </CardActions>
    </Card>
  </div>
)}

export default ItemBlock
