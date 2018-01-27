import React from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import logo from './clubfinder.png'
import Hero from './Hero'
import header from './background.jpg'

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
    fontSize: 20
  },
  background: {
    width: '100%',
    margin: '-5px 0',
    overflow: 'hidden'
  }
};

const Banner = props => (


  <Grid container textAlign="center" justify="center">
    <Grid item xs={4}>
      <Paper style={styles.paper}>
        <img src={header} width="100%" height="100%"/>
        <h3>cLUBfinder najlepsza wyszukiwarka lokali w Twojej okolicy!</h3>
        <div style={styles.container}>
          <Button
            onClick={'./list'}
            raised
            color="primary"
            style={styles.button}>
            Start
          </Button>
        </div>
      </Paper>
    </Grid>
  </Grid>
);

export default Banner;

