import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
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
import Notifications from './UI/Notifications';
import LocalAdd from './components/LocalAdd';
import Local from './components/Local';
import { store, history } from './store';

class App extends Component {
  render() {
    const {classes} = this.props;
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <div>
            <div className={classes.root}>
              <Grid container className={classes.items}>
                <Appbar/>
                <Route exact path="/" component={Dashboard}/>
                <Route path="/list" component={LocalsList}/>
                <Route path="/local/:localId" component={Local}/>
                <Route path="/add" component={LocalAdd}/>
                <Route path="/form" component={Form}/>
                <Route path="/stats" component={Stats}/>
                <Footer/>
              </Grid>
            </div>
            <Sidebar/>
            <Notifications/>
          </div>
        </ConnectedRouter>
      </Provider>

    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(theme)(App);
