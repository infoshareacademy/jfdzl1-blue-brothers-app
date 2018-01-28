import React from 'react';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'
import Card, {CardActions, CardContent, CardMedia} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Grid from 'material-ui/Grid';
import logo from './clubfinder.png'
import Hero from './Hero'
import header from './background.jpg'
import {Link} from 'react-router-dom';

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

    header: {
        width: '50%',
        margin: '-5px 0',
        overflow: 'hidden'
    },
    background: {
        width: '100%',
        margin: '-5px 0',
        overflow: 'hidden'
    }
};

const Banner = props => (


    <Grid container textAlign="center" justify="center">
        <Grid item xs={12}>
            <Paper style={styles.paper}>
                <div style={styles.container}>
                <img src={header} width="50%" height="50%"/>
                <h3>cLUBfinder najlepsza wyszukiwarka lokali w Twojej okolicy!</h3>

                    <Link to="/list">
                        <Button
                            raised
                            color="primary"
                            style={styles.button}>
                            Start
                        </Button>
                    </Link>
                </div>
            </Paper>
        </Grid>
    </Grid>
);

export default Banner;

