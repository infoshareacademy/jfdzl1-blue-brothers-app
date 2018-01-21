import React from 'react';
import { connect } from 'react-redux';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import { addLocal } from '../LocalsList/state';

const mapDispatchToProps = dispatch => ({
  add: (data) => dispatch(addLocal(data))
});

class LocalAdd extends React.Component {

  state = {
    name: '',
    address: '',
    website: ''
  }

  handleSubmit = event => {
    this.props.add(this.state);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <div>
          <TextField placeholder="Name" name="name" onChange={this.handleChange}/>
        </div>
        <div>
          <TextField placeholder="Address" name="address" onChange={this.handleChange}/>
        </div>
        <div>
          <TextField placeholder="Website" name="website" onChange={this.handleChange}/>
        </div>
        <div>
          <input type="submit" value="Add"/>
        </div>
      </form>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LocalAdd);
