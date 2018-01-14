import React, {Component} from 'react';
import {Bar, BarChart, CartesianGrid, XAxis, YAxis, Legend, Tooltip} from 'recharts';
import Grid from 'material-ui/Grid';

class Stats extends Component {

    state = {
        direction: 'row',
        justify: 'center',
        alignItems: 'center',
    };
    render() {
        const {classes} = this.props;
        const {alignItems, direction, justify} = this.state;

        return (

            <div>
                <Grid container spacing={24}>
                    <Grid item xs={12}>
                        <Grid
                            container
                            alignItems={alignItems}
                            direction={direction}
                            justify={justify}
                        >

                            <h1>Statystyki</h1>
                            <Grid item xs={4}>
                                <h2> Visitor </h2>
                                <BarChart width={730} height={250} data={data}>
                                    <CartesianGrid strokeDasharray="3 3"/>
                                    <XAxis dataKey="name"/>
                                    <YAxis/>
                                    <Tooltip/>
                                    <Legend/>
                                    <Bar dataKey="pv" fill="#8884d8"/>
                                    <Bar dataKey="uv" fill="#82ca9d"/>
                                </BarChart>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </div>
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


    export default Stats;
