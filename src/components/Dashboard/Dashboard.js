import React, {Component} from 'react';
import { connect } from 'react-redux';

import {LineChart, Line, XAxis, YAxis} from 'recharts';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import Button from 'material-ui/Button'
import Tabs, {Tab} from 'material-ui/Tabs';
import PhoneIcon from 'material-ui-icons/Phone';
import PersonPinIcon from 'material-ui-icons/PersonPin';
import HelpIcon from 'material-ui-icons/Help';
import ShoppingBasket from 'material-ui-icons/ShoppingBasket';
import ThumbDown from 'material-ui-icons/ThumbDown';
import ThumbUp from 'material-ui-icons/ThumbUp';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';
import PropTypes from 'prop-types';

import { showNotification } from '../../UI/logic';

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
        showSnackbar: (message) => dispatch(showNotification('Hello iSA :)'))
    }
}

class Dashboard extends Component {

    state = {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const {alignItems, direction, justify} = this.state;
        const {value} = this.state;
        return (
            <Grid container spacing={24}>
                <Grid item xs={12}>
                    <Grid
                        container
                        alignItems={alignItems}
                        direction={direction}
                        justify={justify}
                    >
                        <Paper>
                            <div>
                                <button onClick={this.props.showSnackbar}>CLICK ME!</button>
                            </div>
                            <div>
                                <AppBar position="static">
                                    <Tabs value={value} onChange={this.handleChange} scrollable scrollButtons="off">
                                        <Tab icon={<PhoneIcon/>}/>
                                        <Tab icon={<HelpIcon/>}/>
                                        <Tab icon={<ThumbDown/>}/>
                                        <Tab icon={<ThumbUp/>}/>
                                    </Tabs>
                                </AppBar>
                                <h1>PubFinder</h1>
                                <h2>Wyszukiwarka najlepszych lokali w Twojej okolicy</h2>
                                <h3>Uruchom aplikację i wyszukaj lokal idealny dla Ciebie!! </h3>

                                <Typography>
                                    {value === 0 && <TabContainer>Item One</TabContainer>}
                                    {value === 1 && <TabContainer>Item Two</TabContainer>}
                                    {value === 2 && <TabContainer>Item Three</TabContainer>}
                                    {value === 3 && <TabContainer>Item Four</TabContainer>}
                                </Typography>
                                </div>
                                    <div style={{textAlign: "center"}}>
                                    <Button raised color="primary"
                                            style={{textAlign: "center", fontSize: 32}}>Start</Button>
                                </div>

                        </Paper>
                    </Grid>
                </Grid>


                <Grid container spacing={24}>
                    <Grid
                        container
                        alignItems={alignItems}
                        direction={direction}
                        justify={justify}
                    >

                        <Grid item xs={3}>
                            <h2> Visitor </h2>
                            <LineChart width={300} height={200} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                                <XAxis dataKey="name" stroke="#8884d8"/>
                                <YAxis/>
                            </LineChart>
                        </Grid>


                        <Grid item xs={3}>
                            <h2> Bars </h2>
                            <LineChart width={300} height={200} data={dataBars}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                                <XAxis dataKey="name" stroke="#8884d8"/>
                                <YAxis/>
                            </LineChart>
                        </Grid>

                        <Grid item xs={3}>
                            <h2> Customers </h2>
                            <LineChart width={300} height={200} data={dataCustomers}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8"/>
                                <XAxis dataKey="name" stroke="#8884d8"/>
                                <YAxis/>
                            </LineChart>
                        </Grid>
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

const buttonStyle = {
    backgroundColor: 'red',
    color: 'white',
    fontSize: 20

};


export default connect(null, mapDispatchToProps)(Dashboard);
