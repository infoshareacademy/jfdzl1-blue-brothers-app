import React from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'

import logo from './clubfinder.png'

const styles = {
  paper: {
    marginBottom: 20,
    padding: 16
  },
  container: {
    textAlign: 'center'
  },
  button: {
    textAlign: 'center',
    fontSize: 32
  }
};

const Hero = props => (
  <Paper style={styles.paper}>
    <div style={styles.container}>
      <img src={logo} alt="Logo"/>
      <p>Wyszukiwarka najlepszych lokali w Twojej okolicy</p>
      <p>Uruchom aplikację i wyszukaj lokal idealny dla Ciebie!! </p>
    </div>
    <div style={styles.container}>
      <Button
        onClick={props.showSnackbar}
        raised
        color="primary"
        style={styles.button}>
        Start
      </Button>
    </div>
  </Paper>
);

export default Hero;
