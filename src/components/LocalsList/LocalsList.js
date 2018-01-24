import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import Paper from 'material-ui/Paper'
import Typography from 'material-ui/Typography';

import {init} from './state';

const mapStateToProps = state => ({
  locals: state.locals.list
});

const mapDispatchToProps = dispatch => ({
  initData: () => dispatch(init())
});

class LocalsList extends Component {

  componentWillMount() {
    this.props.initData();
  }

  render() {
    return (
      <div>
        <Paper>
        <ul>
          {this.props.locals.map(local => (
            <li key={local.id}>
              <Typography type="title" gutterBottom>
              <Link to={`/local/${local.id}`}>{local.name}, {local.address}</Link>
              </Typography>
            </li>
          ))}
        </ul>
        </Paper>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocalsList);
