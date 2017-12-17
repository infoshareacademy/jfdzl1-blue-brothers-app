import React, {Component} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import PropTypes from 'prop-types';
import {withStyles} from 'material-ui/styles';
import Grid from 'material-ui/Grid';

import theme from './theme';
import Appbar from './components/Appbar';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Form from './components/Form';
import LocalsList from './components/LocalsList';
import Footer from './components/Footer';
import Stats from './components/Stats';

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Router>
        <div className={classes.root}>
          <Grid container className={classes.items}>
            <Appbar/>
            <Sidebar/>
            <Route exact path="/" component={Dashboard}/>
            <Route exact path="/LocalsList" component={LocalsList}/>
            <Route exact path="/" component={Form}/>
            <Route exact path="/stats" component={Stats}/>
            <Footer/>
          </Grid>
        </div>
      </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(App);
