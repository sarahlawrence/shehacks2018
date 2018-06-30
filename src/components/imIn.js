import React from 'react'
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';

class ImIn extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }

  handleClick() {
    const oldState = this.state.checked;
    this.setState({checked: !oldState});
  }

  render() {
    const buttonText = "I'm in!";
    return (
      <div className='im-in' className={this.state.checked ? 'im-in checked': 'im-in'} style={{'color': 'white'}}>
        <Checkbox className='checkbox' onClick={(e) => this.handleClick(e)} style={{'color': 'white'}}/>
        <p className='im-in-text'>
          {buttonText}
        </p>
      </div>
    )
  }
}

export default ImIn
