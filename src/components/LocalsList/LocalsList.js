import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

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
        <ul>
          {this.props.locals.map(local => (
            <li key={local.id}>
              <Link to={`/local/${local.id}`}>{local.name}, {local.address}</Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LocalsList);
