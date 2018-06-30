import React from 'react';
import Button from '@material-ui/core/Button';


class Block extends React.Component {
  constructor(props) {
    super(props);
  }



  render() {
  return (

    <div>
      <img src={this.props.image} />
      <div className='button-text'>{this.props.text}</div>
    </div>

  )
  }
}

export default Block;
