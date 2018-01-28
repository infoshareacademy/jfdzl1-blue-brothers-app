import React from 'react';
import Paper from 'material-ui/Paper';
import Grid from 'material-ui/Grid';
import {CardContent} from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import {LineChart, BarChart, Bar, Line, XAxis, YAxis, PieChart, Pie,} from 'recharts';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const styles = {
  paper: {
    marginBottom: 20,
    padding: 16
  },

  container: {
    textAlign: 'center'
  },
  grid: {
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
  }
};

const Stats = props => (
  <Paper style={styles.paper}>
    <Grid container textAlign="center" justify="center">
      <div style={styles.container}>
      <CardContent>
        <AppBar position="static">
          <Toolbar>
            <Typography type="title" color="inherit">
              Statystki aplikacji
            </Typography>
          </Toolbar>
        </AppBar>
      </CardContent>
      </div>
    </Grid>
    <Grid
      container
      alignItems={styles.grid.alignItems}
      direction={styles.grid.direction}
      justify={styles.grid.justify}
    >
      <Paper style={styles.paper}>
        <Grid item xs={3}>
          <h2> Visitor </h2>
          <BarChart width={300} height={200} data={data}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            <XAxis dataKey="name" stroke="#8884d8"/>
            <YAxis/>
            <Bar dataKey="pv" fill="#8884d8"/>
            <Bar dataKey="uv" fill="#82ca9d"/>
          </BarChart>
        </Grid>
      </Paper>
      <Paper style={styles.paper}>
        <Grid item xs={3}>
          <h2> Bars </h2>
          <LineChart width={300} height={200} data={dataBars}>
            <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
            <XAxis dataKey="name" stroke="#8884d8"/>
            <YAxis/>
          </LineChart>
        </Grid>
      </Paper>
      <Paper style={styles.paper}>
        <Grid item xs={3}>
          <h2> Customers </h2>
          <PieChart width={300} height={200}>
            <Pie data={dataCustomers} dataKey="uv" nameKey="name" cx="50%" cy="50%" outerRadius={30}
                 fill="#8884d8"/>
            <Pie data={data} dataKey="uv" nameKey="name" cx="50%" cy="50%" innerRadius={40} outerRadius={60}
                 fill="#82ca9d" label/>
          </PieChart>
        </Grid>
      </Paper>
    </Grid>
  </Paper>
);

const data = [
  {name: 'January', uv: 1000, pv: 1000, amt: 1000},
  {name: 'February', uv: 1000, pv: 1500, amt: 1000},
  {name: 'March', uv: 1500, pv: 1000, amt: 1500},
  {name: 'April', uv: 1500, pv: 1500, amt: 1000},
  {name: 'May', uv: 1500, pv: 1500, amt: 1000},

];


const dataBars = [
  {name: 'January', uv: 100, pv: 100, amt: 100},
  {name: 'February', uv: 100, pv: 100, amt: 150},
  {name: 'March', uv: 120, pv: 150, amt: 150},
  {name: 'April', uv: 150, pv: 150, amt: 100},
  {name: 'May', uv: 150, pv: 150, amt: 150},

];

const dataCustomers = [
  {name: 'January', uv: 2000, pv: 4300, amt: 4400},
  {name: 'February', uv: 1000, pv: 3390, amt: 2500},
  {name: 'March', uv: 2181, pv: 1800, amt: 5290},
  {name: 'May', uv: 4000, pv: 2000, amt: 2000},

];

export default Stats;
