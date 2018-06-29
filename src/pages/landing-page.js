import React from 'react';
import Carousel from 'nuka-carousel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '../components/group';
import './landing-page.css'


const group = [
  {
    url: 'https://odysseyonline-img.rbl.ms/simage/http%3A%2F%2Fcdn1.theodysseyonline.com%2Ffiles%2F2015%2F11%2F09%2F635826395277009417-64976811_Single-Because.jpg/2000%2C2000/GVqnI8WV6hR3lYmF/img.jpg',
    title: 'Single',
    width: '40%',
  },
  {
    url: 'http://www.roseparkpsychology.com.au/wp-content/uploads/2014/08/Family-Therapy.jpg',
    title: 'Family',
    width: '30%',
  },
  {
    url: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/01-prince-harry-meghan-markle-1517172379.jpg?crop=1.00xw:0.377xh;0,0.0457xh&resize=768:*',
    title: 'Couple',
    width: '30%',
  },
];


export default class extends React.Component {
    state = {
        postcode: '',
        group: 'single'
      };
    handleChange = postcode => event => {
        this.setState({
          [postcode]: event.target.value,
        });
      };

  render() {
    return (
      <Carousel>
        <div className='slide'> Let's start awesome weekend together</div>
        <div className='slide postcode'> 
        <TextField
          id="name"
          label="Postcode"
          margin="normal"
          value={this.state.postcode}
          onChange={this.handleChange('postcode')}
        />
        </div>
        <div className='slide group'> 
            <ButtonGroup data={group}/>
        
        </div>
        <div className='slide style'>  
            <Button variant="contained" >
            Easy Sunday
            </Button>
            <Button variant="contained" color="primary" >
            Mild
            </Button>
            <Button variant="contained" color="secondary">
                Hard core
            </Button>

        </div>
       
      </Carousel>
    );
  }
}