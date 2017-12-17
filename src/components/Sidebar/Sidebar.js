import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Grid from 'material-ui/Grid';

class Sidebar extends Component {
  render() {
    return (
      <Grid item xs={12}>
        Sidebar
        <li><Link to="/">Home</Link></li>
        <li><Link to="/stats">Stats</Link></li>

      </Grid>
    )
  }
}

export default Sidebar;