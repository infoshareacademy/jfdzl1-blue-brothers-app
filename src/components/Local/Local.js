import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'


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
        <h1>{this.props.local.name}</h1>
                          <h4>Adres:</h4><h3>{this.props.local.address}</h3>
                          <h4>www:</h4> <h3> <a href={this.props.local.website}>{this.props.local.website}</a></h3>
                          <img alt={this.props.local.name} src={this.props.local.image_url} />

                      </div><Button
                      onClick={this.props.showSnackbar}
                      raised
                      color="default"
                      style={styles.button}>
                      <Link to="/list">Back to list</Link>
                  </Button>
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