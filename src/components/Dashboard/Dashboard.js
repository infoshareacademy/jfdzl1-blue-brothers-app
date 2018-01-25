import React, {Component} from 'react';
import {connect} from 'react-redux';

import {LineChart, BarChart, Bar, Line, XAxis, YAxis, PieChart, Pie,} from 'recharts';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'
import Tabs, {Tab} from 'material-ui/Tabs';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';
import logo from './clubfinder.png'

import {showNotification} from '../../UI/logic';

function TabContainer(props) {
  return (
    <Typography component="div" style={{padding: 8 * 3}}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const mapDispatchToProps = dispatch => {
  return {
    showSnackbar: (message) => dispatch(showNotification('App in progress. App coming soon!'))
  }
}

class Dashboard extends Component {

  state = {
    direction: 'row',
    justify: 'center',
    alignItems: 'center',
    value: 0
  };

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {alignItems, direction, justify} = this.state;
    const {value} = this.state;
    return (

        <Grid item xs={12}>

            <Paper>

              <div style={{textAlign: "center"}}>

                <AppBar position="static">
                  <Tabs>
                  </Tabs>
                </AppBar>

                <div>
                  <img src={logo}/>
                </div>
                <h2>Wyszukiwarka najlepszych lokali w Twojej okolicy</h2>
                <h3>Uruchom aplikację i wyszukaj lokal idealny dla Ciebie!! </h3>


              </div>
              <div style={{textAlign: "center"}}>
                <Button onClick={this.props.showSnackbar} raised color="primary"
                        style={{textAlign: "center", fontSize: 32}}>Start</Button>
              </div>


            </Paper>


        <Grid container spacing={24}>
          <Grid
            container
            alignItems={alignItems}
            direction={direction}
            justify={justify}
          >
          <Paper>
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
            <Paper>
            <Grid item xs={3}>
              <h2> Bars </h2>
              <LineChart width={300} height={200} data={dataBars}>
                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                <XAxis dataKey="name" stroke="#8884d8"/>
                <YAxis/>
              </LineChart>
            </Grid>
            </Paper>
            <Paper>
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
        </Grid>
      </Grid>
    )
  }
}


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

export default connect(null, mapDispatchToProps)(Dashboard);
