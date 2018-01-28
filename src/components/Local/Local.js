import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Avatar from 'material-ui/Avatar';


import { getLocal } from './state';

const styles = {
    paper: {
        marginBottom: 20,
        padding: 16
    },

    container: {
        textAlign: 'center',
        padding: 25
    }
};

const mapStateToProps = state => ({
  local: state.local.data,

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
          <Grid container textAlign="center" justify="center">
              <Grid item xs={12}>
                  <Paper style={styles.paper}>
                      <div style={styles.container}>
        <h1>Local: {this.props.local.name}</h1>
        <p>Adres: {this.props.local.address}</p>
        <p>www: <a href={this.props.local.website}>{this.props.local.website}</a></p>
                          <img alt={this.props.local.name} src={this.props.local.image_url} />

                      </div>
                      <Link to="/list">Back to list</Link>
                  </Paper>
              </Grid>
          </Grid>

      </div>
    );
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Local);