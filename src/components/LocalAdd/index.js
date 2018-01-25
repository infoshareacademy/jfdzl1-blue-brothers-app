import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Tooltip from 'material-ui/Tooltip';


import {addLocal} from '../LocalsList/state';

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
    return (
      <Grid item xs={12}>
      <form onSubmit={this.handleSubmit}>


        <div style={{textAlign: "center"}}>
              <Paper>
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
                  <Tooltip id="tooltip-icon" title="Add local to App">
                  <Button raised color="primary" input type="submit" value="Add">
                    Add
                  </Button>
                </Tooltip>
                </div>
                <Button raised color="link">
                <Link to="/list">Back to list</Link>
                </Button>
              </Paper>

        </div>

      </form>
      </Grid>
    );
  }
}

export default connect(
  null,
  mapDispatchToProps
)(LocalAdd);
