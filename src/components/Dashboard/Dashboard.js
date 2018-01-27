import React from 'react';
import {connect} from 'react-redux';
import Grid from 'material-ui/Grid';

import Banner from './Banner'
import Hero from './Hero';
import Stats from './Stats';
import {showNotification} from '../UI/state';

const mapDispatchToProps = dispatch => ({
  showSnackbar: (message) => dispatch(showNotification('App in progress. App coming soon!'))
});

const Dashboard = props => (
  <Grid item xs={12}>
    <Banner/>
    <Hero showSnackbar={props.showSnackbar}/>
    <Stats/>
  </Grid>
);

export default connect(null, mapDispatchToProps)(Dashboard);
