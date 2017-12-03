import React, {Component} from 'react';
import { LineChart, Line, XAxis, YAxis } from 'recharts';
import { Col, Row, Grid } from 'react-bootstrap'



class Stats extends Component{
    render(){
        return(
            <div>

                <h1>Statystyki</h1>

                <Grid>
                    <Row>
                        <Col xs={4} >
                            <h2> Visitor </h2>
                            <LineChart width={300} height={200} data={data}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <XAxis dataKey="name" stroke="#8884d8" />
                                <YAxis />
                            </LineChart>
                        </Col>


                        <Col xs={4} >
                            <h2> Bars </h2>
                            <LineChart width={300} height={200} data={dataBars}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <XAxis dataKey="name" stroke="#8884d8" />
                                <YAxis />
                            </LineChart>
                        </Col>

                        <Col xs={4} >
                            <h2> Customers </h2>
                            <LineChart width={300} height={200} data={dataCustomers}>
                                <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                                <XAxis dataKey="name" stroke="#8884d8" />
                                <YAxis />
                            </LineChart>
                        </Col>
                    </Row>
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
