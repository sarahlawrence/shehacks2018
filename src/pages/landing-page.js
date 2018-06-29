import React from 'react';
import Carousel from 'nuka-carousel';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import './landing-page.css'

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
            <Button variant="contained" >
            Single
            </Button>
            <Button variant="contained" color="primary" >
                Family
            </Button>
            <Button variant="contained" color="secondary">
                Couple
            </Button>
        
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