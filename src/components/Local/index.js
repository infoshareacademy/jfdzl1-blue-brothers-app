import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getLocal } from './state';

const mapStateToProps = state => ({
  local: state.local.data
});

const mapDispatchToProps = dispatch => ({
  getLocal: (id) => dispatch(getLocal(id))
});

class Local extends React.Component {

  componentWillMount() {
    const id = this.props.match.params.localId;
    this.props.getLocal(id);
  }

  render() {
    return(
      <div>
        <h1>Local: {this.props.local.name}</h1>
        <p>Adres: {this.props.local.address}</p>
        <p>www: <a href={this.props.local.website}>{this.props.local.website}</a></p>

        <Link to="/list">Back to list</Link>

      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Local);