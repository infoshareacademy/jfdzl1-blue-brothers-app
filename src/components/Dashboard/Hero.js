import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import FaCutlery from 'react-icons/lib/fa/cutlery'
import FaThumbsOUp from 'react-icons/lib/fa/thumbs-o-up'
import logo from './clubfinder.png'

const styles = {
  paper: {
    marginBottom: 20,
    padding: 16
  },
  container: {
    textAlign: 'center',
      height: 250
  },
  button: {
    textAlign: 'center',
    fontSize: 32
  },
  background: {
    width: '100%',
    margin: '-5px 0',
    overflow: 'hidden'
  },

  infoIcon: {
    color: '#23238E',
    fontSize: 70
  },

  text: {
    fontSize: 20
  }

};

const Hero = props => (

  <Grid container textAlign="center" justify="center">
    <Grid item xs={4}>
      <Paper>
        <div style={styles.container}>

            <FaCutlery style={styles.infoIcon}/>

          <h4 style={styles.text}>Wypróbuj naszą aplikację i wybierz lokal idealny dla siebie</h4>
          <p>Najlepsze lokale w mieście w zasięgu Twojej ręki! Uruchom aplikację i zobacz jakie to proste</p>
          <p>Wystarczy chwila, aby dowiedzieć się który lokal jest właśnie dla Ciebie!</p>
        </div>

      </Paper>
    </Grid>

    <Grid item xs={4}>
      <Paper>
        <div style={styles.container}>
          <img src={logo} alt="Logo"/>
          <h4 style={styles.text}>Wyszukiwarka najlepszych lokali w Twojej okolicy</h4>
          <p>Uruchom aplikację i wyszukaj lokal idealny dla Ciebie!! </p>
          <p>Sprawdź jakie masz dostępne lokale w okolicy i wybierz odpowiedni dla siebie </p>
        </div>
      </Paper>
    </Grid>

    <Grid item xs={4}>
      <Paper>
        <div style={styles.container}>
          <FaThumbsOUp style={styles.infoIcon}/>
          <h4 style={styles.text}>Ponad 95% użytkowników zadowolonych z aplikacji</h4>
          <p>Przekonaj się jak działa aplikacja i dołącz do zadowolonych użytkowników</p>
          <p>Aplikacja jest darmowa i dostępna z każdego miejsca na Ziemi w dodatku działa nawet na powolnym łączu!</p>
        </div>
      </Paper>
    </Grid>
  </Grid>


);

export default Hero;
